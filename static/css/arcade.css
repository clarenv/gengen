/* ==================================
   ARCADE MAIN STYLES
================================== */
:root {
    --bg-dark: #0a0505;
    --bg-card: #140a0a;
    --gold: #D4AF37;
    --gold-bright: #FFD700;
    --text-main: #f5f5f5;
    --text-muted: #a3a3a3;
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Montserrat', sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: var(--font-body);
    background-color: var(--bg-dark);
    color: var(--text-main);
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 40px 20px;
    background-image: 
        linear-gradient(45deg, #1a0a0a 25%, transparent 25%, transparent 75%, #1a0a0a 75%, #1a0a0a),
        linear-gradient(45deg, #1a0a0a 25%, transparent 25%, transparent 75%, #1a0a0a 75%, #1a0a0a);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
}

.gold-text { color: var(--gold); text-shadow: 0 0 10px rgba(212, 175, 55, 0.5); }

.arcade-container {
    width: 100%;
    max-width: 900px;
    background: var(--bg-card);
    border: 2px solid var(--gold);
    border-radius: 16px;
    padding: 40px 30px;
    box-shadow: 0 0 60px rgba(212, 175, 55, 0.2);
    position: relative;
}

.back-btn {
    display: inline-block;
    color: var(--text-muted);
    text-decoration: none;
    font-weight: 700;
    font-size: 0.8rem;
    letter-spacing: 1px;
    margin-bottom: 20px;
    transition: color 0.3s;
}
.back-btn:hover { color: var(--gold); }

.arcade-heading { text-align: center; margin-bottom: 30px; }
.arcade-heading span { color: var(--gold); font-size: 0.75rem; font-weight: 800; letter-spacing: 4px; }
.arcade-heading h1 { font-family: var(--font-heading); font-size: clamp(2rem, 5vw, 3rem); margin: 10px 0; text-transform: uppercase; }
.arcade-heading p { color: var(--text-muted); }
.arcade-heading small { color: var(--gold); font-size: 0.7rem; letter-spacing: 2px; }

/* ==================================
   TABS
================================== */
.game-selection { display: flex; gap: 10px; justify-content: center; margin: 25px 0; flex-wrap: wrap; }
.game-tab { 
    padding: 12px 20px; background: var(--bg-dark); color: var(--text-muted); 
    border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 6px; 
    cursor: pointer; font-family: var(--font-body); font-weight: 700; font-size: 0.8rem; 
    transition: all 0.3s; 
}
.game-tab.active { background: var(--gold); color: var(--bg-dark); border-color: var(--gold); }
.game-tab:hover:not(.active) { border-color: var(--gold); color: var(--gold); }

.game-panel { display: none; text-align: center; padding: 20px 0; }
.game-panel.active { display: block; }
.game-panel h2 { color: var(--gold); margin-bottom: 10px; font-family: var(--font-heading); }
.game-start-btn { 
    margin-top: 20px; padding: 14px 32px; background: var(--gold); color: var(--bg-dark); 
    border: none; border-radius: 6px; font-family: var(--font-body); font-weight: 800; 
    font-size: 0.9rem; letter-spacing: 1px; cursor: pointer; transition: 0.3s; 
}
.game-start-btn:hover { background: var(--gold-bright); transform: translateY(-2px); }

/* ==================================
   COLOR GAME
================================== */
.color-display { 
    width: 150px; height: 150px; margin: 20px auto; display: flex; 
    align-items: center; justify-content: center; font-weight: 800; 
    font-size: 1.2rem; border-radius: 12px; background: #333; 
    border: 3px solid var(--gold); color: #fff; transition: 0.3s;
}
.color-options { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; max-width: 400px; margin: 0 auto 20px; }
.color-option { aspect-ratio: 1; border-radius: 8px; border: 2px solid #fff; cursor: pointer; transition: 0.2s; }
.color-option:hover { transform: scale(1.1); }

/* ==================================
   UNO GAME
================================== */
.uno-stats, .memory-stats { display: flex; justify-content: center; gap: 30px; margin: 15px 0; color: #ccc; font-weight: 600; }
.uno-stats b, .memory-stats b { color: var(--gold); }
.uno-top-card { 
    width: 90px; height: 130px; margin: 20px auto; border-radius: 10px; 
    display: flex; align-items: center; justify-content: center; 
    font-size: 2.5rem; font-weight: 800; color: #fff; 
    background: #333; border: 3px solid #fff; box-shadow: 0 4px 10px rgba(0,0,0,0.5); 
}
.uno-hand { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin: 20px 0; min-height: 110px; }
.uno-card { 
    width: 70px; height: 100px; border-radius: 8px; border: 3px solid #fff; 
    color: #fff; font-size: 1.5rem; font-weight: 800; cursor: pointer; 
    transition: 0.2s; display: flex; flex-direction: column; align-items: center; justify-content: center; 
}
.uno-card:hover { transform: translateY(-8px); box-shadow: 0 5px 15px rgba(255,255,255,0.3); }
.uno-color-dot { width: 14px; height: 14px; border-radius: 50%; margin-bottom: 4px; border: 1px solid #fff; }
.uno-red { background: #d32f2f; } .uno-blue { background: #1976d2; }
.uno-green { background: #388e3c; } .uno-yellow { background: #fbc02d; color: #111; }
.uno-yellow .uno-color-dot { border-color: #111; }

/* ==================================
   MEMORY GAME
================================== */
.memory-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; max-width: 320px; margin: 20px auto; }
.memory-card { 
    aspect-ratio: 1; background: var(--bg-dark); border: 2px solid var(--gold); 
    border-radius: 8px; color: var(--gold); font-size: 1.8rem; font-weight: 800;
    cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.3s;
}
.memory-card.flipped { background: var(--gold); color: var(--bg-dark); }
.memory-card.matched { background: #2a1a0a; border-color: var(--gold-bright); color: var(--gold-bright); cursor: default; }

/* ==================================
   FOOTER
================================== */
.arcade-footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(212, 175, 55, 0.2); }
.arcade-footer p { color: var(--gold); font-weight: 800; letter-spacing: 3px; }
.arcade-footer small { color: var(--text-muted); font-size: 0.7rem; letter-spacing: 2px; }
