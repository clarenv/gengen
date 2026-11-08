document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. AUDIO PLAYER (Autoplay at Mute/Unmute)
    // ==========================================
    const bgMusic = document.getElementById("bgMusic");
    const audioBtn = document.getElementById("audioBtn");
    const audioIcon = audioBtn ? audioBtn.querySelector('.icon') : null;
    const audioText = audioBtn ? audioBtn.querySelector('.btn-text') : null;

    if (bgMusic && audioBtn) {
        bgMusic.volume = 0.3; // Lakas ng audio (0.0 to 1.0)
        
        // Pilitin mag-play agad pagka-load ng page
        let playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Matagumpay ang autoplay
                if(audioIcon) audioIcon.innerText = "🔊";
                if(audioText) audioText.innerText = "MUTE";
            }).catch(error => {
                // Na-block ng browser ang autoplay
                console.log("Autoplay prevented. User needs to interact.");
                if(audioIcon) audioIcon.innerText = "🔇";
                if(audioText) audioText.innerText = "UNMUTE";
            });
        }

        // Logic kapag pinindot yung Audio Button
        audioBtn.addEventListener("click", () => {
            if (bgMusic.muted) {
                // I-unmute
                bgMusic.muted = false;
                if(audioIcon) audioIcon.innerText = "🔊";
                if(audioText) audioText.innerText = "MUTE";
                bgMusic.play(); // Ensure na tumutugtog
            } else {
                // I-mute
                bgMusic.muted = true;
                if(audioIcon) audioIcon.innerText = "🔇";
                if(audioText) audioText.innerText = "UNMUTE";
            }
        });
    }

    // ==========================================
    // 2. MOBILE MENU
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
    // 3. 3D TILT EFFECT SA PICTURE
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
    // 4. SECRET ARCADE BUTTON REVEAL
    // ==========================================
    const secretBtn = document.getElementById("secretGamesBtn");
    const secretLogo = document.getElementById("secretLogo");
    let logoClicks = 0;
    let logoClickTimer = null;

    if (secretLogo && secretBtn) {
        secretLogo.addEventListener("click", (e) => {
            logoClicks++;
            clearTimeout(logoClickTimer);
            logoClickTimer = setTimeout(() => { logoClicks = 0; }, 1500);

            if (logoClicks >= 3) {
                secretBtn.style.display = "block";
                logoClicks = 0;
            }
        });
    }

    // Hotkey "G" to reveal arcade
    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "g" && secretBtn) {
            secretBtn.style.display = "block";
        }
    });

});