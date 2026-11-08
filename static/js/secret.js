// ==========================================
// ELEVATOR LOADING SEQUENCE (PABABA)
// ==========================================
window.addEventListener('load', () => {
    const overlay = document.getElementById('elevator-overlay');
    const floorNum = document.getElementById('floorNum');
    const galaxy = document.getElementById('galaxy');
    
    const elevatorHum = document.getElementById('elevatorHum');
    const elevatorDing = document.getElementById('elevatorDing');

    if(elevatorHum) {
        elevatorHum.volume = 0.3;
        elevatorHum.play().catch(e => console.log("Autoplay blocked:", e));
    }

    setTimeout(() => { if(floorNum) floorNum.innerText = "B2"; }, 1000);
    setTimeout(() => { if(floorNum) floorNum.innerText = "B3"; }, 2000);
    setTimeout(() => { if(floorNum) floorNum.innerText = "??"; }, 3000);

    setTimeout(() => {
        if(elevatorHum) {
            let fadeOut = setInterval(() => {
                if(elevatorHum.volume > 0.05) {
                    elevatorHum.volume -= 0.05;
                } else {
                    elevatorHum.pause();
                    elevatorHum.currentTime = 0;
                    clearInterval(fadeOut);
                }
            }, 100);
        }

        if(elevatorDing) {
            elevatorDing.play().catch(e => console.log("Ding play blocked:", e));
        }

        if(overlay) overlay.style.transform = 'translateY(-100%)';
        if(galaxy) galaxy.classList.add('revealed');
        
        setTimeout(() => {
            const welcome = document.getElementById('welcomeIntro');
            const moonWrap = document.getElementById('moonWrapper');
            if(welcome) welcome.classList.add('revealed');
            if(moonWrap) moonWrap.classList.add('revealed');
        }, 800);
    }, 3800);
});

// ==========================================
// ELEVATOR GOING UP (RETURN TO ARCADE)
// ==========================================
const upElevatorBtn = document.getElementById('upElevatorBtn');
const elevatorUpOverlay = document.getElementById('elevatorUpOverlay');

if (upElevatorBtn && elevatorUpOverlay) {
    upElevatorBtn.addEventListener('click', () => {
        const elevatorHum = document.getElementById('elevatorHum');
        if (elevatorHum) {
            elevatorHum.volume = 0.3;
            elevatorHum.currentTime = 0;
            elevatorHum.play().catch(e => console.log(e));
        }

        elevatorUpOverlay.style.transform = 'translateY(0)';
        elevatorUpOverlay.style.pointerEvents = 'auto';

        const upFloorNum = document.getElementById('upFloorNum');
        setTimeout(() => { if(upFloorNum) upFloorNum.innerText = "B2"; }, 1000);
        setTimeout(() => { if(upFloorNum) upFloorNum.innerText = "B3"; }, 2000);
        setTimeout(() => { if(upFloorNum) upFloorNum.innerText = "1"; }, 3000);

        setTimeout(() => {
            const elevatorDing = document.getElementById('elevatorDing');
            if (elevatorDing) {
                elevatorDing.play().catch(e => console.log(e));
            }
            setTimeout(() => {
                window.location.href = '/arcade';
            }, 500); 
        }, 3800); 
    });
}

// ==========================================
// FARE TRACKER TRANSITION (BAGO)
// ==========================================
// Kapag pinindot ang Fare Tracker button, may elevator na bababa (B1 -> B2 -> B3 -> ???)
// tapos lilipat sa /secret-basement/fare-tracker
const fareTrackerBtn = document.getElementById('fareTrackerBtn');

if (fareTrackerBtn) {
    fareTrackerBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Pigilan ang default link behavior
        
        // Kunin ang overlay elements
        const overlay = document.getElementById('elevator-overlay');
        const floorNum = document.getElementById('floorNum');
        const elevatorHum = document.getElementById('elevatorHum');
        const elevatorDing = document.getElementById('elevatorDing');
        
        // I-play ang ugong
        if (elevatorHum) {
            elevatorHum.volume = 0.3;
            elevatorHum.currentTime = 0;
            elevatorHum.play().catch(e => console.log(e));
        }
        
        // Ibaba ang elevator overlay (pabalik sa view)
        if (overlay) {
            overlay.style.transition = 'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)';
            overlay.style.transform = 'translateY(0)';
            overlay.style.pointerEvents = 'auto';
        }
        
        // Sequence: B1 -> B2 -> B3 -> ??? (mabilis lang)
        if (floorNum) floorNum.innerText = 'B1';
        setTimeout(() => { if(floorNum) floorNum.innerText = "B2"; }, 700);
        setTimeout(() => { if(floorNum) floorNum.innerText = "B3"; }, 1400);
        setTimeout(() => { if(floorNum) floorNum.innerText = "??"; }, 2100);
        
        // Play ding at fade hum after 2.6s
        setTimeout(() => {
            if (elevatorHum) {
                let fadeOut = setInterval(() => {
                    if(elevatorHum.volume > 0.05) {
                        elevatorHum.volume -= 0.05;
                    } else {
                        elevatorHum.pause();
                        elevatorHum.currentTime = 0;
                        clearInterval(fadeOut);
                    }
                }, 100);
            }
            if (elevatorDing) {
                elevatorDing.play().catch(e => console.log(e));
            }
        }, 2600);
        
        // Lumipat sa Fare Tracker after 3.2s
        setTimeout(() => {
            window.location.href = '/secret-basement/fare-tracker';
        }, 3200);
    });
}

// ==========================================
// DATA (localStorage)
// ==========================================
const STORAGE_KEY = 'galaxy_universe_v1';

let data = {
    name: 'You',
    photo: '',
    messages: [
        { id: 1, title: 'The First Hello', content: 'The day I met you, the whole universe shifted.', date: '' },
        { id: 2, title: 'A Quiet Night', content: 'Just us, the stars, and everything unsaid.', date: '' },
        { id: 3, title: 'Your Smile', content: 'Brighter than every star in this sky.', date: '' }
    ]
};

function loadData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try { data = JSON.parse(saved); } catch (e) { console.warn('Invalid data'); }
    }
    applyData();
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function applyData() {
    const moonName = document.getElementById('moonName');
    const introName = document.getElementById('introName');
    if (moonName) moonName.innerText = data.name || 'You';
    if (introName) introName.innerText = data.name || 'You';
    
    const moonImg = document.getElementById('moonImg');
    if (moonImg) {
        if (data.photo) {
            moonImg.style.backgroundImage = `url(${data.photo})`;
        } else {
            moonImg.style.backgroundImage = 'linear-gradient(135deg, #c9b98c, #8b7d5a)';
        }
    }

    const setNameInput = document.getElementById('setName');
    if (setNameInput) setNameInput.value = data.name || '';
    
    buildOrbits();
    renderMsgList();
}

// ==========================================
// ORBIT & STARS
// ==========================================
const orbitSystem = document.getElementById('orbitSystem');

function buildOrbits() {
    if (!orbitSystem) return;
    orbitSystem.innerHTML = '';
    
    const msgs = data.messages;
    const total = msgs.length;
    if (total === 0) return;

    const orbitCount = Math.min(4, Math.max(1, Math.ceil(total / 3)));
    const isMobile = window.innerWidth < 768;
    const baseRadius = isMobile ? 130 : 190;
    const radiusStep = isMobile ? 65 : 90;

    const groups = Array.from({ length: orbitCount }, () => []);
    msgs.forEach((m, i) => groups[i % orbitCount].push(m));

    groups.forEach((group, orbitIdx) => {
        if (group.length === 0) return;

        const radius = baseRadius + orbitIdx * radiusStep;
        const duration = 20 + orbitIdx * 10;
        const direction = orbitIdx % 2 === 0 ? 'normal' : 'reverse';

        const ring = document.createElement('div');
        ring.className = 'orbit';
        ring.style.width = `${radius * 2}px`;
        ring.style.height = `${radius * 2}px`;
        orbitSystem.appendChild(ring);

        const spin = document.createElement('div');
        spin.className = 'orbit-spin';
        spin.style.width = `${radius * 2}px`;
        spin.style.height = `${radius * 2}px`;
        spin.style.animationDuration = `${duration}s`;
        spin.style.animationDirection = direction;
        orbitSystem.appendChild(spin);

        group.forEach((msg, i) => {
            const angle = (360 / group.length) * i;
            const size = 14 + Math.random() * 6;

            const wrapper = document.createElement('div');
            wrapper.style.position = 'absolute';
            wrapper.style.top = '50%';
            wrapper.style.left = '50%';
            wrapper.style.width = '0';
            wrapper.style.height = '0';
            wrapper.style.transform = `rotate(${angle}deg) translateX(${radius}px)`;
            wrapper.style.zIndex = '15';
            wrapper.style.pointerEvents = 'none';

            const star = document.createElement('div');
            star.className = 'orbit-star';
            star.style.position = 'absolute';
            star.style.top = `-${size / 2}px`;
            star.style.left = `-${size / 2}px`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.pointerEvents = 'auto';
            star.style.zIndex = '20';
            star.style.cursor = 'pointer';
            star.dataset.id = msg.id;

            star.onclick = function(e) {
                e.stopPropagation();
                e.preventDefault();
                openMessage(msg);
            };

            const inner = document.createElement('span');
            inner.className = 'star-inner';
            inner.style.animationDuration = `${duration}s`;
            inner.style.animationDirection = direction === 'normal' ? 'reverse' : 'normal';
            star.appendChild(inner);

            wrapper.appendChild(star);
            spin.appendChild(wrapper);
        });
    });
}

// ==========================================
// MESSAGE POPUP
// ==========================================
const popupOverlay = document.getElementById('popupOverlay');

function openMessage(msg) {
    if (!popupOverlay) return;
    document.getElementById('popupTitle').innerText = msg.title || 'A Message';
    document.getElementById('popupContent').innerText = msg.content || '';
    document.getElementById('popupDate').innerText = msg.date || '';
    popupOverlay.classList.add('active');
}

if(document.getElementById('popupClose')) {
    document.getElementById('popupClose').addEventListener('click', () => {
        popupOverlay.classList.remove('active');
    });
}

if(popupOverlay) {
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) popupOverlay.classList.remove('active');
    });
}

// ==========================================
// MOON FINAL MESSAGE
// ==========================================
const finalOverlay = document.getElementById('finalOverlay');
const moonElement = document.getElementById('moon');

if (moonElement) {
    moonElement.addEventListener('click', () => {
        if(finalOverlay) finalOverlay.classList.add('active');
    });
}

if(document.getElementById('finalClose')) {
    document.getElementById('finalClose').addEventListener('click', () => {
        if(finalOverlay) finalOverlay.classList.remove('active');
    });
}

if(finalOverlay) {
    finalOverlay.addEventListener('click', (e) => {
        if (e.target === finalOverlay) finalOverlay.classList.remove('active');
    });
}

// ==========================================
// SETTINGS PANEL
// ==========================================
const settingsPanel = document.getElementById('settingsPanel');

if(document.getElementById('settingsBtn')) {
    document.getElementById('settingsBtn').addEventListener('click', () => {
        if(settingsPanel) settingsPanel.classList.toggle('open');
    });
}

if(document.getElementById('closeSettingsBtn')) {
    document.getElementById('closeSettingsBtn').addEventListener('click', () => {
        if(settingsPanel) settingsPanel.classList.remove('open');
    });
}

if(document.getElementById('setName')) {
    document.getElementById('setName').addEventListener('input', (e) => {
        data.name = e.target.value;
        saveData();
        applyData();
    });
}

if(document.getElementById('setPhoto')) {
    document.getElementById('setPhoto').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            data.photo = ev.target.result;
            saveData();
            applyData();
        };
        reader.readAsDataURL(file);
    });
}

if(document.getElementById('addMsgBtn')) {
    document.getElementById('addMsgBtn').addEventListener('click', () => {
        const title = document.getElementById('setMsgTitle').value.trim();
        const content = document.getElementById('setMsgContent').value.trim();
        const date = document.getElementById('setMsgDate').value;

        if (!title || !content) {
            alert('Please add a title and message.');
            return;
        }

        data.messages.push({
            id: Date.now(),
            title,
            content,
            date
        });

        saveData();
        applyData();

        document.getElementById('setMsgTitle').value = '';
        document.getElementById('setMsgContent').value = '';
        document.getElementById('setMsgDate').value = '';
    });
}

function renderMsgList() {
    const list = document.getElementById('msgList');
    if(!list) return;
    list.innerHTML = '';

    if (data.messages.length === 0) {
        list.innerHTML = '<p style="font-size:0.8rem;color:#666;">No messages yet.</p>';
        return;
    }

    data.messages.forEach(m => {
        const item = document.createElement('div');
        item.className = 'msg-item';
        item.innerHTML = `
            <span>${m.title}</span>
            <button title="Delete">✕</button>
        `;
        item.querySelector('button').addEventListener('click', () => {
            if (confirm(`Delete "${m.title}"?`)) {
                data.messages = data.messages.filter(x => x.id !== m.id);
                saveData();
                applyData();
            }
        });
        list.appendChild(item);
    });
}

// ==========================================
// BACKGROUND STARS (procedural)
// ==========================================
function createBackgroundStars() {
    const container = document.getElementById('starsBg');
    if(!container) return;
    const count = window.innerWidth < 768 ? 60 : 120;
    
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'bg-star';
        const size = Math.random() * 2 + 0.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        container.appendChild(star);
    }
}

// ==========================================
// SHOOTING STARS
// ==========================================
function createShootingStar() {
    const galaxy = document.getElementById('galaxy');
    if(!galaxy) return;
    
    const star = document.createElement('div');
    star.style.cssText = `
        position: absolute;
        top: ${Math.random() * 50}%;
        left: ${Math.random() * 50}%;
        width: 2px;
        height: 2px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 0 10px 2px white;
        pointer-events: none;
        z-index: 2;
    `;

    const trail = document.createElement('div');
    trail.style.cssText = `
        position: absolute;
        top: 0; left: 0;
        width: 100px;
        height: 1px;
        background: linear-gradient(90deg, white, transparent);
        transform: translateX(-100px);
    `;
    star.appendChild(trail);

    galaxy.appendChild(star);

    star.animate([
        { transform: 'translate(0, 0)', opacity: 1 },
        { transform: 'translate(300px, 300px)', opacity: 0 }
    ], {
        duration: 1500,
        easing: 'ease-in'
    }).onfinish = () => star.remove();
}

// ==========================================
// MUSIC CONTROL
// ==========================================
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let musicPlaying = false;

if (musicBtn && bgMusic) {
    musicBtn.addEventListener('click', () => {
        const hasSource = bgMusic.querySelector('source') || bgMusic.src;
        
        if (!hasSource) {
            alert('Walang audio file na naka-link. Siguraduhing may romantic.mp3 sa static/audio/ folder.');
            return;
        }
        
        if (musicPlaying) {
            bgMusic.pause();
            musicBtn.innerText = '♪';
            musicBtn.style.opacity = '0.5';
        } else {
            bgMusic.play().then(() => {
                musicPlaying = true;
                musicBtn.innerText = '❚❚';
                musicBtn.style.opacity = '1';
            }).catch((error) => {
                console.error("Audio error:", error);
                alert('Hindi ma-play ang audio. Tignan ang Console (F12) para sa detalye.');
            });
        }
    });
}

// ==========================================
// INITIALIZATION
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    loadData();
    createBackgroundStars();
    
    setInterval(() => {
        if (Math.random() > 0.5) createShootingStar();
    }, 4000);
});

// Resize handler para sa mobile
window.addEventListener('resize', () => {
    buildOrbits();
});