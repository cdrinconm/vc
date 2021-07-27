let mosaic;
let img;
let symbol1;
let symbol2;
let symbol3;
let symbol4;
let symbol5;
let symbol6;
let symbol7;
let symbol8;
let symbol9;
let symbol10;
let symbol11;
let symbol12;
let symbol13;
let symbol14;
let debug;
let slider;

function preload() {
    img = loadImage('/vc/docs/sketches/Taller3/Ryuk.jpg');
    symbol1 = loadImage('/vc/docs/sketches/Taller3/ImagenesAscci/1.png');
    symbol2 = loadImage('/vc/docs/sketches/Taller3/ImagenesAscci/2.png');
    symbol3 = loadImage('/vc/docs/sketches/Taller3/ImagenesAscci/3.png');
    symbol4 = loadImage('/vc/docs/sketches/Taller3/ImagenesAscci/4.png');
    symbol5 = loadImage('/vc/docs/sketches/Taller3/ImagenesAscci/5.png');
    symbol6 = loadImage('/vc/docs/sketches/Taller3/ImagenesAscci/6.png');
    symbol7 = loadImage('/vc/docs/sketches/Taller3/ImagenesAscci/7.png');
    symbol8 = loadImage('/vc/docs/sketches/Taller3/ImagenesAscci/8.png');
    symbol9 = loadImage('/vc/docs/sketches/Taller3/ImagenesAscci/9.png');
    symbol10 = loadImage('/vc/docs/sketches/Taller3/ImagenesAscci/10.png');
    symbol11 = loadImage('/vc/docs/sketches/Taller3/ImagenesAscci/11.png');
    symbol12 = loadImage('/vc/docs/sketches/Taller3/ImagenesAscci/12.png');
    symbol13 = loadImage('/vc/docs/sketches/Taller3/ImagenesAscci/13.png');
    symbol14 = loadImage('/vc/docs/sketches/Taller3/ImagenesAscci/14.png');
    mosaic = loadShader('/vc/docs/sketches/Taller3/shaders/shader.vert', '/vc/docs/sketches/Taller3/shaders/ascci.frag');
}

function setup() {
    slider = createSlider(50, 200, 50);
    slider.position(10, 480);
    slider.style('width', '700px');
    createCanvas(720, 500, WEBGL);
    textureMode(NORMAL);
    noStroke();
    shader(mosaic);
    mosaic.setUniform('image', img);
    mosaic.setUniform('symbol1', symbol1);
    mosaic.setUniform('symbol2', symbol2);
    mosaic.setUniform('symbol3', symbol3);
    mosaic.setUniform('symbol4', symbol4);
    mosaic.setUniform('symbol5', symbol5);
    mosaic.setUniform('symbol6', symbol6);
    mosaic.setUniform('symbol7', symbol7);
    mosaic.setUniform('symbol8', symbol8);
    mosaic.setUniform('symbol9', symbol9);
    mosaic.setUniform('symbol10', symbol10);
    mosaic.setUniform('symbol11', symbol11);
    mosaic.setUniform('symbol12', symbol12);
    mosaic.setUniform('symbol13', symbol13);
    mosaic.setUniform('symbol14', symbol14);
    debug = true;
    mosaic.setUniform('debug', debug);
}

function draw() {
    mosaic.setUniform('resolution', slider.value());
    background(33);
    cover(true);
}

function cover(texture = false) {
    beginShape();
    if (texture) {
        vertex(-width / 2, -height / 2, 0, 0, 0);
        vertex(width / 2, -height / 2, 0, 1, 0);
        vertex(width / 2, height / 2, 0, 1, 1);
        vertex(-width / 2, height / 2, 0, 0, 1);
    } else {
        vertex(-width / 2, -height / 2, 0);
        vertex(width / 2, -height / 2, 0);
        vertex(width / 2, height / 2, 0);
        vertex(-width / 2, height / 2, 0);
    }
    endShape(CLOSE);
}

function keyPressed() {
    if (key === 'd') {
        debug = !debug;
        mosaic.setUniform('debug', debug);
    }
}