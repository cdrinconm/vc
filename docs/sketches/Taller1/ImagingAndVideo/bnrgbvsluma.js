let img;
let imgOriginal;

function preload() {
    img = loadImage('/vc/docs/sketches/Taller1/ImagingAndVideo/WolvCar.png');
	imgOriginal = loadImage('/vc/docs/sketches/Taller1/ImagingAndVideo/WolvCar.png');
}

function setup() {
    createCanvas(720, 500);
    pixelDensity(1);
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

function draw() {
	imgOriginal.resize(360,500);
	image(imgOriginal, 0, 0);
	imgOriginal.loadPixels();
	for (var y = 0; y < imgOriginal.height; y++) {
		for (var x = 0; x < imgOriginal.width; x++) {
			var index = (x + y * imgOriginal.width) * 4;
			var r = imgOriginal.pixels[index + 0];
			var g = imgOriginal.pixels[index + 1];
			var b = imgOriginal.pixels[index + 2];
			var bw = (r + g + b) / 3;
			imgOriginal.pixels[index + 0] = bw;
			imgOriginal.pixels[index + 1] = bw;
			imgOriginal.pixels[index + 2] = bw;
		}
	}
	imgOriginal.updatePixels();	
}