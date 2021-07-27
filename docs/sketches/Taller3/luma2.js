let texture;
let img;
let form1 = false;

function preload() {
    img = loadImage('/vc/docs/sketches/Taller3/Wolverine.png');
    texture = loadShader('/vc/docs/sketches/Taller3/shaders/shader.vert', '/vc/docs/sketches/Taller3/shaders/luma.frag');
}

function setup() {
    createCanvas(720, 500, WEBGL);
    shader(texture);
    texture.setUniform('texture', img);
    texture.setUniform('form', form1);
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