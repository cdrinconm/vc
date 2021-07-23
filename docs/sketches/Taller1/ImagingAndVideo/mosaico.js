var img;
var promediorojo;
var promedioazul;
var promedioverde;
var rgb;
var pixeles = 5;
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
var imagenes = [];

function preload() {
  img = loadImage('/vc/docs/sketches/Taller1/ImagingAndVideo/Ryuk.jpg');
  for (var i = 0; i < nomimg.length; i++) {
    imagenes.push(loadImage("/vc/docs/sketches/Taller1/ImagenesMosaico/" + nomimg[i] + ".jpg"));
  }
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
      for (var k = 0; k < pixeles; k++) {
        for (var l = 0; l < pixeles; l++) {
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
  image(nombre, x, y, dim, dim);
}

function buscarImagen(r, g, b, x, y, pixeles){
  switch(true){
    case r >= 170:
      switch(true){
        case g >= 170:
          switch(true){
            case b >= 170:
              cargarImagen(imagenes[20], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(imagenes[19], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(imagenes[12], x, y, pixeles);
              break;
          }
          break;
        case g >= 85:
          switch(true){
            case b >= 170:
              cargarImagen(imagenes[18], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(imagenes[17], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(imagenes[21], x, y, pixeles);
              break;
          }
          break;
        case g >= 0:
          switch(true){
            case b >= 170:
              cargarImagen(imagenes[11], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(imagenes[22], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(imagenes[10], x, y, pixeles);
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
              cargarImagen(imagenes[16], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(imagenes[15], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(imagenes[23], x, y, pixeles);
              break;
          }
          break;
        case g >= 85:
          switch(true){
            case b >= 170:
              cargarImagen(imagenes[14], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(imagenes[13], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(imagenes[6], x, y, pixeles);
              break;
          }
          break;
        case g >= 0:
          switch(true){
            case b >= 170:
              cargarImagen(imagenes[24], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(imagenes[5], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(imagenes[4], x, y, pixeles);
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
              cargarImagen(imagenes[9], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(imagenes[25], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(imagenes[8], x, y, pixeles);
              break;
          }
          break;
        case g >= 85:
          switch(true){
            case b >= 170:
              cargarImagen(imagenes[26], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(imagenes[3], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(imagenes[2], x, y, pixeles);
              break;
          }
          break;
        case g >= 0:
          switch(true){
            case b >= 170:
              cargarImagen(imagenes[7], x, y, pixeles);
              break;
            case b >= 85:
              cargarImagen(imagenes[1], x, y, pixeles);
              break;
            case b >= 0:
              cargarImagen(imagenes[0], x, y, pixeles);
              break;
          }
          break;
      }
      break;
  }
}