document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // MOBILE MENU
    // ==========================================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            menuToggle.textContent =
                navLinks.classList.contains("active")
                    ? "CLOSE"
                    : "MENU";
        });

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.textContent = "MENU";
            });

        });
    }


    // ==========================================
    // AUDIO PLAYER
    // ==========================================

    const audioBtn = document.getElementById("audioBtn");
    const bgMusic = document.getElementById("bgMusic");

    if (audioBtn && bgMusic) {

        const iconSpan = audioBtn.querySelector(".icon");
        const btnText = audioBtn.querySelector(".btn-text");

        let isPlaying = false;

        bgMusic.volume = 0.3;

        function updateAudioButton(playing) {

            isPlaying = playing;

            if (iconSpan) {
                iconSpan.textContent = playing ? "🔊" : "🔇";
            }

            if (btnText) {
                btnText.textContent = playing
                    ? "AUDIO ON"
                    : "AUDIO OFF";
            }
        }

        audioBtn.addEventListener("click", async () => {

            if (isPlaying) {

                bgMusic.pause();
                updateAudioButton(false);

            } else {

                try {

                    await bgMusic.play();
                    updateAudioButton(true);

                } catch (error) {

                    console.log("Audio playback failed:", error);
                    updateAudioButton(false);

                }

            }

        });

        bgMusic.addEventListener("pause", () => {
            updateAudioButton(false);
        });

        bgMusic.addEventListener("play", () => {
            updateAudioButton(true);
        });

    }


    // ==========================================
    // SCROLL ANIMATION
    // ==========================================

    const animatedElements = document.querySelectorAll(
        ".about-box, .project-card, .skill-card, .contact-box"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.1
        });

        animatedElements.forEach(element => {

            element.style.opacity = "0";
            element.style.transform = "translateY(30px)";
            element.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            observer.observe(element);

        });

    } else {

        animatedElements.forEach(element => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        });

    }


    // ==========================================
    // SECRET GAME ROOM — LOGO CLICK 3x + HOTKEY "G"
    // ==========================================

    const secretGamesBtn = document.getElementById("secretGamesBtn");
    const secretLogo = document.getElementById("secretLogo");
    const gameRoom = document.getElementById("gameRoom");
    const closeGame = document.getElementById("closeGame");

    // --- Logo click 3 times to reveal ---
    let logoClicks = 0;
    let logoClickTimer = null;

    if (secretLogo && secretGamesBtn) {

        secretLogo.addEventListener("click", (e) => {

            logoClicks++;
            clearTimeout(logoClickTimer);

            logoClickTimer = setTimeout(() => {
                logoClicks = 0;
            }, 1500);

            if (logoClicks >= 3) {

                e.preventDefault();

                secretGamesBtn.style.display = "block";
                secretGamesBtn.textContent = "🎮 SECRET UNLOCKED — ENTER ARCADE";

                logoClicks = 0;

            }

        });

    }

    // --- Hotkey "G" to reveal ---
    document.addEventListener("keydown", (e) => {

        if (
            e.key.toLowerCase() === "g" &&
            !e.target.matches("input, textarea") &&
            secretGamesBtn
        ) {
            secretGamesBtn.style.display = "block";
        }

    });


    // --- Open / Close game room ---
    function openGameRoom() {

        if (!gameRoom) return;

        gameRoom.classList.add("open");
        gameRoom.classList.add("active"); // fallback for other CSS versions
        document.body.style.overflow = "hidden";

    }

    function closeGameRoom() {

        if (!gameRoom) return;

        gameRoom.classList.remove("open");
        gameRoom.classList.remove("active");
        document.body.style.overflow = "";

    }

    if (secretGamesBtn) {

        secretGamesBtn.addEventListener("click", () => {
            openGameRoom();
        });

    }

    if (closeGame) {

        closeGame.addEventListener("click", () => {
            closeGameRoom();
        });

    }

    // Close with ESC
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeGameRoom();
        }

    });

    // Click outside container to close
    if (gameRoom) {

        gameRoom.addEventListener("click", (e) => {

            if (e.target === gameRoom) {
                closeGameRoom();
            }

        });

    }


    // ==========================================
    // GAME TABS
    // ==========================================

    const gameTabs = document.querySelectorAll(".game-tab");
    const gamePanels = document.querySelectorAll(".game-panel");

    gameTabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const selectedGame = tab.dataset.game;

            gameTabs.forEach(item => {
                item.classList.remove("active");
            });

            gamePanels.forEach(panel => {
                panel.classList.remove("active");
            });

            tab.classList.add("active");

            const selectedPanel = document.getElementById(selectedGame);

            if (selectedPanel) {
                selectedPanel.classList.add("active");
            }

        });

    });


    // ==========================================
    // UTILITIES
    // ==========================================

    function shuffleArray(array) {

        const shuffled = [...array];

        for (let i = shuffled.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [shuffled[i], shuffled[j]] =
                [shuffled[j], shuffled[i]];

        }

        return shuffled;
    }


    // ==========================================
    // COLOR GUESSING GAME
    // ==========================================

    const colorDisplay = document.getElementById("colorDisplay");
    const colorOptions = document.getElementById("colorOptions");
    const colorMessage = document.getElementById("colorMessage");
    const colorScore = document.getElementById("colorScore");
    const startColorGame = document.getElementById("startColorGame");

    let currentColor = "";
    let currentColorScore = 0;
    let colorGameStarted = false;

    const colors = [
        { name: "RED", value: "#ff4d4d" },
        { name: "BLUE", value: "#3498db" },
        { name: "GREEN", value: "#2ecc71" },
        { name: "YELLOW", value: "#f1c40f" },
        { name: "PURPLE", value: "#9b59b6" },
        { name: "ORANGE", value: "#e67e22" },
        { name: "PINK", value: "#ff69b4" },
        { name: "CYAN", value: "#00cec9" }
    ];

    function startNewColorRound() {

        if (!colorOptions || !colorDisplay) return;

        const shuffledColors = shuffleArray(colors);

        const selectedColors = shuffledColors.slice(0, 4);

        const answer = selectedColors[
            Math.floor(Math.random() * selectedColors.length)
        ];

        currentColor = answer.name;

        colorDisplay.textContent = answer.name;
        colorDisplay.style.background = answer.value;
        colorDisplay.style.color = "#ffffff";

        colorOptions.innerHTML = "";

        selectedColors.forEach(color => {

            const button = document.createElement("button");

            button.classList.add("color-option");
            button.style.backgroundColor = color.value;
            button.setAttribute("aria-label", color.name);
            button.dataset.color = color.name;

            button.addEventListener("click", () => {

                if (!colorGameStarted) return;

                checkColorAnswer(color.name, button);

            });

            colorOptions.appendChild(button);

        });

    }

    function checkColorAnswer(selectedColor, selectedButton) {

        if (!colorGameStarted) return;

        const buttons = colorOptions.querySelectorAll(".color-option");

        buttons.forEach(button => {
            button.disabled = true;
        });

        if (selectedColor === currentColor) {

            currentColorScore++;

            colorMessage.textContent = "🎉 CORRECT! NICE GUESS!";
            colorMessage.style.color = "#7AC74F";

            selectedButton.style.border = "4px solid white";

        } else {

            colorMessage.textContent =
                "❌ WRONG! THE CORRECT ANSWER IS " + currentColor;

            colorMessage.style.color = "#E94E3D";

            buttons.forEach(button => {

                if (button.dataset.color === currentColor) {
                    button.style.border = "4px solid #7AC74F";
                }

            });

        }

        colorScore.textContent = currentColorScore;

        colorGameStarted = false;

        startColorGame.textContent = "NEXT ROUND";

    }

    if (startColorGame) {

        startColorGame.addEventListener("click", () => {

            if (!colorScore || !colorMessage) return;

            if (startColorGame.textContent === "START GAME") {

                currentColorScore = 0;
                colorScore.textContent = "0";

            }

            colorGameStarted = true;

            colorMessage.textContent = "Choose the correct color!";
            colorMessage.style.color = "";

            startColorGame.textContent = "NEXT ROUND";

            startNewColorRound();

        });

    }


    // ==========================================
    // UNO GAME (Player vs CPU)
    // ==========================================

    const unoColors = ["red", "blue", "green", "yellow"];
    const unoValues = ["0","1","2","3","4","5","6","7","8","9"];

    const unoTopCardEl = document.getElementById("unoTopCard");
    const unoPlayerHandEl = document.getElementById("unoPlayerHand");
    const unoMessageEl = document.getElementById("unoMessage");
    const unoCpuCountEl = document.getElementById("unoCpuCount");
    const unoPlayerCountEl = document.getElementById("unoPlayerCount");
    const startUnoGame = document.getElementById("startUnoGame");

    let playerHand = [];
    let cpuHand = [];
    let unoTopCard = null;
    let unoActive = false;
    let unoCpuThinking = false;

    function randomUnoCard() {

        const color = unoColors[Math.floor(Math.random() * unoColors.length)];
        const value = unoValues[Math.floor(Math.random() * unoValues.length)];

        return { color, value };

    }

    function renderUnoCardInner(card) {
        return `<span class="uno-color-dot" style="background:${card.color}"></span>${card.value}`;
    }

    function updateUnoUI() {

        if (!unoTopCardEl || !unoPlayerHandEl) return;

        // Top card
        if (unoTopCard) {

            unoTopCardEl.innerHTML = renderUnoCardInner(unoTopCard);

            unoTopCardEl.className =
                "uno-top-card uno-" + unoTopCard.color;

        } else {

            unoTopCardEl.textContent = "—";
            unoTopCardEl.className = "uno-top-card";

        }

        // Player hand
        unoPlayerHandEl.innerHTML = "";

        playerHand.forEach((card, index) => {

            const btn = document.createElement("button");

            btn.type = "button";
            btn.className = "uno-card uno-" + card.color;
            btn.innerHTML = renderUnoCardInner(card);
            btn.setAttribute(
                "aria-label",
                `Play ${card.color} ${card.value}`
            );

            btn.addEventListener("click", () => playUnoCard(index));

            unoPlayerHandEl.appendChild(btn);

        });

        // Counts
        if (unoCpuCountEl) {
            unoCpuCountEl.textContent = cpuHand.length;
        }

        if (unoPlayerCountEl) {
            unoPlayerCountEl.textContent = playerHand.length;
        }

    }

    function canPlayUnoCard(card, top) {

        if (!card || !top) return false;

        return card.color === top.color || card.value === top.value;

    }

    function playUnoCard(index) {

        if (!unoActive || unoCpuThinking) return;

        const card = playerHand[index];

        if (!card) return;

        if (!canPlayUnoCard(card, unoTopCard)) {

            if (unoMessageEl) {
                unoMessageEl.textContent =
                    "❌ Cannot play that card — must match color or number.";
                unoMessageEl.style.color = "#E94E3D";
            }

            return;

        }

        // Play the card
        playerHand.splice(index, 1);

        unoTopCard = card;

        updateUnoUI();

        if (playerHand.length === 0) {

            if (unoMessageEl) {
                unoMessageEl.textContent =
                    "🎉 YOU WIN! Press START GAME to play again.";
                unoMessageEl.style.color = "#7AC74F";
            }

            unoActive = false;
            return;

        }

        if (unoMessageEl) {
            unoMessageEl.textContent = "⏳ CPU is thinking...";
            unoMessageEl.style.color = "";
        }

        unoCpuThinking = true;

        setTimeout(cpuTurn, 800);

    }

    function cpuTurn() {

        if (!unoActive) {
            unoCpuThinking = false;
            return;
        }

        const playableIndex = cpuHand.findIndex(card =>
            canPlayUnoCard(card, unoTopCard)
        );

        if (playableIndex !== -1) {

            // CPU plays a card
            unoTopCard = cpuHand.splice(playableIndex, 1)[0];

            updateUnoUI();

            if (unoMessageEl) {
                unoMessageEl.textContent =
                    `🤖 CPU played ${unoTopCard.color.toUpperCase()} ${unoTopCard.value}`;
                unoMessageEl.style.color = "";
            }

        } else {

            // CPU draws a card
            const drawn = randomUnoCard();

            cpuHand.push(drawn);

            updateUnoUI();

            if (unoMessageEl) {
                unoMessageEl.textContent = "🤖 CPU drew a card.";
                unoMessageEl.style.color = "";
            }

        }

        // Check CPU win
        if (cpuHand.length === 0) {

            if (unoMessageEl) {
                unoMessageEl.textContent =
                    "💀 CPU WINS! Press START GAME to try again.";
                unoMessageEl.style.color = "#E94E3D";
            }

            unoActive = false;
            unoCpuThinking = false;
            return;

        }

        unoCpuThinking = false;

        if (unoMessageEl && unoActive) {
            unoMessageEl.textContent = "Your turn! Pick a matching card.";
        }

    }

    if (startUnoGame) {

        startUnoGame.addEventListener("click", () => {

            playerHand = Array.from({ length: 7 }, randomUnoCard);
            cpuHand = Array.from({ length: 7 }, randomUnoCard);
            unoTopCard = randomUnoCard();

            unoActive = true;
            unoCpuThinking = false;

            if (unoMessageEl) {
                unoMessageEl.textContent =
                    "Your turn! Pick a card that matches color or number.";
                unoMessageEl.style.color = "";
            }

            updateUnoUI();

        });

    }


    // ==========================================
    // MEMORY MATCH GAME
    // ==========================================

    const memoryGrid = document.getElementById("memoryGrid");
    const memoryMoves = document.getElementById("memoryMoves");
    const memoryPairs = document.getElementById("memoryPairs");
    const memoryMessage = document.getElementById("memoryMessage");
    const restartMemory = document.getElementById("restartMemory");

    const memorySymbols = ["♠", "♥", "♦", "♣"];

    let memoryFirstCard = null;
    let memorySecondCard = null;

    let memoryMoveCount = 0;
    let memoryPairCount = 0;

    let memoryLocked = false;

    function createMemoryGame() {

        if (!memoryGrid) return;

        memoryGrid.innerHTML = "";

        memoryFirstCard = null;
        memorySecondCard = null;

        memoryMoveCount = 0;
        memoryPairCount = 0;

        memoryLocked = false;

        if (memoryMoves) {
            memoryMoves.textContent = "0";
        }

        if (memoryPairs) {
            memoryPairs.textContent = "0";
        }

        if (memoryMessage) {
            memoryMessage.textContent = "Find all matching pairs!";
            memoryMessage.style.color = "";
        }

        const cards = shuffleArray([
            ...memorySymbols,
            ...memorySymbols
        ]);

        cards.forEach(symbol => {

            const card = document.createElement("button");

            card.classList.add("memory-card");

            card.type = "button";

            card.dataset.symbol = symbol;

            card.textContent = "?";

            card.setAttribute("aria-label", "Hidden memory card");

            card.addEventListener("click", () => {

                flipMemoryCard(card);

            });

            memoryGrid.appendChild(card);

        });

    }

    function flipMemoryCard(card) {

        if (memoryLocked) return;

        if (card.classList.contains("flipped")) return;

        if (card.classList.contains("matched")) return;

        card.classList.add("flipped");

        card.textContent = card.dataset.symbol;

        if (!memoryFirstCard) {

            memoryFirstCard = card;

            return;

        }

        memorySecondCard = card;

        memoryMoveCount++;

        if (memoryMoves) {
            memoryMoves.textContent = memoryMoveCount;
        }

        checkMemoryMatch();

    }

    function checkMemoryMatch() {

        if (!memoryFirstCard || !memorySecondCard) return;

        const isMatch =
            memoryFirstCard.dataset.symbol ===
            memorySecondCard.dataset.symbol;

        if (isMatch) {

            memoryFirstCard.classList.add("matched");
            memorySecondCard.classList.add("matched");

            memoryPairCount++;

            if (memoryPairs) {
                memoryPairs.textContent = memoryPairCount;
            }

            memoryFirstCard = null;
            memorySecondCard = null;

            if (memoryPairCount === 4) {

                if (memoryMessage) {

                    memoryMessage.textContent =
                        "🏆 CONGRATULATIONS! YOU FOUND ALL PAIRS!";

                    memoryMessage.style.color = "#F8C445";

                }

            }

        } else {

            memoryLocked = true;

            setTimeout(() => {

                if (memoryFirstCard) {

                    memoryFirstCard.classList.remove("flipped");
                    memoryFirstCard.textContent = "?";

                }

                if (memorySecondCard) {

                    memorySecondCard.classList.remove("flipped");
                    memorySecondCard.textContent = "?";

                }

                memoryFirstCard = null;
                memorySecondCard = null;

                memoryLocked = false;

            }, 800);

        }

    }

    if (restartMemory) {

        restartMemory.addEventListener("click", () => {
            createMemoryGame();
        });

    }

    // Initialize Memory Game
    createMemoryGame();


    // ==========================================
    // INITIAL GAME SETTINGS
    // ==========================================

    if (colorDisplay) {
        colorDisplay.textContent = "READY?";
    }

    if (colorMessage) {
        colorMessage.textContent = "Press START GAME to begin!";
    }

    console.log("✅ Gelgel Portfolio and Secret Arcade Loaded!");

});
