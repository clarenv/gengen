// --- TABS LOGIC ---
function switchTab(evt, id) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    evt.currentTarget.classList.add('active');
    document.getElementById(id).classList.add('active');
}

// ==========================================
// 1. COLOR GAME LOGIC (Pick -> Roll)
// ==========================================
const colorsList = [
    { name: "RED", hex: "#ff003c" }, { name: "BLUE", hex: "#00e5ff" }, 
    { name: "GREEN", hex: "#00ff66" }, { name: "YELLOW", hex: "#ffea00" }, 
    { name: "PURPLE", hex: "#9b59b6" }, { name: "ORANGE", hex: "#e67e22" }
];
let cPoint = 0;
let selectedColor = null; 
let cRolling = false;

function initColorPicker() {
    const picker = document.getElementById('cPickerOpts');
    if(!picker) return;
    picker.innerHTML = '';
    colorsList.forEach(c => {
        let btn = document.createElement("button");
        btn.className = "c-btn";
        btn.style.background = c.hex;
        btn.title = c.name;
        btn.onclick = () => selectColor(c, btn);
        picker.appendChild(btn);
    });
}

function selectColor(colorObj, btnElement) {
    if(cRolling) return; 
    
    document.querySelectorAll('#cPickerOpts .c-btn').forEach(b => {
        b.classList.remove('selected-color');
    });
    
    btnElement.classList.add('selected-color');
    selectedColor = colorObj;
    
    document.getElementById('cMsg').innerText = `Target Acquired: ${colorObj.name}`;
    document.getElementById('cMsg').style.color = colorObj.hex;
    
    let rollBtn = document.getElementById('cRollBtn');
    rollBtn.disabled = false;
    rollBtn.style.opacity = "1";
    rollBtn.style.cursor = "pointer";
}

function rollColorDice() {
    if(!selectedColor || cRolling) return;
    
    cRolling = true;
    let rollBtn = document.getElementById('cRollBtn');
    rollBtn.disabled = true;
    rollBtn.style.opacity = "0.5";
    rollBtn.style.cursor = "not-allowed";
    
    document.getElementById('cMsg').innerText = "ROLLING...";
    document.getElementById('cMsg').style.color = "#fff";
    
    let rollInterval = setInterval(() => {
        let randomC = colorsList[Math.floor(Math.random() * colorsList.length)];
        let box = document.getElementById('cBox');
        box.innerText = randomC.name;
        box.style.background = randomC.hex;
        box.style.boxShadow = `inset 0 0 20px rgba(0,0,0,0.8), 0 0 20px ${randomC.hex}`;
    }, 100);
    
    setTimeout(() => {
        clearInterval(rollInterval);
        cRolling = false;
        
        let winner = colorsList[Math.floor(Math.random() * colorsList.length)];
        let box = document.getElementById('cBox');
        box.innerText = winner.name;
        box.style.background = winner.hex;
        box.style.boxShadow = `inset 0 0 20px rgba(0,0,0,0.8), 0 0 30px ${winner.hex}`;
        
        let msg = document.getElementById('cMsg');
        
        if(winner.name === selectedColor.name) {
            cPoint++;
            document.getElementById('cScore').innerText = cPoint;
            msg.innerText = "✅ JACKPOT! You survived.";
            msg.style.color = "#00ff66";
        } else {
            msg.innerText = `❌ FATAL ERROR. It was ${winner.name}.`;
            msg.style.color = "#ff003c";
        }
        
        rollBtn.style.display = "none";
        document.getElementById('cAgainBtn').style.display = "inline-block";
        
    }, 1500);
}

function resetColor() {
    selectedColor = null;
    cRolling = false;
    
    document.getElementById('cAgainBtn').style.display = "none";
    let rollBtn = document.getElementById('cRollBtn');
    rollBtn.style.display = "inline-block";
    rollBtn.disabled = true;
    rollBtn.style.opacity = "0.5";
    rollBtn.style.cursor = "not-allowed";
    
    let box = document.getElementById('cBox');
    box.innerText = "WAITING...";
    box.style.background = "#111";
    box.style.boxShadow = "inset 0 0 20px rgba(0,0,0,0.8)";
    box.style.color = "#555";

    document.getElementById('cMsg').innerText = "Pick a color above!";
    document.getElementById('cMsg').style.color = "#555";
    
    document.querySelectorAll('#cPickerOpts .c-btn').forEach(b => {
        b.classList.remove('selected-color');
    });
}

// ==========================================
// 2. UNO GAME LOGIC (With Draw)
// ==========================================
let pCards = [], cCards = [], currentTop = null;
const uCols = ["red", "blue", "green", "yellow"];

function getNewCard() {
    return { 
        color: uCols[Math.floor(Math.random()*4)], 
        num: Math.floor(Math.random()*10).toString() 
    };
}

function startUno() {
    pCards = Array.from({length: 7}, getNewCard);
    cCards = Array.from({length: 7}, getNewCard);
    currentTop = getNewCard();
    
    document.getElementById('uMsg').innerText = "Your turn! Match color or number.";
    document.getElementById('uMsg').style.color = "#00e5ff";
    
    document.getElementById('uStartBtn').style.display = "none";
    document.getElementById('uDrawBtn').style.display = "inline-block";
    
    drawUno();
}

function drawUno() {
    let topEl = document.getElementById('uTop');
    topEl.innerText = currentTop.num;
    topEl.className = "u-top uno-" + currentTop.color;
    
    let handEl = document.getElementById('uHand');
    handEl.innerHTML = "";
    pCards.forEach((card, i) => {
        let b = document.createElement("button");
        b.className = "u-card uno-" + card.color;
        b.innerText = card.num;
        b.onclick = () => playUno(i);
        handEl.appendChild(b);
    });
    
    document.getElementById('uPCount').innerText = pCards.length;
    document.getElementById('uCCount').innerText = cCards.length;
}

function playUno(i) {
    let card = pCards[i];
    let msg = document.getElementById('uMsg');
    
    if(card.color !== currentTop.color && card.num !== currentTop.num) {
        msg.innerText = "❌ INVALID MOVE. (Or DRAW CARD)";
        msg.style.color = "#ff003c";
        return;
    }
    
    currentTop = pCards.splice(i, 1)[0];
    drawUno();
    
    if(pCards.length === 0) { 
        msg.innerText = "🎉 YOU ESCAPED!"; 
        msg.style.color = "#00ff66";
        document.getElementById('uDrawBtn').style.display = "none";
        let startBtn = document.getElementById('uStartBtn');
        startBtn.style.display = "inline-block";
        startBtn.innerText = "PLAY AGAIN";
        return; 
    }
    
    msg.innerText = "⏳ CPU is calculating...";
    msg.style.color = "#555";
    
    setTimeout(() => {
        let cIdx = cCards.findIndex(c => c.color === currentTop.color || c.num === currentTop.num);
        if(cIdx !== -1) {
            currentTop = cCards.splice(cIdx, 1)[0];
        } else {
            cCards.push(getNewCard());
        }
        drawUno();
        
        if(cCards.length === 0) { 
            msg.innerText = "💀 YOU DIED."; 
            msg.style.color = "#ff003c";
            document.getElementById('uDrawBtn').style.display = "none";
            let startBtn = document.getElementById('uStartBtn');
            startBtn.style.display = "inline-block";
            startBtn.innerText = "TRY AGAIN";
            return; 
        }
        
        msg.innerText = "Your turn!";
        msg.style.color = "#00e5ff";
    }, 1000);
}

function drawCardUno() {
    let msg = document.getElementById('uMsg');
    if(msg.innerText.includes("CPU is calculating") || msg.innerText.includes("ESCAPED") || msg.innerText.includes("DIED")) return;

    pCards.push(getNewCard());
    drawUno();
    
    msg.innerText = "You drew a card. Your turn!";
    msg.style.color = "#ffea00"; 
}

// ==========================================
// 3. MEMORY GAME LOGIC (With Limit)
// ==========================================
let fCard = null, sCard = null, mCount = 0, pCount = 0, mLock = false;
const MAX_MOVES = 12;

function initMemory() {
    let grid = document.getElementById('mGrid');
    grid.innerHTML = "";
    
    fCard = null; sCard = null; mCount = 0; pCount = 0; mLock = false;
    
    document.getElementById('mMoves').innerText = 0; 
    document.getElementById('mPairs').innerText = 0;
    document.getElementById('mLimit').innerText = `Guesses Left: ${MAX_MOVES}`;
    document.getElementById('mLimit').style.color = "#ff003c";
    document.getElementById('mMsg').innerText = "Find the pairs... if you can.";
    document.getElementById('mMsg').style.color = "#555";
    
    let symbols = ["♠", "♥", "♦", "♣", "♠", "♥", "♦", "♣"].sort(() => 0.5 - Math.random());
    
    symbols.forEach(s => {
        let b = document.createElement("button");
        b.className = "m-card";
        b.dataset.sym = s;
        b.innerText = "?";
        b.onclick = () => flipMemory(b);
        grid.appendChild(b);
    });
}

function flipMemory(b) {
    if(mLock || b.classList.contains("flipped") || b.classList.contains("matched")) return;
    
    b.classList.add("flipped");
    b.innerText = b.dataset.sym;
    
    if(!fCard) { fCard = b; return; }
    sCard = b;
    mCount++;
    document.getElementById('mMoves').innerText = mCount;
    
    let movesLeft = MAX_MOVES - mCount;
    document.getElementById('mLimit').innerText = `Guesses Left: ${movesLeft}`;
    
    if(fCard.dataset.sym === sCard.dataset.sym) {
        fCard.classList.add("matched");
        sCard.classList.add("matched");
        pCount++;
        document.getElementById('mPairs').innerText = pCount;
        fCard = null; sCard = null;
        
        if(pCount === 4) {
            document.getElementById('mMsg').innerText = "🏆 YOU SURVIVED.";
            document.getElementById('mMsg').style.color = "#00ff66";
        }
    } else {
        mLock = true;
        setTimeout(() => {
            fCard.classList.remove("flipped"); fCard.innerText = "?";
            sCard.classList.remove("flipped"); sCard.innerText = "?";
            fCard = null; sCard = null; mLock = false;
        }, 800);
    }

    if (mCount >= MAX_MOVES && pCount < 4) {
        setTimeout(() => {
            document.getElementById('mMsg').innerText = "💀 GAME OVER. The darkness consumes you.";
            document.getElementById('mMsg').style.color = "#ff003c";
            
            document.querySelectorAll('.m-card').forEach(card => {
                card.onclick = null;
                if(!card.classList.contains('matched')) {
                    card.classList.add('flipped');
                    card.innerText = card.dataset.sym;
                }
            });
        }, 800);
    }
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initMemory();
    initColorPicker();
});