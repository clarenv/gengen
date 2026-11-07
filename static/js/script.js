document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MOBILE MENU
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    if(menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.innerText = navLinks.classList.contains("active") ? "CLOSE" : "MENU";
        });
    }

    // 2. 3D TILT EFFECT SA PICTURE (Sumusunod sa Cursor)
    const tiltFrame = document.getElementById("tiltFrame");
    const heroSection = document.querySelector('.hero');
    
    if(tiltFrame && heroSection) {
        // Kapag gumalaw ang mouse sa loob ng hero section
        heroSection.addEventListener('mousemove', (e) => {
            // Kunin ang posisyon ng mouse
            let xAxis = (window.innerWidth / 2 - e.pageX) / 25; // 25 = bilis ng ikot
            let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            
            // I-apply ang rotation
            tiltFrame.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        // Kapag umalis ang mouse, babalik sa gitna
        heroSection.addEventListener('mouseleave', () => {
            tiltFrame.style.transform = `rotateY(0deg) rotateX(0deg)`;
            tiltFrame.style.transition = "transform 0.5s ease"; // Smooth na pagbalik
        });

        // Kapag pumasok ulit ang mouse, tanggalin yung transition para mabilis sumunod
        heroSection.addEventListener('mouseenter', () => {
            tiltFrame.style.transition = "transform 0.1s ease-out";
        });
    }

    // 3. SECRET ARCADE BUTTON REVEAL
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
