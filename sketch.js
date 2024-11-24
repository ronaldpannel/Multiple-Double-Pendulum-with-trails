let pendulums = [];
let g = 1;
let num = 4;

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < num; i++) {
    let angle1 = Math.PI / 4 + i * 0.001;
    let angle2 = Math.PI;

    pendulums[i] = new Pendulum(angle1, angle2, 100, 100);
  }
}

function draw() {
  background(0, 10);;
  for (let i = 0; i < pendulums.length; i++) {
    pendulums[i].draw();
    pendulums[i].update();
  }
}

function windowResized() {
  resizeCanvas(600, 600);
}
