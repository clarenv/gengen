document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. DEFAULT DATA (Hardcoded Images - No Links)
    // ==========================================
    const defaultData = {
        name: "CLARENCE",
        photoUrl: "/static/img/kazuha.jpg",
        about: "Hello! I'm Clarence Erlanda, a 4th-year BSIT student majoring in Software Development at Laguna University. I treat every line of code like a high-stakes hand—calculated, precise, and aiming for perfection.",
        
        projects: [
            // --- APPS ---
            { 
                title: "Food Ordering System", 
                desc: "A full-stack mobile application for online food ordering with cart functionality and real-time order tracking.", 
                cat: "app", 
                img: "/static/img/food-app.png" 
            },
            { 
                title: "Sharing Memory & Messaging", 
                desc: "A social mobile app where users can share memories, post photos, and chat with friends in real-time.", 
                cat: "app", 
                img: "/static/img/messaging-app.png" 
            },
            // --- WEB ---
            { 
                title: "The Arcade Room", 
                desc: "An interactive web-based mini-game hub featuring classic games like UNO, Color Game, Minesweeper, and Horse Race.", 
                cat: "web", 
                img: "/static/img/arcade-thumb.png" 
            },
            { 
                title: "Secret Orbit Room", 
                desc: "A romantic, interactive galaxy-themed website where messages orbit around a central moon. Accessible via a secret elevator.", 
                cat: "web", 
                img: "/static/img/orbit-room.png" 
            },
            // --- EXISTING PROJECTS ---
            { 
                title: "Capstone Project App", 
                desc: "A comprehensive system built for my capstone requirement.", 
                cat: "app", 
                img: "" 
            },
            { 
                title: "Personal E-Commerce Web", 
                desc: "An online store platform built with a sleek UI.", 
                cat: "web", 
                img: "" 
            }
        ],
        
        certs: [
            { title: "Web Development Seminar 2025", img: "/static/img/cert1.png" },
            { title: "IT Summit & Hackathon", img: "/static/img/cert2.jpg" }
        ],
        stats: [
            { label: "Creativity", val: "100%" },
            { label: "Problem Solving", val: "95%" },
            { label: "Web Development", val: "90%" },
            { label: "Luck", val: "Sagad" }
        ]
    };

    let siteData = JSON.parse(localStorage.getItem('casinoPortfolio')) || defaultData;

    // ==========================================
    // 2. RENDER FUNCTIONS
    // ==========================================
    function renderAll() {
        // Hero Name & Photo
        document.getElementById('heroName').innerHTML = `${siteData.name} <br><span class="gold-text">ERLANDA.</span>`;
        document.getElementById('profileImg').src = siteData.photoUrl;

        // About
        document.getElementById('aboutText').innerText = siteData.about;

        // Stats
        const statsList = document.getElementById('statsList');
        if(statsList) {
            statsList.innerHTML = '';
            siteData.stats.forEach(s => {
                statsList.innerHTML += `<li><span>${s.label}</span><span class="stat-val">${s.val}</span></li>`;
            });
        }

        // Projects (Display Only - Walang Link o Button)
        const projGrid = document.getElementById('projectsGrid');
        if(projGrid) {
            projGrid.innerHTML = '';
            siteData.projects.forEach(p => {
                const imgContent = p.img 
                    ? `<img src="${p.img}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover;">` 
                    : `<span class="tag">PROJECT</span>`;

                projGrid.innerHTML += `
                    <div class="card" data-cat="${p.cat}" data-title="${p.title.toLowerCase()}">
                        <div class="card-img ${p.img ? '' : 'bg-app1'}">
                            ${imgContent}
                        </div>
                        <div class="card-content">
                            <h3>${p.title}</h3>
                            <p>${p.desc}</p>
                            <div class="tags"><span>${p.cat.toUpperCase()}</span></div>
                        </div>
                    </div>
                `;
            });
        }

        // Certificates
        const certsGrid = document.getElementById('certsGrid');
        if(certsGrid) {
            certsGrid.innerHTML = '';
            siteData.certs.forEach(c => {
                certsGrid.innerHTML += `
                    <div class="card">
                        <div class="card-img bg-cert">
                            <img src="${c.img}" alt="${c.title}" onclick="openCertPreview('${c.img}')">
                        </div>
                        <div class="card-content">
                            <h3>${c.title}</h3>
                        </div>
                    </div>
                `;
            });
        }

        // Re-initialize filters and scroll reveal after rendering
        setupFilters();
        setupScrollReveal();
    }

    // ==========================================
    // 3. AUDIO PLAYER
    // ==========================================
    const bgMusic = document.getElementById("bgMusic");
    const audioBtn = document.getElementById("audioBtn");
    if (bgMusic && audioBtn) {
        bgMusic.volume = 0.3;
        audioBtn.addEventListener("click", () => {
            if (bgMusic.muted) {
                bgMusic.muted = false;
                audioBtn.innerHTML = '<span class="icon">🔊</span><span class="btn-text">MUTE</span>';
                bgMusic.play();
            } else {
                bgMusic.muted = true;
                audioBtn.innerHTML = '<span class="icon">🔇</span><span class="btn-text">UNMUTE</span>';
            }
        });
    }

    // ==========================================
    // 4. THEME TOGGLE (Dark/Light)
    // ==========================================
    const themeToggle = document.getElementById('themeToggle');
    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            themeToggle.innerText = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
        });
    }

    // ==========================================
    // 5. MOBILE MENU
    // ==========================================
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    if(menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.innerText = navLinks.classList.contains("active") ? "CLOSE" : "MENU";
        });
    }

    // ==========================================
    // 6. 3D TILT EFFECT
    // ==========================================
    const tiltFrame = document.getElementById("tiltFrame");
    const heroSection = document.querySelector('.hero');
    if(tiltFrame && heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 25; 
            let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            tiltFrame.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        heroSection.addEventListener('mouseleave', () => {
            tiltFrame.style.transform = `rotateY(0deg) rotateX(0deg)`;
            tiltFrame.style.transition = "transform 0.5s ease"; 
        });
        heroSection.addEventListener('mouseenter', () => {
            tiltFrame.style.transition = "transform 0.1s ease-out";
        });
    }

    // ==========================================
    // 7. SCROLL REVEAL & BACK TO TOP
    // ==========================================
    function setupScrollReveal() {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });
        reveals.forEach(r => observer.observe(r));
    }

    const backToTopBtn = document.getElementById('backToTopBtn');
    if(backToTopBtn) {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300) backToTopBtn.style.display = 'block';
            else backToTopBtn.style.display = 'none';
        });
        backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // ==========================================
    // 8. PROJECT FILTERS & SEARCH
    // ==========================================
    function setupFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const searchInput = document.getElementById('projSearch');
        const cards = document.querySelectorAll('#projectsGrid .card');

        function filterCards() {
            const activeBtn = document.querySelector('.filter-btn.active');
            if(!activeBtn) return;
            const activeFilter = activeBtn.dataset.filter;
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

            cards.forEach(card => {
                const matchFilter = activeFilter === 'all' || card.dataset.cat === activeFilter;
                const matchSearch = card.dataset.title.includes(searchTerm);
                
                if (matchFilter && matchSearch) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterCards();
            });
        });

        if(searchInput) {
            searchInput.addEventListener('input', filterCards);
        }
    }

    // ==========================================
    // 9. CONTACT FORM VALIDATION
    // ==========================================
    window.handleContact = function(e) {
        e.preventDefault();
        const feedback = document.getElementById('formFeedback');
        const name = document.getElementById('cName').value.trim();
        const email = document.getElementById('cEmail').value.trim();
        const msg = document.getElementById('cMessage').value.trim();
        
        if(!name || !email || !msg) {
            feedback.innerText = "Please fill out all fields.";
            feedback.className = "feedback error";
            return;
        }
        
        if(!email.includes('@')) {
            feedback.innerText = "Please enter a valid email address.";
            feedback.className = "feedback error";
            return;
        }
        
        feedback.innerText = "Message sent! (Note: Demo only, no backend connected yet.)";
        feedback.className = "feedback success";
        document.getElementById('contactForm').reset();
        setTimeout(() => feedback.innerText = '', 5000);
    }

    // ==========================================
    // 10. CERTIFICATE PREVIEW
    // ==========================================
    window.openCertPreview = function(imgUrl) {
        const previewWindow = window.open('', '_blank');
        previewWindow.document.write(`
            <html>
                <head><title>Certificate Preview</title></head>
                <body style="background: #000; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;">
                    <img src="${imgUrl}" style="max-width: 90%; max-height: 90%; box-shadow: 0 0 20px rgba(255,255,255,0.5);">
                </body>
            </html>
        `);
    }

    // ==========================================
    // 11. SECRET ADMIN PANEL & ARCADE
    // ==========================================
    const secretLogo = document.getElementById('secretLogo');
    const adminPanel = document.getElementById('adminPanel');
    let logoClicks = 0;
    let clickTimer;

    if(secretLogo && adminPanel) {
        secretLogo.addEventListener('click', (e) => {
            logoClicks++;
            clearTimeout(clickTimer);
            clickTimer = setTimeout(() => { logoClicks = 0; }, 1000);

            if(logoClicks >= 5) {
                e.preventDefault();
                adminPanel.classList.add('active');
                logoClicks = 0;

                document.getElementById('adminName').value = siteData.name;
                document.getElementById('adminPhotoUrl').value = siteData.photoUrl;
                document.getElementById('adminAbout').value = siteData.about;
            }
        });
    }

    window.saveAdmin = function() {
        siteData.name = document.getElementById('adminName').value;
        siteData.photoUrl = document.getElementById('adminPhotoUrl').value;
        siteData.about = document.getElementById('adminAbout').value;
        
        localStorage.setItem('casinoPortfolio', JSON.stringify(siteData));
        adminPanel.classList.remove('active');
        renderAll();
    }

    window.addProject = function() {
        const title = document.getElementById('newProjTitle').value.trim();
        const desc = document.getElementById('newProjDesc').value.trim();
        const cat = document.getElementById('newProjCategory').value.trim().toLowerCase() || 'web';
        const img = document.getElementById('newProjImg') ? document.getElementById('newProjImg').value.trim() : ""; 
        
        if(title && desc) {
            siteData.projects.push({ title, desc, cat, img: img });
            localStorage.setItem('casinoPortfolio', JSON.stringify(siteData));
            renderAll();
            alert('Project Added!');
            document.getElementById('newProjTitle').value = '';
            document.getElementById('newProjDesc').value = '';
            document.getElementById('newProjCategory').value = '';
            if(document.getElementById('newProjImg')) document.getElementById('newProjImg').value = '';
        }
    }

    window.addCert = function() {
        const title = document.getElementById('newCertTitle').value.trim();
        const img = document.getElementById('newCertImgUrl').value.trim();
        
        if(title && img) {
            siteData.certs.push({ title, img });
            localStorage.setItem('casinoPortfolio', JSON.stringify(siteData));
            renderAll();
            alert('Certificate Added!');
            document.getElementById('newCertTitle').value = '';
            document.getElementById('newCertImgUrl').value = '';
        }
    }

    // Secret Arcade Hotkey & Logo Trigger
    const secretBtn = document.getElementById("secretGamesBtn");
    if(secretLogo && secretBtn) {
        let arcadeClicks = 0;
        secretLogo.addEventListener('click', () => {
            arcadeClicks++;
            if(arcadeClicks >= 3) {
                secretBtn.style.display = "block";
                arcadeClicks = 0;
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "g" && secretBtn) {
            secretBtn.style.display = "block";
        }
    });

    // ==========================================
    // 12. INITIALIZATION
    // ==========================================
    renderAll();
});