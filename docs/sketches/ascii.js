var img;
var pixeles = 1;
var line;
let pospixel;
let posy = pixeles;
var caracteres = ['#', 'B', 'M', 'D', '*', 'm', 't', 'p', 'o', ';', ':', '-', '´', '.'];
//var caracteres = ['#', 'o', '.'];

function preload() {
  img = loadImage("../sketches/dodge.png");
}

function setup() {
  createCanvas(720, 500);
  background(255);
  textFont("monospace", pixeles);
  img.resize(720/pixeles, 500/pixeles);
  //img.resize(720, 500);
  img.loadPixels();
  for (var i = 0; i < img.height * 4; i++) {
    line = '';
    for (var j = 0; j < img.width * 4; j++) {
      pospixel = j + i * img.width;
      let x = img.pixels[pospixel] + img.pixels[pospixel + 1] + img.pixels[pospixel + 2];
      for(var k = 1; k <= caracteres.length; k++){
        if(x < 765 * k / caracteres.length){
          line += caracteres[k-1];
          break;
        }
      }
      j += 1;
    }
    i += 3;
    posy += pixeles;
    text(line, 0, posy);
  }
}