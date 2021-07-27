let theShader;
let img;
let slider;

function preload() {
    img = loadImage('/vc/docs/sketches/Taller3/mahakala.jpg');
    theShader = loadShader('/vc/docs/sketches/Taller3/shaders/shader.vert', '/vc/docs/sketches/Taller3/shaders/convolution.frag');
}

function setup() {
    slider = createSlider(6, 15, 6);
    slider.position(10, 480);
    slider.style('width', '700px');
    createCanvas(720, 500, WEBGL);
    noStroke();
    textureMode(NORMAL);
    shader(theShader);
    theShader.setUniform('texture', img);
    theShader.setUniform('texOffset', [1 / img.width, 1 / img.height]);
}

function draw() {
    theShader.setUniform('param', slider.value());
    background(0);
    beginShape()
    vertex(-width / 2, -height / 2, 0, 0, 0);
    vertex(width / 2, -height / 2, 0, 1, 0);
    vertex(width / 2, height / 2, 0, 1, 1);
    vertex(-width / 2, height / 2, 0, 0, 1);
    endShape(CLOSE)
}