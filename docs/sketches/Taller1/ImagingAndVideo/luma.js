let img;
let imgOriginal;

function preload() {
    img = loadImage('/vc/docs/sketches/Taller1/ImagingAndVideo/WolvCar.png');
	imgOriginal = loadImage('/vc/docs/sketches/Taller1/ImagingAndVideo/WolvCar.png');
}

function setup() {
    createCanvas(720, 500);
    pixelDensity(1);
    imgOriginal.resize(360,500);
	image(imgOriginal, 0, 0);
    img.resize(360,500);
    img.loadPixels();
    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            var index = (x + y * img.width) * 4;
            var r = img.pixels[index + 0];
            var g = img.pixels[index + 1];
            var b = img.pixels[index + 2];
            var luma = r * .299 + g * .587 + b * .0114;
            img.pixels[index + 0] = luma;
            img.pixels[index + 1] = luma;
            img.pixels[index + 2] = luma;
        }
    }
    img.updatePixels();
    image(img, 360, 0);
}