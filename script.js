const canvas = document.getElementById('fireworks');
const bgm = document.getElementById('bgm');

const fireworks = new Fireworks.default(canvas, {
    hue: { min: 0, max: 360 },
    delay: { min: 15, max: 30 },
    speed: 3,
    acceleration: 1.02,
    friction: 0.95,
    gravity: 1.2,
    particles: 100,
    trace: 3,
    explosion: 6,
    autoresize: true,
    brightness: { min: 60, max: 90 },
    sound: { enabled: false },
    boundaries: { x: 0, y: 0, width: canvas.width, height: canvas.height / 1.2 }
});

bgm.play();
fireworks.start();
