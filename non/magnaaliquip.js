const defaultConfettiConfig = {
  particleCount: 100,
  angle: 90,
  spread: 70,
  startVelocity: 45,
  decay: 0.9,
  gravity: 0.1,
  drift: 0,
  ticks: 200,
  x: 0.5,
  y: 0.5,
  shapes: ['circle'],
  zIndex: 999999,
  colors: ['#000000', '#ffffff']
};

function launchConfetti(config = {}) {
  const finalConfig = { ...defaultConfettiConfig, ...config };
  confetti(finalConfig);
}

// Usage:
launchConfetti();
