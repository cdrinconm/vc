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
    symbol1 = loadImage('/vc/docs/sketches/ImagenesMosaico/0_0_0.jpg');
    symbol2 = loadImage('/vc/docs/sketches/ImagenesMosaico/0_0_85.jpg');
    symbol3 = loadImage('/vc/docs/sketches/ImagenesMosaico/0_0_170.jpg');
    symbol4 = loadImage('/vc/docs/sketches/ImagenesMosaico/0_85_0.jpg');
    symbol5 = loadImage('/vc/docs/sketches/ImagenesMosaico/0_85_85.jpg');
    symbol6 = loadImage('/vc/docs/sketches/ImagenesMosaico/0_85_170.jpg');
    symbol7 = loadImage('/vc/docs/sketches/ImagenesMosaico/0_170_0.jpg');
    symbol8 = loadImage('/vc/docs/sketches/ImagenesMosaico/0_170_85.jpg');
    symbol9 = loadImage('/vc/docs/sketches/ImagenesMosaico/0_170_170.jpg');
    symbol10 = loadImage('/vc/docs/sketches/ImagenesMosaico/85_0_0.jpg');
    symbol11 = loadImage('/vc/docs/sketches/ImagenesMosaico/85_0_85.jpg');
    symbol12 = loadImage('/vc/docs/sketches/ImagenesMosaico/85_0_170.jpg');
    symbol13 = loadImage('/vc/docs/sketches/ImagenesMosaico/85_85_0.jpg');
    symbol14 = loadImage('/vc/docs/sketches/ImagenesMosaico/85_85_85.jpg');
    symbol15 = loadImage('/vc/docs/sketches/ImagenesMosaico/85_85_170.jpg');
    symbol16 = loadImage('/vc/docs/sketches/ImagenesMosaico/85_170_0.jpg');
    symbol17 = loadImage('/vc/docs/sketches/ImagenesMosaico/85_170_85.jpg');
    symbol18 = loadImage('/vc/docs/sketches/ImagenesMosaico/85_170_170.jpg');
    symbol19 = loadImage('/vc/docs/sketches/ImagenesMosaico/170_0_0.jpg');
    symbol20 = loadImage('/vc/docs/sketches/ImagenesMosaico/170_0_85.jpg');
    symbol21 = loadImage('/vc/docs/sketches/ImagenesMosaico/170_0_170.jpg');
    symbol22 = loadImage('/vc/docs/sketches/ImagenesMosaico/170_85_0.jpg');
    symbol23 = loadImage('/vc/docs/sketches/ImagenesMosaico/170_85_85.jpg');
    symbol24 = loadImage('/vc/docs/sketches/ImagenesMosaico/170_85_170.jpg');
    symbol25 = loadImage('/vc/docs/sketches/ImagenesMosaico/170_170_0.jpg');
    symbol26 = loadImage('/vc/docs/sketches/ImagenesMosaico/170_170_85.jpg');
    symbol27 = loadImage('/vc/docs/sketches/ImagenesMosaico/170_170_170.jpg');
    mosaic = loadShader('/vc/docs/sketches/Taller3/shaders/shader.vert', '/vc/docs/sketches/Taller3/shaders/mosaico.frag');
}

function setup() {
    slider = createSlider(10, 200, 30);
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
    mosaic.setUniform('symbol15', symbol15);
    mosaic.setUniform('symbol16', symbol16);
    mosaic.setUniform('symbol17', symbol17);
    mosaic.setUniform('symbol18', symbol18);
    mosaic.setUniform('symbol19', symbol19);
    mosaic.setUniform('symbol20', symbol20);
    mosaic.setUniform('symbol21', symbol21);
    mosaic.setUniform('symbol22', symbol22);
    mosaic.setUniform('symbol23', symbol23);
    mosaic.setUniform('symbol24', symbol24);
    mosaic.setUniform('symbol25', symbol25);
    mosaic.setUniform('symbol26', symbol26);
    mosaic.setUniform('symbol27', symbol27);
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