let fingers;
let texture;
let slider;

function preload() {
  fingers = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
  fingers.hide();
  texture = loadShader('/vc/docs/sketches/Taller3/shaders/shader.vert', '/vc/docs/sketches/Taller3/shaders/convolution.frag');
}

function setup() {
  slider = createSlider(3, 10, 3);
  slider.position(10, 480);
  slider.style('width', '700px');
  createCanvas(720, 500, WEBGL);
  shader(texture);
  texture.setUniform('texture', fingers);
  texture.setUniform('texOffset', [1 / fingers.width, 1 / fingers.height]);
  frameRate(120);
}

function draw() {
  texture.setUniform('param', slider.value());
  background(0);
  beginShape();
  vertex(-width / 2, -height / 2, 0, 0, 0);
  vertex(width / 2, -height / 2, 0, 1, 0);
  vertex(width / 2, height / 2, 0, 1, 1);
  vertex(-width / 2, height / 2, 0, 0, 1);
  endShape(CLOSE);
}

function mousePressed() {
  fingers.loop();
  background(255);
}