document.addEventListener("DOMContentLoaded", () => {
    
    // ---------- MOBILE MENU ----------
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.textContent = navLinks.classList.contains('active') ? 'CLOSE' : 'MENU';
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.textContent = 'MENU';
            });
        });
    }

    // ---------- AUDIO PLAYER ----------
    const audioBtn = document.getElementById('audioBtn');
    const bgMusic = document.getElementById('bgMusic');
    const iconSpan = audioBtn.querySelector('.icon');
    let isPlaying = false;

    if (audioBtn && bgMusic) {
        bgMusic.volume = 0.3; // 30% volume

        audioBtn.addEventListener('click', () => {
            if (isPlaying) {
                bgMusic.pause();
                iconSpan.textContent = '🔇';
                audioBtn.querySelector('.btn-text').textContent = 'AUDIO OFF';
            } else {
                bgMusic.play().then(() => {
                    iconSpan.textContent = '🔊';
                    audioBtn.querySelector('.btn-text').textContent = 'AUDIO ON';
                }).catch(error => {
                    console.log("Kailangan ng user interaction bago mag-play.");
                });
            }
            isPlaying = !isPlaying;
        });
    }

    // ---------- SCROLL ANIMATION (Fade-in) ----------
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.about-box, .project-card, .skill-card, .contact-box').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});