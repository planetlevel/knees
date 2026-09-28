const WORK_SECONDS = 50;
const REST_SECONDS = 10;

const appEl = document.getElementById('app');
const startScreen = document.getElementById('startScreen');
const workoutEl = document.getElementById('workout');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const backBtn = document.getElementById('backBtn');
const forwardBtn = document.getElementById('forwardBtn');
const phaseEl = document.getElementById('phase');
const timerEl = document.getElementById('timer');
const imgEl = document.getElementById('exerciseImg');
const nameEl = document.getElementById('exerciseName');
const progressEl = document.getElementById('progress');
const elapsedEl = document.getElementById('elapsed');

let order = [];
let index = 0;
let phase = 'work'; // 'work' | 'rest'
let secondsLeft = WORK_SECONDS;
let elapsedSeconds = 0;
let paused = false;
let tickHandle = null;

function formatElapsed(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `Elapsed ${m}:${String(s).padStart(2, '0')}`;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function beep(freq, duration) {
  try {
    const ctx = beep.ctx || (beep.ctx = new (window.AudioContext || window.webkitAudioContext)());
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = freq;
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) { /* ignore audio errors */ }
}

function loadImage() {
  const exercise = order[index];
  imgEl.src = 'images/' + encodeURIComponent(exercise.file);
  nameEl.textContent = exercise.name || '';
  progressEl.textContent = `Exercise ${index + 1} of ${order.length}`;
}

function setPhase(newPhase) {
  phase = newPhase;
  appEl.classList.remove('work', 'rest');
  appEl.classList.add(phase);
  phaseEl.textContent = phase === 'work' ? '' : 'Rest';
  secondsLeft = phase === 'work' ? WORK_SECONDS : REST_SECONDS;
  timerEl.textContent = secondsLeft;
}

function nextExercise() {
  index++;
  if (index >= order.length) {
    const last = order[order.length - 1];
    do {
      order = shuffle(order);
    } while (order.length > 1 && order[0].file === last.file);
    index = 0;
  }
  loadImage();
}

function prevExercise() {
  index--;
  if (index < 0) {
    index = order.length - 1;
  }
  loadImage();
}

function tick() {
  if (paused) return;
  secondsLeft--;
  elapsedSeconds++;
  elapsedEl.textContent = formatElapsed(elapsedSeconds);
  if (secondsLeft <= 0) {
    if (phase === 'work') {
      beep(880, 0.15);
      nextExercise();
      setPhase('rest');
    } else {
      beep(1200, 0.15);
      setPhase('work');
    }
  }
  timerEl.textContent = secondsLeft;
}

function start() {
  startScreen.style.display = 'none';
  workoutEl.style.display = 'flex';
  order = shuffle(EXERCISES);
  index = 0;
  elapsedSeconds = 0;
  elapsedEl.textContent = formatElapsed(elapsedSeconds);
  loadImage();
  setPhase('work');
  tickHandle = setInterval(tick, 1000);
}

pauseBtn.addEventListener('click', () => {
  paused = !paused;
  pauseBtn.textContent = paused ? 'Resume' : 'Pause';
  appEl.classList.toggle('paused', paused);
});

forwardBtn.addEventListener('click', () => {
  nextExercise();
  setPhase('work');
});

backBtn.addEventListener('click', () => {
  prevExercise();
  setPhase('work');
});

if (typeof EXERCISES === 'undefined' || EXERCISES.length === 0) {
  startScreen.innerHTML = '<h1>No exercises found</h1><p>Run regenerate-manifest.sh to rebuild exercises.js from the images folder.</p>';
} else {
  startBtn.addEventListener('click', start);
}
