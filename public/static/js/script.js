document.addEventListener("DOMContentLoaded", () => {
    
    // --- MOBILE MENU ---
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.textContent = navLinks.classList.contains("active") ? "CLOSE" : "MENU";
        });
    }

    // --- AUDIO PLAYER ---
    const audioBtn = document.getElementById("audioBtn");
    const bgMusic = document.getElementById("bgMusic");
    if (audioBtn && bgMusic) {
        const iconSpan = audioBtn.querySelector(".icon");
        const btnText = audioBtn.querySelector(".btn-text");
        let isPlaying = false;
        bgMusic.volume = 0.3;

        audioBtn.addEventListener("click", async () => {
            if (isPlaying) {
                bgMusic.pause();
            } else {
                try { await bgMusic.play(); } catch (e) { console.log(e); }
            }
        });

        bgMusic.addEventListener("play", () => {
            isPlaying = true;
            if(iconSpan) iconSpan.textContent = "🔊";
            if(btnText) btnText.textContent = "AUDIO ON";
        });
        bgMusic.addEventListener("pause", () => {
            isPlaying = false;
            if(iconSpan) iconSpan.textContent = "🔇";
            if(btnText) btnText.textContent = "AUDIO OFF";
        });
    }

    // --- SECRET BUTTON REVEAL ---
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
                // Wag i-preventDefault para hindi mawala ang scroll
                secretBtn.style.display = "block";
                logoClicks = 0;
            }
        });
    }

    // Hotkey "G" para lumabas yung button
    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "g" && secretBtn) {
            secretBtn.style.display = "block";
        }
    });

});