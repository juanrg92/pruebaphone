function setup() {
  createCanvas(400, 400, WEBGL);
  createEasyCam();
  document.oncontextmenu = ()=>false;
}

function draw() {
  background(0);
  lights();
  box(100);
}