let img;
var r = 30;
var x, y, u, v, i, j;
var texto = "thequickbrownfoxjumpsoverthelazydog";

function preload() {
  img = loadImage("/vc/docs/sketches/aguila.jpeg",);
}

function setup() {
  createCanvas(500, 500);
  frameRate(30);
}


function draw() {
  background(255);
  //r = mouseX / 4 + 2 < 3 ? 3 : mouseX / 4 + 2;
  promedioArea(img);
  image(img, 0, height - img.height / 3, img.width / 3, img.height / 3);
}

function promedioArea(img) {
  var n = img.width / r;
  var m = img.height / r;
  var acumR = 0, acumG = 0, acumB = 0;
  var C = [];
  for (u = 0; u < n; u++) {
    C[u] = [];
    for (v = 0; v < m; v++) {
      C[u][v] = undefined;
    }
  }
  for (v = 0; v < m; v++) {
    for (u = 0; u < n; u++) {
      acumR = acumG = acumB = 0;
      for (i = 0; i < r; i++) {
        for (j = 0; j < r; j++) {
          x = i + r * u;
          y = j + r * v;
          acumR += red(img.get(x, y));
          acumG += green(img.get(x, y));
          acumB += blue(img.get(x, y));
        }
      }
      var gray = ((acumR + acumG + acumB) / 3) / (r * r);
      C[u][v] = color(acumR / (r * r), acumG / (r * r), acumB / (r * r));
      fill(C[u][v]);
      var radius = gray / 18 + mouseX / 5;
      text(texto.charAt(random(texto.length)), r * u + 50, r * v + 50);
    }
  }
  return C;
}
