let fingers;

function preload() {
  fingers = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
  fingers.hide();
  texture = loadShader('/vc/docs/sketches/Taller3/shaders/shader.vert', '/vc/docs/sketches/Taller3/shaders/vacio.frag');
}

function setup() {
  createCanvas(720, 500, WEBGL);
  shader(texture);
}

function draw() {
  background(0);
  beginShape();
  vertex(-width / 2, -height / 2, 0, 0, 0);
  vertex(width / 2, -height / 2, 0, 1, 0);
  vertex(width / 2, height / 2, 0, 1, 1);
  vertex(-width / 2, height / 2, 0, 0, 1);
  endShape(CLOSE);
  texture.setUniform('texture', fingers);
}

function mousePressed() {
  fingers.loop();
  background(255);
}