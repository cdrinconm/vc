let img;

function preload() {
  img = loadImage('../sketches/Wolv.jpg');
}

function setup() {
  img.resize(720,500);
  createCanvas(720, 500);
  pixelDensity(1);
}

function draw() {
  image(img, 0, 0);
}