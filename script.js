// --- DATASETS ---

// 1. High School Basic Elements (The "Must Memorize" list)
const basicElements = [
    { number: 1, symbol: 'H', name: '水素' },
    { number: 2, symbol: 'He', name: 'ヘリウム' },
    { number: 3, symbol: 'Li', name: 'リチウム' },
    { number: 4, symbol: 'Be', name: 'ベリリウム' },
    { number: 5, symbol: 'B', name: 'ホウ素' },
    { number: 6, symbol: 'C', name: '炭素' },
    { number: 7, symbol: 'N', name: '窒素' },
    { number: 8, symbol: 'O', name: '酸素' },
    { number: 9, symbol: 'F', name: 'フッ素' },
    { number: 10, symbol: 'Ne', name: 'ネオン' },
    { number: 11, symbol: 'Na', name: 'ナトリウム' },
    { number: 12, symbol: 'Mg', name: 'マグネシウム' },
    { number: 13, symbol: 'Al', name: 'アルミニウム' },
    { number: 14, symbol: 'Si', name: 'ケイ素' },
    { number: 15, symbol: 'P', name: 'リン' },
    { number: 16, symbol: 'S', name: '硫黄' },
    { number: 17, symbol: 'Cl', name: '塩素' },
    { number: 18, symbol: 'Ar', name: 'アルゴン' },
    { number: 19, symbol: 'K', name: 'カリウム' },
    { number: 20, symbol: 'Ca', name: 'カルシウム' },
    { number: 26, symbol: 'Fe', name: '鉄' },
    { number: 29, symbol: 'Cu', name: '銅' },
    { number: 30, symbol: 'Zn', name: '亜鉛' },
    { number: 47, symbol: 'Ag', name: '銀' },
    { number: 79, symbol: 'Au', name: '金' }
];

// 2. Master Mode (All 118 Elements)
const allElements = [
    { number: 1, symbol: 'H', name: '水素' }, { number: 2, symbol: 'He', name: 'ヘリウム' },
    { number: 3, symbol: 'Li', name: 'リチウム' }, { number: 4, symbol: 'Be', name: 'ベリリウム' },
    { number: 5, symbol: 'B', name: 'ホウ素' }, { number: 6, symbol: 'C', name: '炭素' },
    { number: 7, symbol: 'N', name: '窒素' }, { number: 8, symbol: 'O', name: '酸素' },
    { number: 9, symbol: 'F', name: 'フッ素' }, { number: 10, symbol: 'Ne', name: 'ネオン' },
    { number: 11, symbol: 'Na', name: 'ナトリウム' }, { number: 12, symbol: 'Mg', name: 'マグネシウム' },
    { number: 13, symbol: 'Al', name: 'アルミニウム' }, { number: 14, symbol: 'Si', name: 'ケイ素' },
    { number: 15, symbol: 'P', name: 'リン' }, { number: 16, symbol: 'S', name: '硫黄' },
    { number: 17, symbol: 'Cl', name: '塩素' }, { number: 18, symbol: 'Ar', name: 'アルゴン' },
    { number: 19, symbol: 'K', name: 'カリウム' }, { number: 20, symbol: 'Ca', name: 'カルシウム' },
    { number: 21, symbol: 'Sc', name: 'スカンジウム' }, { number: 22, symbol: 'Ti', name: 'チタン' },
    { number: 23, symbol: 'V', name: 'バナジウム' }, { number: 24, symbol: 'Cr', name: 'クロム' },
    { number: 25, symbol: 'Mn', name: 'マンガン' }, { number: 26, symbol: 'Fe', name: '鉄' },
    { number: 27, symbol: 'Co', name: 'コバルト' }, { number: 28, symbol: 'Ni', name: 'ニッケル' },
    { number: 29, symbol: 'Cu', name: '銅' }, { number: 30, symbol: 'Zn', name: '亜鉛' },
    { number: 31, symbol: 'Ga', name: 'ガリウム' }, { number: 32, symbol: 'Ge', name: 'ゲルマニウム' },
    { number: 33, symbol: 'As', name: 'ヒ素' }, { number: 34, symbol: 'Se', name: 'セレン' },
    { number: 35, symbol: 'Br', name: '臭素' }, { number: 36, symbol: 'Kr', name: 'クリプトン' },
    { number: 37, symbol: 'Rb', name: 'ルビジウム' }, { number: 38, symbol: 'Sr', name: 'ストロンチウム' },
    { number: 39, symbol: 'Y', name: 'イットリウム' }, { number: 40, symbol: 'Zr', name: 'ジルコニウム' },
    { number: 41, symbol: 'Nb', name: 'ニオブ' }, { number: 42, symbol: 'Mo', name: 'モリブデン' },
    { number: 43, symbol: 'Tc', name: 'テクネチウム' }, { number: 44, symbol: 'Ru', name: 'ルテニウム' },
    { number: 45, symbol: 'Rh', name: 'ロジウム' }, { number: 46, symbol: 'Pd', name: 'パラジウム' },
    { number: 47, symbol: 'Ag', name: '銀' }, { number: 48, symbol: 'Cd', name: 'カドミウム' },
    { number: 49, symbol: 'In', name: 'インジウム' }, { number: 50, symbol: 'Sn', name: 'スズ' },
    { number: 51, symbol: 'Sb', name: 'アンチモン' }, { number: 52, symbol: 'Te', name: 'テルル' },
    { number: 53, symbol: 'I', name: 'ヨウ素' }, { number: 54, symbol: 'Xe', name: 'キセノン' },
    { number: 55, symbol: 'Cs', name: 'セシウム' }, { number: 56, symbol: 'Ba', name: 'バリウム' },
    { number: 57, symbol: 'La', name: 'ランタン' }, { number: 58, symbol: 'Ce', name: 'セリウム' },
    { number: 59, symbol: 'Pr', name: 'プラセオジム' }, { number: 60, symbol: 'Nd', name: 'ネオジム' },
    { number: 61, symbol: 'Pm', name: 'プロメチウム' }, { number: 62, symbol: 'Sm', name: 'サマリウム' },
    { number: 63, symbol: 'Eu', name: 'ユウロピウム' }, { number: 64, symbol: 'Gd', name: 'ガドリニウム' },
    { number: 65, symbol: 'Tb', name: 'テルビウム' }, { number: 66, symbol: 'Dy', name: 'ジスプロシウム' },
    { number: 67, symbol: 'Ho', name: 'ホルミウム' }, { number: 68, symbol: 'Er', name: 'エルビウム' },
    { number: 69, symbol: 'Tm', name: 'ツリウム' }, { number: 70, symbol: 'Yb', name: 'イッテルビウム' },
    { number: 71, symbol: 'Lu', name: 'ルテチウム' }, { number: 72, symbol: 'Hf', name: 'ハフニウム' },
    { number: 73, symbol: 'Ta', name: 'タンタル' }, { number: 74, symbol: 'W', name: 'タングステン' },
    { number: 75, symbol: 'Re', name: 'レニウム' }, { number: 76, symbol: 'Os', name: 'オスミウム' },
    { number: 77, symbol: 'Ir', name: 'イリジウム' }, { number: 78, symbol: 'Pt', name: '白金' },
    { number: 79, symbol: 'Au', name: '金' }, { number: 80, symbol: 'Hg', name: '水銀' },
    { number: 81, symbol: 'Tl', name: 'タリウム' }, { number: 82, symbol: 'Pb', name: '鉛' },
    { number: 83, symbol: 'Bi', name: 'ビスマス' }, { number: 84, symbol: 'Po', name: 'ポロニウム' },
    { number: 85, symbol: 'At', name: 'アスタチン' }, { number: 86, symbol: 'Rn', name: 'ラドン' },
    { number: 87, symbol: 'Fr', name: 'フランシウム' }, { number: 88, symbol: 'Ra', name: 'ラジウム' },
    { number: 89, symbol: 'Ac', name: 'アクチニウム' }, { number: 90, symbol: 'Th', name: 'トリウム' },
    { number: 91, symbol: 'Pa', name: 'プロトアクチニウム' }, { number: 92, symbol: 'U', name: 'ウラン' },
    { number: 93, symbol: 'Np', name: 'ネプツニウム' }, { number: 94, symbol: 'Pu', name: 'プルトニウム' },
    { number: 95, symbol: 'Am', name: 'アメリシウム' }, { number: 96, symbol: 'Cm', name: 'キュリウム' },
    { number: 97, symbol: 'Bk', name: 'バークリウム' }, { number: 98, symbol: 'Cf', name: 'カリホルニウム' },
    { number: 99, symbol: 'Es', name: 'アインスタイニウム' }, { number: 100, symbol: 'Fm', name: 'フェルミウム' },
    { number: 101, symbol: 'Md', name: 'メンデレビウム' }, { number: 102, symbol: 'No', name: 'ノーベリウム' },
    { number: 103, symbol: 'Lr', name: 'ローレンシウム' }, { number: 104, symbol: 'Rf', name: 'ラザホージウム' },
    { number: 105, symbol: 'Db', name: 'ドブニウム' }, { number: 106, symbol: 'Sg', name: 'シーボーギウム' },
    { number: 107, symbol: 'Bh', name: 'ボーリウム' }, { number: 108, symbol: 'Hs', name: 'ハッシウム' },
    { number: 109, symbol: 'Mt', name: 'マイトネリウム' }, { number: 110, symbol: 'Ds', name: 'ダームスタチウム' },
    { number: 111, symbol: 'Rg', name: 'レントゲニウム' }, { number: 112, symbol: 'Cn', name: 'コペルニシウム' },
    { number: 113, symbol: 'Nh', name: 'ニホニウム' }, { number: 114, symbol: 'Fl', name: 'フレロビウム' },
    { number: 115, symbol: 'Mc', name: 'モスコビウム' }, { number: 116, symbol: 'Lv', name: 'リバモリウム' },
    { number: 117, symbol: 'Ts', name: 'テネシン' }, { number: 118, symbol: 'Og', name: 'オガネソン' }
];

const equationsData = [
    { parts: ['<input class="eq-input" id="c1" type="number"> H₂', '+', '<input class="eq-input" id="c2" type="number"> O₂', '→', '<input class="eq-input" id="c3" type="number"> H₂O'], answer: [2, 1, 2], desc: '水の生成' },
    { parts: ['<input class="eq-input" id="c1" type="number"> N₂', '+', '<input class="eq-input" id="c2" type="number"> H₂', '→', '<input class="eq-input" id="c3" type="number"> NH₃'], answer: [1, 3, 2], desc: 'アンモニアの生成' },
    { parts: ['<input class="eq-input" id="c1" type="number"> Cu', '+', '<input class="eq-input" id="c2" type="number"> O₂', '→', '<input class="eq-input" id="c3" type="number"> CuO'], answer: [2, 1, 2], desc: '銅の酸化' }
];

const phData = [
    { name: 'レモン汁', type: 'acid' }, { name: '石けん水', type: 'base' },
    { name: '食塩水', type: 'neutral' }, { name: '炭酸飲料', type: 'acid' },
    { name: 'アンモニア水', type: 'base' }, { name: '胃液', type: 'acid' },
    { name: '重曹 (水溶液)', type: 'base' }, { name: '純水', type: 'neutral' }
];


// --- CONTROLLER ---

const gameContainer = document.getElementById('game-container');

// Show the main menu
function showHome() {
    gameContainer.innerHTML = `
        <div class="hero">
            <h1>化学の世界へようこそ！</h1>
            <p>高校化学の基礎から、マニアックな118元素まで。</p>
            <div class="menu-grid">
                <div class="menu-card" onclick="startGame('basic')">
                    <h2>🔥 基礎元素クイズ</h2>
                    <p>まずはここから！基本の20個。</p>
                </div>
                <div class="menu-card master-card" onclick="startGame('master')">
                    <h2>💀 周期表マスター</h2>
                    <p>全118元素に挑戦！君はどこまでいける？</p>
                </div>
                <div class="menu-card" onclick="startGame('equations')">
                    <h2>⚖️ 化学反応式パズル</h2>
                    <p>係数を合わせて反応式を完成させよう。</p>
                </div>
                <div class="menu-card" onclick="startGame('ph')">
                    <h2>🍋 酸・塩基仕分け</h2>
                    <p>酸性・中性・アルカリ性を瞬時に判断！</p>
                </div>
            </div>
        </div>
    `;
}

// Router to start games
function startGame(type) {
    if (type === 'basic') {
        runElementsGame(basicElements, '基礎元素クイズ');
    } else if (type === 'master') {
        runElementsGame(allElements, '周期表マスター');
    } else if (type === 'equations') {
        runEquationsGame();
    } else if (type === 'ph') {
        runPhGame();
    }
}


// --- GAME ENGINES ---

// 1. Universal Elements Game Engine
// Works for both Basic and Master because data format is now identical
function runElementsGame(dataset, title) {
    let score = 0;
    let count = 0;
    const maxQ = 10;

    function nextQuestion() {
        if (count >= maxQ) {
            gameContainer.innerHTML = `
                <div class="game-area">
                    <h2>${title} 終了！</h2>
                    <p class="question-box">${score} / ${maxQ} 正解</p>
                    <button class="game-btn" onclick="showHome()">ホームに戻る</button>
                </div>
            `;
            return;
        }

        // Pick random element
        const current = dataset[Math.floor(Math.random() * dataset.length)];

        // Generate options (1 correct + 3 wrong)
        let options = [current.name];
        while (options.length < 4) {
            let rand = dataset[Math.floor(Math.random() * dataset.length)];
            if (!options.includes(rand.name)) options.push(rand.name);
        }
        options.sort(() => Math.random() - 0.5);

        gameContainer.innerHTML = `
            <div class="game-area">
                <h2>${title} (${count + 1}/${maxQ})</h2>
                <div class="atomic-number">原子番号 ${current.number}</div>
                <div class="question-box">${current.symbol}</div>
                <p>この元素の名前は？</p>
                <div class="options-grid" id="opt-container"></div>
                <div class="feedback" id="fb"></div>
            </div>
        `;

        const container = document.getElementById('opt-container');
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'game-btn';
            btn.innerText = opt;
            btn.onclick = () => checkAnswer(opt, current.name);
            container.appendChild(btn);
        });
    }

    function checkAnswer(selected, correct) {
        const fb = document.getElementById('fb');
        if (selected === correct) {
            score++;
            fb.style.color = 'var(--correct)';
            fb.innerText = '正解！ ⭕';
        } else {
            fb.style.color = 'var(--wrong)';
            fb.innerText = `残念... 正解は ${correct}`;
        }
        count++;
        setTimeout(nextQuestion, 1500);
    }

    nextQuestion();
}

// 2. Equation Game Engine
function runEquationsGame() {
    let idx = 0;

    function renderEq() {
        if (idx >= equationsData.length) {
            gameContainer.innerHTML = `<div class="game-area"><h2>全問クリア！</h2><button class="game-btn" onclick="showHome()">ホーム</button></div>`;
            return;
        }
        const eq = equationsData[idx];
        gameContainer.innerHTML = `
            <div class="game-area">
                <h2>化学反応式パズル</h2>
                <p>${eq.desc}</p>
                <div class="equation-box">${eq.parts.join(' ')}</div>
                <p>係数が1の場合は「1」を入力</p>
                <button class="game-btn" onclick="checkEq()">答える</button>
                <div class="feedback" id="eq-fb"></div>
            </div>
        `;
    }

    // Attach to window so HTML onclick works
    window.checkEq = function() {
        const eq = equationsData[idx];
        const inputs = [];
        // Loop through however many inputs the answer array expects
        for(let i=1; i <= eq.answer.length; i++) {
            const el = document.getElementById('c'+i);
            inputs.push(parseInt(el ? el.value : 0) || 0);
        }

        const fb = document.getElementById('eq-fb');
        if (JSON.stringify(inputs) === JSON.stringify(eq.answer)) {
            fb.style.color = 'var(--correct)'; fb.innerText = '正解！完璧です。';
            idx++; setTimeout(renderEq, 1500);
        } else {
            fb.style.color = 'var(--wrong)'; fb.innerText = '数が合いません。';
        }
    };

    renderEq();
}

// 3. pH Game Engine
function runPhGame() {
    let score = 0, count = 0, max = 5;

    function nextPh() {
        if (count >= max) {
            gameContainer.innerHTML = `<div class="game-area"><h2>結果: ${score}/${max}</h2><button class="game-btn" onclick="showHome()">ホーム</button></div>`;
            return;
        }
        const q = phData[Math.floor(Math.random() * phData.length)];
        gameContainer.innerHTML = `
            <div class="game-area">
                <h2>酸・塩基クイズ (${count+1}/${max})</h2>
                <div class="question-box">${q.name}</div>
                <div class="options-grid" style="grid-template-columns:1fr 1fr 1fr">
                    <button class="game-btn" style="background:#E74C3C" onclick="checkPh('acid','${q.type}')">酸性</button>
                    <button class="game-btn" style="background:#2ECC71" onclick="checkPh('neutral','${q.type}')">中性</button>
                    <button class="game-btn" style="background:#3498DB" onclick="checkPh('base','${q.type}')">アルカリ性</button>
                </div>
                <div class="feedback" id="ph-fb"></div>
            </div>
        `;
    }

    window.checkPh = function(guess, answer) {
        const fb = document.getElementById('ph-fb');
        if (guess === answer) {
            score++; fb.style.color='var(--correct)'; fb.innerText='正解！';
        } else {
            fb.style.color='var(--wrong)'; fb.innerText='不正解...';
        }
        count++; setTimeout(nextPh, 1500);
    };
    nextPh();
}

// Initial Load
showHome();
