var img;
var promediorojo;
var promedioazul;
var promedioverde;
var rgb;
var pixeles = 10;
var nomimg = [
  "0_0_0", //0
  "0_0_85",
  "0_85_0",
  "0_85_85",
  "85_0_0",
  "85_0_85", //5
  "85_85_0",
  "0_0_170",
  "0_170_0",
  "0_170_170",
  "170_0_0", //10
  "170_0_170",
  "170_170_0",
  "85_85_85",
  "85_85_170",
  "85_170_85", //15
  "85_170_170",
  "170_85_85",
  "170_85_170",
  "170_170_85",
  "170_170_170", //20
  "170_85_0",
  "170_0_85",
  "85_170_0",
  "85_0_170",
  "0_170_85", //25
  "0_85_170"
];

function preload() { 
  img = loadImage("../sketches/Ryuk.jpg");
}

function setup() {
  noStroke();
  img.resize(720, 500);
  createCanvas(720, 500);
  img.loadPixels();
  for (var i = 0; i < img.width; i++) {
    for (var j = 0; j < img.height; j++) {
      promediorojo = 0;
      promedioazul = 0;
      promedioverde = 0;
      datospixeles = img.get(i, j, pixeles, pixeles);
      for (var k = 0; k < datospixeles.width; k++) {
        for (var l = 0; l < datospixeles.height; l++) {
          rgb = datospixeles.get(k,l);
          promediorojo += rgb[0];
          promedioazul += rgb[1];
          promedioverde += rgb[2];
        }
      }      
      promediorojo /= (pixeles * pixeles);
      promedioazul /= (pixeles * pixeles);
      promedioverde /= (pixeles * pixeles);
      buscarImagen(promediorojo,promedioazul,promedioverde, i, j, pixeles);
      j += pixeles-1;
    }
    i += pixeles-1;
  }
}

function cargarImagen(nombre, x, y, dim){
  loadImage("../sketches/Colores/" + nombre + ".jpg", img => {
    image(img, x, y, dim, dim);
  });
}

function buscarImagen(r, g, b, x, y, pixeles){
  switch(true){
    case r >= 170:
      switch(true){
        case g >= 170:
          switch(true){
            case b >= 170:
              cargarImagen(nomimg[20], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(nomimg[19], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(nomimg[12], x, y, pixeles);
              break;
          }
          break;
        case g >= 85:
          switch(true){
            case b >= 170:
              cargarImagen(nomimg[18], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(nomimg[17], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(nomimg[21], x, y, pixeles);
              break;
          }
          break;
        case g >= 0:
          switch(true){
            case b >= 170:
              cargarImagen(nomimg[11], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(nomimg[22], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(nomimg[10], x, y, pixeles);
              break;
          }
          break;
      }
      break;
    case r >= 85:
      switch(true){
        case g >= 170:
          switch(true){
            case b >= 170:
              cargarImagen(nomimg[16], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(nomimg[15], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(nomimg[23], x, y, pixeles);
              break;
          }
          break;
        case g >= 85:
          switch(true){
            case b >= 170:
              cargarImagen(nomimg[14], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(nomimg[13], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(nomimg[6], x, y, pixeles);
              break;
          }
          break;
        case g >= 0:
          switch(true){
            case b >= 170:
              cargarImagen(nomimg[24], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(nomimg[5], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(nomimg[4], x, y, pixeles);
              break;
          }
          break;
      }
      break;
    case r >= 0:
      switch(true){
        case g >= 170:
          switch(true){
            case b >= 170:
              cargarImagen(nomimg[9], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(nomimg[25], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(nomimg[8], x, y, pixeles);
              break;
          }
          break;
        case g >= 85:
          switch(true){
            case b >= 170:
              cargarImagen(nomimg[26], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(nomimg[3], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(nomimg[2], x, y, pixeles);
              break;
          }
          break;
        case g >= 0:
          switch(true){
            case b >= 170:
              cargarImagen(nomimg[7], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(nomimg[1], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(nomimg[0], x, y, pixeles);
              break;
          }
          break;
      }
      break;
  }
}