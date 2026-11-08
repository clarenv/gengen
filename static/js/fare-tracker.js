// static/js/fare-tracker.js

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. LOADING TRANSITION
    // ==========================================
    const loader = document.getElementById('loader');
    const jeep = document.getElementById('jeep-svg');
    const mainContent = document.getElementById('main-content');
    const backBtn = document.getElementById('backBtn');

    // Kapag pinindot ang back button
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            mainContent.classList.add('hidden'); // Itago ang dashboard
            loader.classList.remove('fade-out'); // Ipakita ulit ang loader
            
            const loaderText = document.querySelector('.loader-text');
            if(loaderText) loaderText.innerText = "Bumabalik sa Secret Room...";
            
            // Palitan ang direksyon ng jeep pabalik
            if (jeep) {
                jeep.classList.remove('right');
                jeep.classList.add('left');
            }

            // Pagkatapos ng animation, lumipat pabalik sa secret room
            setTimeout(() => {
                window.location.href = "/secret-basement";
            }, 1500);
        });
    }

    // Dito natin i-run ang lohika ng dashboard pagkatapos ng loading
    // Maghihintay tayo ng 2.5 seconds bago itago ang loader
    setTimeout(() => {
        if(loader) loader.classList.add('fade-out');
        if(mainContent) mainContent.classList.remove('hidden');
        
        // I-initialize ang dashboard logic dito
        initDashboard();
    }, 2500);


    // ==========================================
    // 2. DASHBOARD LOGIC
    // ==========================================
    function initDashboard() {
        const data = window.FARE_DATA;
        if (!data) {
            console.error("Fare data not loaded.");
            return;
        }

        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const routesGrid = document.getElementById('routesGrid');
        const routeCount = document.getElementById('routeCount');
        const sectionTitle = document.getElementById('sectionTitle');
        const chips = document.querySelectorAll('.chip');
        const expandMapBtn = document.getElementById('expandMapBtn');
        const mapModal = document.getElementById('mapModal');
        const closeMapBtn = document.getElementById('closeMapBtn');

        let currentFilter = 'ALL';
        let currentSearch = '';
        let miniMapInstance = null;
        let fullMapInstance = null;

        function calcFare(type, km) {
            const rule = data.fares[type];
            if (!rule) return 0;
            let fare = rule.baseFare;
            if (km > rule.baseKm) {
                fare += (km - rule.baseKm) * rule.perKm;
            }
            return Math.max(rule.minFare, Math.round(fare * 100) / 100);
        }

        function renderRoutes() {
            const q = currentSearch.toLowerCase();
            let displayRoutes = [];

            // 1. I-filter ang mga normal na ruta (Jeep, Bus, at yung mga nasa routes array)
            const filteredRoutes = data.routes.filter(r => {
                const matchType = currentFilter === 'ALL' || r.type === currentFilter;
                const matchSearch = !q || 
                    r.name.toLowerCase().includes(q) || 
                    r.code.toLowerCase().includes(q) ||
                    r.stops.some(s => s.name.toLowerCase().includes(q));
                return matchType && matchSearch;
            });
            displayRoutes = [...filteredRoutes];

            // 2. LOGIC PARA SA MGA BARANGAY (Tricycle Routes)
            // Kung ang filter ay TRICYCLE, o ALL na may search, isama ang mga barangay.
            if (currentFilter === 'TRICYCLE' || (currentFilter === 'ALL' && q)) {
                if (data.barangays) {
                    // Kung walang tinype (q is empty) at TRICYCLE ang pinindot, ipakita LAHAT.
                    // Kung may tinype, i-filter lang ang mga tugmang barangay.
                    const matchedBarangays = !q 
                        ? data.barangays 
                        : data.barangays.filter(b => b.toLowerCase().includes(q));
                    
                    matchedBarangays.forEach((brgy, index) => {
                        displayRoutes.push({
                            id: `brgy-${index}`,
                            code: "LAG-TRI",
                            name: `${brgy} (Lokal na Tricycle)`,
                            type: "TRICYCLE",
                            distanceKm: 2.0, // Default assumption
                            estimatedMins: 10,
                            stops: [
                                { name: brgy, lat: 14.2780, lng: 121.4150 }, // Naka-pin muna sa sentro
                                { name: "Sta. Cruz Town Proper", lat: 14.2780, lng: 121.4150 }
                            ]
                        });
                    });
                }
            }

            routeCount.textContent = `${displayRoutes.length} ruta`;
            
            // I-update ang title depende sa pinindot
            if (currentSearch) {
                sectionTitle.textContent = `Results for "${currentSearch}"`;
            } else if (currentFilter === 'TRICYCLE') {
                sectionTitle.textContent = 'Mga Lokal na Tricycle (Barangays)';
            } else {
                sectionTitle.textContent = 'Mga Ruta sa Laguna';
            }

            if (displayRoutes.length === 0) {
                routesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666; padding: 40px;">Walang nahanap. Subukan ang ibang search.</p>`;
                return;
            }

            routesGrid.innerHTML = displayRoutes.map(r => {
                const fare = calcFare(r.type, r.distanceKm);
                return `
                    <div class="route-card ${r.type.toLowerCase()}" data-route-id="${r.id}">
                        <div class="route-code">${r.code}</div>
                        <h4>${r.name}</h4>
                        <div class="route-meta">
                            <span>🚏 ${r.stops.length} stops</span>
                            <span>⏱ ~${r.estimatedMins} min</span>
                            <span>📏 ${r.distanceKm} km</span>
                        </div>
                        <div class="route-fare">₱${fare.toFixed(2)} <small>base fare</small></div>
                    </div>
                `;
            }).join('');

            document.querySelectorAll('.route-card').forEach(card => {
                card.addEventListener('click', () => {
                    const routeId = card.dataset.routeId;
                    // Hanapin sa displayRoutes imbes na sa data.routes para kasama ang mga barangay
                    const route = displayRoutes.find(r => r.id === routeId);
                    if (route) showRouteOnMap(route);
                });
            });
        }

        if (searchInput) {
            let debounceTimer;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => {
                    currentSearch = e.target.value.trim();
                    renderRoutes();
                }, 300);
            });
        }

        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                currentSearch = searchInput.value.trim();
                renderRoutes();
            });
        }

        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                chips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                currentFilter = chip.dataset.type;
                // Kapag pinindot ang Tricycle, i-clear ang search para lumabas lahat ng barangay
                if (currentFilter === 'TRICYCLE') {
                    currentSearch = '';
                    searchInput.value = '';
                }
                renderRoutes();
            });
        });

        const routeColors = { JEEPNEY: '#F59E0B', BUS: '#3B82F6', TRICYCLE: '#10B981' };

        function buildMap(mapInstance) {
            // Stadia Maps (Dark Mode) para walang "API KEY REQUIRED" watermark
            L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
                maxZoom: 20,
                attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            }).addTo(mapInstance);

            data.routes.forEach(route => {
                const coords = route.stops.map(s => [s.lat, s.lng]);
                L.polyline(coords, {
                    color: routeColors[route.type] || '#fff',
                    weight: 4,
                    opacity: 0.7
                }).addTo(mapInstance).bindPopup(`<b>${route.code}</b><br>${route.name}`);

                route.stops.forEach((s, i) => {
                    L.circleMarker([s.lat, s.lng], {
                        radius: 5,
                        color: routeColors[route.type] || '#fff',
                        fillColor: '#05030f',
                        fillOpacity: 1,
                        weight: 2
                    }).addTo(mapInstance).bindTooltip(`${i + 1}. ${s.name}`, { direction: 'top' });
                });
            });
            return mapInstance;
        }

        if (document.getElementById('miniMap')) {
            miniMapInstance = L.map('miniMap', { zoomControl: false }).setView([14.2780, 121.4150], 11);
            buildMap(miniMapInstance);
            
            // FIX: I-invalidate ang size para mag-render nang tama pagkatapos ng animation
            setTimeout(() => {
                miniMapInstance.invalidateSize();
            }, 500);
        }

        if (expandMapBtn) {
            expandMapBtn.addEventListener('click', () => {
                mapModal.classList.remove('hidden');
                if (!fullMapInstance) {
                    fullMapInstance = L.map('fullMap').setView([14.2780, 121.4150], 11);
                    buildMap(fullMapInstance);
                }
                // FIX: Kailangan i-invalidate ang size kasi naka-hide ito noong una
                setTimeout(() => fullMapInstance.invalidateSize(), 200);
            });
        }

        if (closeMapBtn) {
            closeMapBtn.addEventListener('click', () => {
                mapModal.classList.add('hidden');
            });
        }

        function showRouteOnMap(route) {
            if (!miniMapInstance) return;
            const coords = route.stops.map(s => [s.lat, s.lng]);
            
            // Kung iisang point lang (tulad ng barangay na naka-pin sa isang lugar), i-setView
            if (coords.length === 1 || (coords[0][0] === coords[1][0] && coords[0][1] === coords[1][1])) {
                miniMapInstance.setView(coords[0], 14);
            } else {
                miniMapInstance.fitBounds(coords, { padding: [30, 30] });
            }

            document.querySelector('.map-preview-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Maglagay ng pansamantalang highlight
            if (coords.length > 1) {
                const highlight = L.polyline(coords, {
                    color: '#FFD700',
                    weight: 8,
                    opacity: 0.9
                }).addTo(miniMapInstance);
                
                setTimeout(() => miniMapInstance.removeLayer(highlight), 2000);
            }
        }

        renderRoutes();
    }
});