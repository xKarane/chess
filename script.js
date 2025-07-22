const ground = Chessground(document.getElementById('board'), {
  fen: '6k1/5ppp/8/8/8/8/5PPP/6K1 w - - 0 1',
  turnColor: 'white',
  movable: {
    free: false,
    color: 'white',
    dests: {
      'g2': ['g3']
    },
    events: {
      after: (orig, dest) => {
        if (orig === 'g2' && dest === 'g3') {
          document.getElementById('message').classList.remove('hidden');
        }
      }
    }
  }
});

// Simple snow animation
const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let flakes = Array.from({length: 100}, () => ({
  x: Math.random() * width,
  y: Math.random() * height,
  r: Math.random() * 4 + 1,
  d: Math.random() * 1
}));

function drawSnow() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  for (let flake of flakes) {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveSnow();
}

function moveSnow() {
  for (let flake of flakes) {
    flake.y += flake.d;
    if (flake.y > height) {
      flake.y = 0;
      flake.x = Math.random() * width;
    }
  }
}

setInterval(drawSnow, 33);
