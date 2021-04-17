let img;
let imgOriginal;

function preload() {
	img = loadImage('../sketches/WolvCar.png');
	imgOriginal = loadImage('../sketches/WolvCar.png');
}

function setup() {
	createCanvas(720, 500);
	pixelDensity(1);
	imgOriginal.resize(360,500);
	image(imgOriginal, 0, 0);
}

function draw() {
	img.resize(360,500);
	image(img, 360, 0);
	img.loadPixels();
	for (var y = 0; y < img.height; y++) {
		for (var x = 0; x < img.width; x++) {
			var index = (x + y * img.width) * 4;
			var r = img.pixels[index + 0];
			var g = img.pixels[index + 1];
			var b = img.pixels[index + 2];
			var bw = (r + g + b) / 3;
			img.pixels[index + 0] = bw;
			img.pixels[index + 1] = bw;
			img.pixels[index + 2] = bw;
		}
	}
	img.updatePixels();	
}