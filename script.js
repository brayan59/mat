// =============================================
//   MATEMÁTICAS PREPA — script.js
// =============================================

// ---- BASE DE PREGUNTAS ----
const ALL_QUESTIONS = [

  // ========================
  //   NIVEL 1 — BÁSICO
  // ========================
  {
    level: 1,
    topic: "Números Reales",
    type: "opción múltiple",
    text: "¿Cuál de los siguientes conjuntos contiene ÚNICAMENTE números irracionales?",
    options: ["π, √2, √3", "2, 4, 6", "1/2, 1/3, 1/4", "√4, √9, √16"],
    answer: 0,
    explanation:
      "π ≈ 3.14159…, √2 ≈ 1.41421… y √3 ≈ 1.73205… son irracionales porque no se pueden expresar como fracción p/q. En cambio √4=2, √9=3 son enteros."
  },
  {
    level: 1,
    topic: "Números Reales",
    type: "opción múltiple",
    text: "¿Existe algún número real entre 0.999... (nueves que se repiten infinitamente) y 1?",
    options: [
      "Sí, hay infinitos números",
      "No, 0.999... = 1 exactamente",
      "Sí, exactamente uno",
      "Depende del sistema numérico"
    ],
    answer: 1,
    explanation:
      "0.999... = 1 exactamente. Si x = 0.999…, entonces 10x = 9.999…, y 10x − x = 9, por lo tanto 9x = 9, luego x = 1. Los números reales son densos: entre dos reales distintos siempre hay otro."
  },
  {
    level: 1,
    topic: "Sucesión Aritmética",
    type: "completar fórmula",
    text: "Completa la fórmula del término general de una sucesión aritmética:",
    formula: "aₙ = a₁ + (n − 1) · ?",
    fill_answer: "d",
    fill_hint: "d",
    explanation:
      "La letra 'd' es la razón o diferencia común. Es la diferencia constante entre términos consecutivos: d = aₙ − aₙ₋₁. La fórmula completa es aₙ = a₁ + (n−1)·d"
  },
  {
    level: 1,
    topic: "Sucesión Geométrica",
    type: "opción múltiple",
    text: "En una sucesión geométrica con a₁ = 3 y razón r = 2, ¿cuál es el 4.º término?",
    options: ["24", "12", "9", "18"],
    answer: 0,
    explanation:
      "Fórmula: aₙ = a₁ · r^(n−1). Para n=4: a₄ = 3 · 2³ = 3 · 8 = 24."
  },
  {
    level: 1,
    topic: "Límites",
    type: "opción múltiple",
    text: "¿Cuál es el resultado de lím(x→2) de (x² − 4) / (x − 2)?",
    options: ["4", "0", "2", "No existe"],
    answer: 0,
    explanation:
      "Factorizamos: (x²−4)/(x−2) = (x+2)(x−2)/(x−2) = x+2. Al sustituir x=2: 2+2 = 4. El límite es 4."
  },
  {
    level: 1,
    topic: "Derivadas",
    type: "opción múltiple",
    text: "¿Cuál es la derivada de f(x) = x⁴?",
    options: ["4x³", "x³", "4x⁵", "4"],
    answer: 0,
    explanation:
      "Regla de la potencia: d/dx[xⁿ] = n·xⁿ⁻¹. Aquí n=4, entonces f'(x) = 4x³."
  },

  // ========================
  //   NIVEL 2 — INTERMEDIO
  // ========================
  {
    level: 2,
    topic: "Números Reales",
    type: "opción múltiple",
    text: "¿Entre los números reales existen 'huecos' como en los racionales?",
    options: [
      "Sí, existen varios huecos",
      "No, los reales son completos (sin huecos)",
      "Solo hay huecos en los irracionales",
      "Solo hay huecos en los negativos"
    ],
    answer: 1,
    explanation:
      "Los racionales tienen 'huecos' (por ejemplo, √2 no es racional). Los reales son el conjunto COMPLETO: incluyen racionales e irracionales, llenando todos los huecos de la recta numérica. Esta propiedad se llama completitud o continuidad de los reales."
  },
  {
    level: 2,
    topic: "Derivadas",
    type: "opción múltiple",
    text: "Usando la regla del producto, ¿cuál es la derivada de f(x) = x² · sen(x)?",
    options: [
      "2x · cos(x)",
      "x² · cos(x) + 2x · sen(x)",
      "2x · sen(x) + x² · cos(x)",
      "x² + sen(x)"
    ],
    answer: 2,
    explanation:
      "Regla del producto: (u·v)' = u'·v + u·v'. Aquí u = x² → u' = 2x; v = sen(x) → v' = cos(x). Resultado: 2x·sen(x) + x²·cos(x)."
  },
  {
    level: 2,
    topic: "Sucesión Aritmética",
    type: "opción múltiple",
    text: "La sucesión 5, 8, 11, 14... ¿Cuál es el término número 20?",
    options: ["62", "59", "65", "68"],
    answer: 0,
    explanation:
      "a₁=5, d=3. Fórmula: aₙ = a₁+(n−1)d. a₂₀ = 5 + (20−1)·3 = 5 + 57 = 62."
  },
  {
    level: 2,
    topic: "Límites",
    type: "opción múltiple",
    text: "¿Cuál es lím(x→∞) de (3x² + 2x) / (x² − 5)?",
    options: ["0", "∞", "3", "−3"],
    answer: 2,
    explanation:
      "Para límites con x→∞ en cocientes de polinomios, domina el término de mayor grado. Dividimos todo entre x²: (3 + 2/x)/(1 − 5/x²). Cuando x→∞ los términos con x se van a 0, queda 3/1 = 3."
  },
  {
    level: 2,
    topic: "Derivadas",
    type: "completar fórmula",
    text: "Completa la regla del cociente. Si f(x) = u/v, entonces:",
    formula: "f'(x) = ( u'·v − u·v' ) / ?",
    fill_answer: "v²",
    fill_hint: "v²",
    explanation:
      "La regla del cociente es: (u/v)' = (u'v − uv') / v². El denominador es siempre v al cuadrado. ¡Ojo con el orden: primero u'v, luego menos uv'!"
  },
  {
    level: 2,
    topic: "Sucesión Geométrica",
    type: "opción múltiple",
    text: "Una bacteria se duplica cada hora. Si inicialmente hay 3 bacterias, ¿cuántas habrá después de 5 horas?",
    options: ["96", "48", "192", "64"],
    answer: 0,
    explanation:
      "Es una sucesión geométrica: a₁=3, r=2. Después de 5 horas (n=6): a₆ = 3 · 2⁵ = 3 · 32 = 96."
  },

  // ========================
  //   NIVEL 3 — AVANZADO
  // ========================
  {
    level: 3,
    topic: "Límites",
    type: "gráfica",
    text: "Observa la gráfica de f(x) = (x²−1)/(x−1). ¿Cuál es lím(x→1)?",
    graph: "limit",
    options: ["No existe el límite", "0", "2", "1"],
    answer: 2,
    explanation:
      "f(x) = (x²−1)/(x−1) = (x+1)(x−1)/(x−1) = x+1 para x≠1. La función tiene un 'hueco' en x=1 pero el límite existe: lím(x→1) = 1+1 = 2. La gráfica muestra la recta y=x+1 con un punto abierto en (1,2)."
  },
  {
    level: 3,
    topic: "Derivadas",
    type: "opción múltiple",
    text: "Usando la regla de la cadena, ¿cuál es la derivada de f(x) = (3x + 1)⁵?",
    options: ["5(3x+1)⁴", "15(3x+1)⁴", "(3x+1)⁵·3", "5(3x+1)⁵"],
    answer: 1,
    explanation:
      "Regla de la cadena: [g(u)]' = g'(u)·u'. Aquí g(u)=u⁵ → g'(u)=5u⁴; u=3x+1 → u'=3. Resultado: 5(3x+1)⁴·3 = 15(3x+1)⁴."
  },
  {
    level: 3,
    topic: "Sucesión Geométrica",
    type: "gráfica",
    text: "La gráfica muestra una sucesión geométrica con a₁=1 y r=2. ¿Cuál es la suma de los primeros 5 términos?",
    graph: "geometric",
    options: ["31", "32", "30", "16"],
    answer: 0,
    explanation:
      "Fórmula de suma geométrica: Sₙ = a₁·(rⁿ−1)/(r−1). S₅ = 1·(2⁵−1)/(2−1) = (32−1)/1 = 31. Los términos son: 1, 2, 4, 8, 16 → suma = 31."
  },
  {
    level: 3,
    topic: "Derivadas",
    type: "opción múltiple",
    text: "¿Cuál es f'(x) si f(x) = 4x³ − 3x² + 7x − 2?",
    options: [
      "12x² − 6x + 7",
      "4x² − 3x + 7",
      "12x³ − 6x² + 7",
      "12x² − 3x + 7"
    ],
    answer: 0,
    explanation:
      "Regla de la potencia + suma/resta: derivar término a término. (4x³)'=12x², (3x²)'=6x, (7x)'=7, (−2)'=0. Resultado: f'(x) = 12x² − 6x + 7."
  },
  {
    level: 3,
    topic: "Números Reales",
    type: "opción múltiple",
    text: "¿Cuál es la propiedad que diferencia a los reales de los racionales y garantiza que no hay 'huecos'?",
    options: [
      "Propiedad conmutativa",
      "Axioma de completitud (o del supremo)",
      "Propiedad distributiva",
      "Principio de inducción"
    ],
    answer: 1,
    explanation:
      "El Axioma de Completitud establece que todo conjunto no vacío de reales acotado superiormente tiene un supremo que también es real. Esto 'llena' los huecos de los racionales, como √2 ≈ 1.41421… que no es racional pero sí real."
  }
];

// ---- ESTADO DEL JUEGO ----
let currentLevel  = 1;
let questions     = [];
let qIndex        = 0;
let score         = 0;
let correct       = 0;
let wrong         = 0;
let timerInterval = null;
let timeLeft      = 20;
let answered      = false;
let dotStates     = [];
let chartInstance = null;

// =============================================
//   NAVEGACIÓN DE PANTALLAS
// =============================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

function showHome() {
  showScreen('home');
}

// =============================================
//   INICIAR JUEGO
// =============================================
function startGame(level) {
  currentLevel = level;

  // Filtrar preguntas del nivel; si no hay 10, rellenar con otros niveles
  let pool = ALL_QUESTIONS.filter(q => q.level === level);
  if (pool.length < 10) {
    const fill = ALL_QUESTIONS.filter(q => q.level !== level);
    fill.sort(() => Math.random() - 0.5);
    pool = pool.concat(fill.slice(0, 10 - pool.length));
  }

  // Mezclar y tomar 10
  questions = pool.sort(() => Math.random() - 0.5).slice(0, 10);

  qIndex   = 0;
  score    = 0;
  correct  = 0;
  wrong    = 0;
  dotStates = Array(questions.length).fill('');

  showScreen('game');
  renderDots();
  loadQuestion();
}

function restartSameLevel() {
  startGame(currentLevel);
}

// =============================================
//   DOTS DE PROGRESO
// =============================================
function renderDots() {
  const container = document.getElementById('progress-dots');
  container.innerHTML = dotStates
    .map((state, i) => {
      const current = i === qIndex ? 'current' : '';
      return `<div class="dot ${state} ${current}" title="Pregunta ${i + 1}"></div>`;
    })
    .join('');
}

// =============================================
//   CARGAR PREGUNTA
// =============================================
function loadQuestion() {
  answered = false;
  clearInterval(timerInterval);

  const q = questions[qIndex];

  // HUD
  document.getElementById('q-counter').textContent = `${qIndex + 1} / ${questions.length}`;
  document.getElementById('q-topic').textContent   = q.topic;
  document.getElementById('q-type').textContent    = q.type;
  document.getElementById('q-text').textContent    = q.text;

  // Limpiar elementos opcionales
  const formulaEl     = document.getElementById('q-formula');
  const graphEl       = document.getElementById('q-graph');
  const optionsEl     = document.getElementById('q-options');
  const fillEl        = document.getElementById('q-fill');
  const explanationEl = document.getElementById('q-explanation');

  formulaEl.style.display     = 'none';
  graphEl.style.display       = 'none';
  fillEl.style.display        = 'none';
  optionsEl.innerHTML         = '';
  explanationEl.style.display = 'none';
  explanationEl.textContent   = '';

  // Fórmula
  if (q.formula) {
    formulaEl.style.display = 'block';
    formulaEl.textContent   = q.formula;
  }

  // Gráfica
  if (q.graph) {
    graphEl.style.display = 'block';
    renderGraph(q.graph);
  }

  // Tipo de respuesta
  if (q.type === 'completar fórmula') {
    fillEl.style.display = 'flex';
    const inp = document.getElementById('fill-input');
    inp.value                = '';
    inp.disabled             = false;
    inp.style.borderBottomColor = '#6b7280';
  } else {
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.textContent = String.fromCharCode(65 + i) + ') ' + opt;
      btn.onclick = () => checkOption(i, btn, q);
      optionsEl.appendChild(btn);
    });
  }

  startTimer();
  renderDots();
}

// =============================================
//   TEMPORIZADOR
// =============================================
function startTimer() {
  timeLeft = 20;
  updateTimerUI();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeExpired();
    }
  }, 1000);
}

function updateTimerUI() {
  const pct  = (timeLeft / 20) * 100;
  const fill = document.getElementById('timer-fill');
  document.getElementById('timer-label').textContent = `⏱ ${timeLeft}s`;
  fill.style.width = pct + '%';

  if (timeLeft <= 7)       fill.style.background = '#e24b4a';
  else if (timeLeft <= 12) fill.style.background = '#f59e0b';
  else                     fill.style.background = '#3b82f6';
}

function timeExpired() {
  if (answered) return;
  answered = true;
  wrong++;
  dotStates[qIndex] = 'done-wrong';

  const q = questions[qIndex];

  // Marcar la respuesta correcta en verde
  if (q.type !== 'completar fórmula') {
    const btns = document.querySelectorAll('.opt-btn');
    if (btns[q.answer]) btns[q.answer].classList.add('correct');
  }
  const fillInput = document.getElementById('fill-input');
  if (fillInput) fillInput.disabled = true;

  renderDots();
  showExplanation(q.explanation, true); // true = mostrar botón continuar
}

// =============================================
//   VERIFICAR RESPUESTAS
// =============================================
function checkOption(i, btn, q) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);

  const wasCorrect = (i === q.answer);

  if (wasCorrect) {
    btn.classList.add('correct');
    score  += Math.max(10, Math.floor(timeLeft * 5));
    correct++;
    dotStates[qIndex] = 'done-correct';
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('.opt-btn')[q.answer].classList.add('correct');
    wrong++;
    dotStates[qIndex] = 'done-wrong';
  }

  // Deshabilitar todos los botones de opción
  document.querySelectorAll('.opt-btn').forEach(b => (b.onclick = null));

  document.getElementById('score-live').textContent = score;
  renderDots();

  if (wasCorrect) {
    showExplanation(q.explanation, false); // sin botón continuar
    setTimeout(nextQuestion, 2000);
  } else {
    showExplanation(q.explanation, true); // con botón continuar
  }
}

function checkFill() {
  if (answered) return;
  const q   = questions[qIndex];
  const inp = document.getElementById('fill-input');
  const val = inp.value.trim().toLowerCase().replace(/\s/g, '');
  const expected = q.fill_answer.toLowerCase().replace(/\s/g, '');

  answered = true;
  clearInterval(timerInterval);

  const isCorrect = val === expected || val === expected.replace('^', '');

  if (isCorrect) {
    inp.style.borderBottomColor = '#22a340';
    score  += Math.max(10, Math.floor(timeLeft * 5));
    correct++;
    dotStates[qIndex] = 'done-correct';
  } else {
    inp.style.borderBottomColor = '#e24b4a';
    inp.value = q.fill_answer;
    wrong++;
    dotStates[qIndex] = 'done-wrong';
  }

  inp.disabled = true;
  document.getElementById('score-live').textContent = score;
  renderDots();

  if (isCorrect) {
    showExplanation(q.explanation, false);
    setTimeout(nextQuestion, 2000);
  } else {
    showExplanation(q.explanation, true);
  }
}

// =============================================
//   EXPLICACIÓN
// =============================================
function showExplanation(text, showContinueBtn) {
  const el = document.getElementById('q-explanation');
  el.innerHTML = '💡 ' + text;

  if (showContinueBtn) {
    const btn = document.createElement('button');
    btn.className   = 'btn-continuar';
    btn.textContent = 'Continuar →';
    btn.onclick     = nextQuestion;
    el.appendChild(btn);
  }

  el.style.display = 'block';
}

// =============================================
//   SIGUIENTE PREGUNTA / FIN
// =============================================
function nextQuestion() {
  qIndex++;
  if (qIndex >= questions.length) {
    endGame();
  } else {
    loadQuestion();
  }
}

function endGame() {
  showScreen('result');
  document.getElementById('res-score').textContent   = score;
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent   = wrong;

  const pct = Math.round((correct / questions.length) * 100);
  let emoji = '😅';
  let msg   = 'Sigue practicando, ¡vas a mejorar!';

  if (pct >= 90)      { emoji = '🏆'; msg = '¡Increíble! Dominas el tema.'; }
  else if (pct >= 70) { emoji = '🎉'; msg = '¡Muy bien! Tienes buena base.'; }
  else if (pct >= 50) { emoji = '👍'; msg = '¡Bien! Repasa los temas donde fallaste.'; }

  document.getElementById('res-emoji').textContent = emoji;
  document.getElementById('res-msg').textContent =
    `Respondiste bien el ${pct}% de las preguntas. ${msg}`;
}

// =============================================
//   GRÁFICAS (Chart.js)
// =============================================
function renderGraph(type) {
  if (chartInstance) {
    chartInstance.destroy();
    chartInstance = null;
  }

  const ctx = document.getElementById('mini-chart').getContext('2d');

  if (type === 'limit') {
    // Gráfica de f(x) = x + 1 con hueco en x=1
    const labels = [];
    const data   = [];
    for (let x = -1; x <= 3.1; x += 0.15) {
      labels.push(x.toFixed(1));
      if (Math.abs(x - 1) > 0.08) {
        data.push(+(x + 1).toFixed(3));
      } else {
        data.push(null); // hueco
      }
    }
    chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          data,
          borderColor: '#3b82f6',
          borderWidth: 2.5,
          pointRadius: 0,
          spanGaps: false,
          tension: 0.1
        }]
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
          title: {
            display: true,
            text: 'f(x) = (x²−1)/(x−1)',
            font: { size: 12 },
            color: '#6b7280'
          }
        },
        scales: {
          x: { ticks: { maxTicksLimit: 6, font: { size: 10 } } },
          y: { ticks: { maxTicksLimit: 5, font: { size: 10 } } }
        },
        animation: false
      }
    });

  } else if (type === 'geometric') {
    // Barras de sucesión geométrica: 1, 2, 4, 8, 16
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5'],
        datasets: [{
          data: [1, 2, 4, 8, 16],
          backgroundColor: '#22a340',
          borderRadius: 5
        }]
      },
      options: {
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Sucesión geométrica: a₁=1, r=2',
            font: { size: 12 },
            color: '#6b7280'
          }
        },
        scales: {
          x: { ticks: { font: { size: 11 } } },
          y: { ticks: { font: { size: 11 } } }
        },
        animation: false
      }
    });
  }
}