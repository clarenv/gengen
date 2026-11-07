// --- TABS LOGIC ---
function switchTab(evt, id) {
    // Alisin active sa lahat ng tabs at panels
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    
    // Gawing active yung pinindot
    evt.currentTarget.classList.add('active');
    document.getElementById(id).classList.add('active');
}

// ==========================================
// 1. COLOR GAME LOGIC
// ==========================================
const colorsList = [
    { name: "RED", hex: "#e74c3c" }, { name: "BLUE", hex: "#3498db" }, 
    { name: "GREEN", hex: "#2ecc71" }, { name: "YELLOW", hex: "#f1c40f" }, 
    { name: "PURPLE", hex: "#9b59b6" }, { name: "ORANGE", hex: "#e67e22" }
];
let cAns = "", cPoint = 0, cPlay = false;

function startColor() {
    if(document.getElementById('cStart').innerText === "START GAME") { 
        cPoint = 0; document.getElementById('cScore').innerText = 0; 
    }
    cPlay = true;
    document.getElementById('cStart').innerText = "NEXT ROUND";
    document.getElementById('cMsg').innerText = "Pick the right color!";
    document.getElementById('cMsg').style.color = "";
    
    // Shuffle at pumili ng 4 na kulay
    let shuffled = [...colorsList].sort(() => 0.5 - Math.random());
    let choices = shuffled.slice(0, 4);
    let winner = choices[Math.floor(Math.random() * 4)];
    
    cAns = winner.name;
    let box = document.getElementById('cBox');
    box.innerText = winner.name;
    box.style.background = winner.hex;
    
    let opts = document.getElementById('cOpts');
    opts.innerHTML = "";
    choices.forEach(c => {
        let btn = document.createElement("button");
        btn.className = "c-btn";
        btn.style.background = c.hex;
        btn.onclick = () => {
            if(!cPlay) return;
            cPlay = false;
            
            let msg = document.getElementById('cMsg');
            if(c.name === cAns) {
                cPoint++;
                document.getElementById('cScore').innerText = cPoint;
                msg.innerText = "✅ CORRECT!";
                msg.style.color = "#2ecc71";
            } else {
                msg.innerText = "❌ WRONG! It was " + cAns;
                msg.style.color = "#e74c3c";
            }
        };
        opts.appendChild(btn);
    });
}

// ==========================================
// 2. UNO GAME LOGIC
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
    document.getElementById('uMsg').style.color = "";
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
    
    // Check kung valid
    if(card.color !== currentTop.color && card.num !== currentTop.num) {
        msg.innerText = "❌ Must match color or number!";
        msg.style.color = "#e74c3c";
        return;
    }
    
    // I-play yung card
    currentTop = pCards.splice(i, 1)[0];
    drawUno();
    
    if(pCards.length === 0) { 
        msg.innerText = "🎉 YOU WIN!"; 
        msg.style.color = "#2ecc71";
        return; 
    }
    
    msg.innerText = "⏳ CPU is playing...";
    msg.style.color = "";
    
    // CPU Turn
    setTimeout(() => {
        let cIdx = cCards.findIndex(c => c.color === currentTop.color || c.num === currentTop.num);
        if(cIdx !== -1) {
            currentTop = cCards.splice(cIdx, 1)[0];
        } else {
            cCards.push(getNewCard());
        }
        drawUno();
        
        if(cCards.length === 0) { 
            msg.innerText = "💀 CPU WINS!"; 
            msg.style.color = "#e74c3c";
            return; 
        }
        
        msg.innerText = "Your turn!";
        msg.style.color = "";
    }, 1000);
}

// ==========================================
// 3. MEMORY GAME LOGIC
// ==========================================
let fCard = null, sCard = null, mCount = 0, pCount = 0, mLock = false;

function initMemory() {
    let grid = document.getElementById('mGrid');
    grid.innerHTML = "";
    
    // Reset variables
    fCard = null; sCard = null; mCount = 0; pCount = 0; mLock = false;
    document.getElementById('mMoves').innerText = 0; 
    document.getElementById('mPairs').innerText = 0;
    document.getElementById('mMsg').innerText = "Find the pairs!";
    document.getElementById('mMsg').style.color = "";
    
    // Gumawa ng pairs at i-shuffle
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
    
    if(fCard.dataset.sym === sCard.dataset.sym) {
        // Match!
        fCard.classList.add("matched");
        sCard.classList.add("matched");
        pCount++;
        document.getElementById('mPairs').innerText = pCount;
        fCard = null; sCard = null;
        
        if(pCount === 4) {
            let msg = document.getElementById('mMsg');
            msg.innerText = "🏆 YOU WIN!";
            msg.style.color = "#2ecc71";
        }
    } else {
        // No match
        mLock = true;
        setTimeout(() => {
            fCard.classList.remove("flipped"); fCard.innerText = "?";
            sCard.classList.remove("flipped"); sCard.innerText = "?";
            fCard = null; sCard = null; mLock = false;
        }, 800);
    }
}

// Simulan ang Memory Game pagka-load ng page
document.addEventListener("DOMContentLoaded", () => {
    initMemory();
});