let texture;
let img;

function preload() {
    img = loadImage('/vc/docs/sketches/Taller3/mahakala.jpg');
    texture = loadShader('/vc/docs/sketches/Taller3/shaders/shader.vert', '/vc/docs/sketches/Taller3/shaders/rgb.frag');
}

function setup() {
    createCanvas(720, 500, WEBGL);
    shader(texture);
    texture.setUniform('texture', img);
}

function draw() {
    background(0);
    beginShape();
    vertex(-width / 2, -height / 2, 0, 0, 0);
    vertex(width / 2, -height / 2, 0, 1, 0);
    vertex(width / 2, height / 2, 0, 1, 1);
    vertex(-width / 2, height / 2, 0, 0, 1);
    endShape(CLOSE);
}