document.addEventListener("DOMContentLoaded", () => {

    // --- GAME TABS ---
    const tabs = document.querySelectorAll(".game-tab");
    const panels = document.querySelectorAll(".game-panel");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));
            tab.classList.add("active");
            document.getElementById(tab.dataset.game).classList.add("active");
        });
    });

    // --- UTILITIES ---
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // ==========================================
    // COLOR GAME
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
        { name: "RED", value: "#ff4d4d" }, { name: "BLUE", value: "#3498db" },
        { name: "GREEN", value: "#2ecc71" }, { name: "YELLOW", value: "#f1c40f" },
        { name: "PURPLE", value: "#9b59b6" }, { name: "ORANGE", value: "#e67e22" },
        { name: "PINK", value: "#ff69b4" }, { name: "CYAN", value: "#00cec9" }
    ];

    function startNewColorRound() {
        const selectedColors = shuffleArray(colors).slice(0, 4);
        const answer = selectedColors[Math.floor(Math.random() * 4)];
        currentColor = answer.name;

        colorDisplay.textContent = answer.name;
        colorDisplay.style.background = answer.value;
        colorOptions.innerHTML = "";

        selectedColors.forEach(color => {
            const btn = document.createElement("button");
            btn.classList.add("color-option");
            btn.style.backgroundColor = color.value;
            btn.addEventListener("click", () => {
                if (!colorGameStarted) return;
                checkColorAnswer(color.name, btn);
            });
            colorOptions.appendChild(btn);
        });
    }

    function checkColorAnswer(selected, btn) {
        colorGameStarted = false;
        const buttons = colorOptions.querySelectorAll(".color-option");
        buttons.forEach(b => b.disabled = true);

        if (selected === currentColor) {
            currentColorScore++;
            colorMessage.textContent = "🎉 CORRECT!";
            colorMessage.style.color = "#7AC74F";
            btn.style.border = "4px solid white";
        } else {
            colorMessage.textContent = "❌ WRONG! IT WAS " + currentColor;
            colorMessage.style.color = "#E94E3D";
        }
        colorScore.textContent = currentColorScore;
    }

    if (startColorGame) {
        startColorGame.addEventListener("click", () => {
            if (startColorGame.textContent === "START GAME") currentColorScore = 0;
            colorScore.textContent = currentColorScore;
            colorGameStarted = true;
            colorMessage.textContent = "Choose the correct color!";
            startColorGame.textContent = "NEXT ROUND";
            startNewColorRound();
        });
    }

    // ==========================================
    // UNO GAME
    // ==========================================
    const unoColors = ["red", "blue", "green", "yellow"];
    const unoValues = ["0","1","2","3","4","5","6","7","8","9"];
    const unoTopCardEl = document.getElementById("unoTopCard");
    const unoPlayerHandEl = document.getElementById("unoPlayerHand");
    const unoMessageEl = document.getElementById("unoMessage");
    const unoCpuCountEl = document.getElementById("unoCpuCount");
    const unoPlayerCountEl = document.getElementById("unoPlayerCount");
    const startUnoGame = document.getElementById("startUnoGame");

    let playerHand = [], cpuHand = [], unoTopCard = null, unoActive = false, cpuThinking = false;

    function randomUnoCard() {
        return { color: unoColors[Math.floor(Math.random()*4)], value: unoValues[Math.floor(Math.random()*10)] };
    }

    function updateUnoUI() {
        if (unoTopCard) {
            unoTopCardEl.innerHTML = `<span class="uno-color-dot" style="background:${unoTopCard.color}"></span>${unoTopCard.value}`;
            unoTopCardEl.className = "uno-top-card uno-" + unoTopCard.color;
        }
        unoPlayerHandEl.innerHTML = "";
        playerHand.forEach((card, i) => {
            const btn = document.createElement("button");
            btn.className = "uno-card uno-" + card.color;
            btn.innerHTML = `<span class="uno-color-dot" style="background:${card.color}"></span>${card.value}`;
            btn.onclick = () => playUnoCard(i);
            unoPlayerHandEl.appendChild(btn);
        });
        unoCpuCountEl.textContent = cpuHand.length;
        unoPlayerCountEl.textContent = playerHand.length;
    }

    function canPlay(card, top) { return card.color === top.color || card.value === top.value; }

    function playUnoCard(index) {
        if (!unoActive || cpuThinking) return;
        if (!canPlay(playerHand[index], unoTopCard)) {
            unoMessageEl.textContent = "❌ Cannot play that card!";
            return;
        }
        unoTopCard = playerHand.splice(index, 1)[0];
        updateUnoUI();

        if (playerHand.length === 0) {
            unoMessageEl.textContent = "🎉 YOU WIN!";
            unoActive = false; return;
        }

        unoMessageEl.textContent = "⏳ CPU is thinking...";
        cpuThinking = true;
        setTimeout(cpuTurn, 800);
    }

    function cpuTurn() {
        const idx = cpuHand.findIndex(c => canPlay(c, unoTopCard));
        if (idx !== -1) {
            unoTopCard = cpuHand.splice(idx, 1)[0];
        } else {
            cpuHand.push(randomUnoCard());
        }
        updateUnoUI();
        
        if (cpuHand.length === 0) {
            unoMessageEl.textContent = "💀 CPU WINS!";
            unoActive = false; cpuThinking = false; return;
        }
        unoMessageEl.textContent = "Your turn!";
        cpuThinking = false;
    }

    if (startUnoGame) {
        startUnoGame.addEventListener("click", () => {
            playerHand = Array.from({length: 7}, randomUnoCard);
            cpuHand = Array.from({length: 7}, randomUnoCard);
            unoTopCard = randomUnoCard();
            unoActive = true; cpuThinking = false;
            unoMessageEl.textContent = "Your turn!";
            updateUnoUI();
        });
    }

    // ==========================================
    // MEMORY GAME
    // ==========================================
    const memoryGrid = document.getElementById("memoryGrid");
    const memoryMoves = document.getElementById("memoryMoves");
    const memoryPairs = document.getElementById("memoryPairs");
    const memoryMessage = document.getElementById("memoryMessage");
    const restartMemory = document.getElementById("restartMemory");

    let firstCard = null, secondCard = null, moves = 0, pairs = 0, locked = false;

    function createMemoryGame() {
        memoryGrid.innerHTML = "";
        firstCard = null; secondCard = null; moves = 0; pairs = 0; locked = false;
        memoryMoves.textContent = 0; memoryPairs.textContent = 0;
        memoryMessage.textContent = "Find all matching pairs!";

        const icons = ["♠", "♥", "♦", "♣"];
        const deck = shuffleArray([...icons, ...icons]);
        
        deck.forEach(icon => {
            const btn = document.createElement("button");
            btn.className = "memory-card";
            btn.dataset.icon = icon;
            btn.textContent = "?";
            btn.onclick = () => flipCard(btn);
            memoryGrid.appendChild(btn);
        });
    }

    function flipCard(card) {
        if (locked || card.classList.contains("flipped") || card.classList.contains("matched")) return;
        card.classList.add("flipped");
        card.textContent = card.dataset.icon;

        if (!firstCard) { firstCard = card; return; }
        
        secondCard = card;
        moves++; memoryMoves.textContent = moves;

        if (firstCard.dataset.icon === secondCard.dataset.icon) {
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            pairs++; memoryPairs.textContent = pairs;
            firstCard = null; secondCard = null;
            if (pairs === 4) memoryMessage.textContent = "🏆 YOU WON!";
        } else {
            locked = true;
            setTimeout(() => {
                firstCard.classList.remove("flipped");
                firstCard.textContent = "?";
                secondCard.classList.remove("flipped");
                secondCard.textContent = "?";
                firstCard = null; secondCard = null; locked = false;
            }, 800);
        }
    }

    if (restartMemory) restartMemory.addEventListener("click", createMemoryGame);
    createMemoryGame();

});