# Foto mosaico - Software

## Planteamiento del Problema

Realizar la conversion de una imagen a un foto mosaico.

## Antecedentes

Un fotomosaico es una imagen usualmente una fotografía que ha sido dividida en secciones rectangulares (usualmente del mismo tamaño), tal como es compuesto un mosaico tradicional, con la característica de que cada elemento del mosaico es reemplazado por otra fotografía con colores promedios apropiados al elemento de la imagen original. Cuando es vista en detalle, los píxeles individuales se ven como la imagen principal, sin embargo al verla como un todo, es posible apreciar que la imagen está compuesta por cientos de miles de imágenes.

La fascinación por los mosaicos no es nada nuevo. Y es que el mosaico es un arte conocido ya desde la Edad Antigua. A partir de pequeñas piedras coloridas o de trocitos de cristal se compone una imagen. Así surgieron ya las famosas obras de arte en los palacios y villas de la Edad Antigua. Aún hoy, la idea que tenemos de los mosaicos está marcada por estas imágenes de obras antiguas.

Esta técnica cultural se ha mantenido a lo largo de siglos y fue, como consecuencia, de distinto gran significado para la configuración óptica de construcciones representativas. En los tiempos del Renacimiento y del Clasicismo aumentó su importancia. En estas épocas, estaba de moda reproducir escenas de la Antigüedad Clásica en formato de mosaico. Sin embargo, hoy en día pueden verse aún mosaicos en cantidad de construcciones representativas de prácticamente todas las épocas.

El mosaico también se relaciona con el Puntillismo, un tipo de estilo de pintura polémico en su época. Su florecimiento tuvo lugar en el transcurso del siglo 19 al 20. El Puntillismo está presente en la historia del arte actual, sobre todo, gracias a las pinturas de Paul Signac, Henri Edmond Delacroix o Georges Seurat.

## Codigo & Resultados

### Imagen Ryuk Original en mosaico con P5

> :Tabs
> > :Tab title=Resultado
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/Taller1/ImagingAndVideo/mosaico.js, width=720, height=500
>
> > :Tab title=Original
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/ImagenesOriginales/RyukOriginal.js, width=720, height=500
>
> > :Tab title=Codigo
> >
> > ```md
> > > var img;
> > > var promediorojo;
> > > var promedioazul;
> > > var promedioverde;
> > > var rgb;
> > > var pixeles = 5;
> > > var nomimg = [
> > >   "0_0_0", //0
> > >   "0_0_85",
> > >   "0_85_0",
> > >   "0_85_85",
> > >   "85_0_0",
> > >   "85_0_85", //5
> > >   "85_85_0",
> > >   "0_0_170",
> > >   "0_170_0",
> > >   "0_170_170",
> > >   "170_0_0", //10
> > >   "170_0_170",
> > >   "170_170_0",
> > >   "85_85_85",
> > >   "85_85_170",
> > >   "85_170_85", //15
> > >   "85_170_170",
> > >   "170_85_85",
> > >   "170_85_170",
> > >   "170_170_85",
> > >   "170_170_170", //20
> > >   "170_85_0",
> > >   "170_0_85",
> > >   "85_170_0",
> > >   "85_0_170",
> > >   "0_170_85", //25
> > >   "0_85_170"
> > > ];
> > > var imagenes = [];
> > > 
> > > function preload() {
> > >   img = loadImage('/vc/docs/sketches/Taller1/ImagingAndVideo/Ryuk.jpg');
> > >   for (var i = 0; i < nomimg.length; i++) {
> > >       imagenes.push(loadImage("/vc/docs/sketches/Taller1/ImagenesMosaico/" + nomimg[i] + ".jpg"));
> > >   }
> > > }
> > > 
> > > function setup() {
> > >   noStroke();
> > >   img.resize(720, 500);
> > >   createCanvas(720, 500);
> > >   img.loadPixels();
> > >   for (var i = 0; i < img.width; i++) {
> > >     for (var j = 0; j < img.height; j++) {
> > >       promediorojo = 0;
> > >       promedioazul = 0;
> > >       promedioverde = 0;
> > >       datospixeles = img.get(i, j, pixeles, pixeles);
> > >       for (var k = 0; k < pixeles; k++) {
> > >         for (var l = 0; l < pixeles; l++) {
> > >           rgb = datospixeles.get(k,l);
> > >           promediorojo += rgb[0];
> > >           promedioazul += rgb[1];
> > >           promedioverde += rgb[2];
> > >         }
> > >       }      
> > >       promediorojo /= (pixeles * pixeles);
> > >       promedioazul /= (pixeles * pixeles);
> > >       promedioverde /= (pixeles * pixeles);
> > >       buscarImagen(promediorojo,promedioazul,promedioverde, i, j, pixeles);
> > >       j += pixeles-1;
> > >     }
> > >     i += pixeles-1;
> > >   }
> > > }
> > > 
> > > function cargarImagen(nombre, x, y, dim){
> > >   image(nombre, x, y, dim, dim);
> > > }
> > > 
> > > function buscarImagen(r, g, b, x, y, pixeles){
> > >   switch(true){
> > >     case r >= 170:
> > >       switch(true){
> > >         case g >= 170:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[20], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[19], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[12], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >         case g >= 85:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[18], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[17], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[21], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >         case g >= 0:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[11], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[22], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[10], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >       }
> > >       break;
> > >     case r >= 85:
> > >       switch(true){
> > >         case g >= 170:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[16], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[15], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[23], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >         case g >= 85:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[14], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[13], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[6], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >         case g >= 0:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[24], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[5], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[4], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >       }
> > >       break;
> > >     case r >= 0:
> > >       switch(true){
> > >         case g >= 170:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[9], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[25], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[8], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >         case g >= 85:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[26], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[3], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[2], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >         case g >= 0:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[7], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[1], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[0], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >       }
> > >       break;
> > >   }
> > > }
> > ```

### Imagen Ryuk en mosaico con efecto de llenado de imagenes

Esperar hasta que cargue la imagen, y visualizar como cada pequeña imagen se va añadiendo y va llenado la imagen original.

> :Tabs
> > :Tab title=Resultado
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/Taller1/ImagingAndVideo/mosaicollenado.js, width=720, height=500
>
> > :Tab title=Codigo
> >
> > ```md
> > > var img;
> > > var promediorojo;
> > > var promedioazul;
> > > var promedioverde;
> > > var rgb;
> > > var pixeles = 5;
> > > var nomimg = [
> > >   "0_0_0", //0
> > >   "0_0_85",
> > >   "0_85_0",
> > >   "0_85_85",
> > >   "85_0_0",
> > >   "85_0_85", //5
> > >   "85_85_0",
> > >   "0_0_170",
> > >   "0_170_0",
> > >   "0_170_170",
> > >   "170_0_0", //10
> > >   "170_0_170",
> > >   "170_170_0",
> > >   "85_85_85",
> > >   "85_85_170",
> > >   "85_170_85", //15
> > >   "85_170_170",
> > >   "170_85_85",
> > >   "170_85_170",
> > >   "170_170_85",
> > >   "170_170_170", //20
> > >   "170_85_0",
> > >   "170_0_85",
> > >   "85_170_0",
> > >   "85_0_170",
> > >   "0_170_85", //25
> > >   "0_85_170"
> > > ];
> > > 
> > > function preload() {
> > >   img = loadImage('/vc/docs/sketches/Taller1/ImagingAndVideo/Ryuk.jpg');
> > > }
> > > 
> > > function setup() {
> > >   noStroke();
> > >   img.resize(720, 500);
> > >   createCanvas(720, 500);
> > >   img.loadPixels();
> > >   for (var i = 0; i < img.width; i++) {
> > >     for (var j = 0; j < img.height; j++) {
> > >       promediorojo = 0;
> > >       promedioazul = 0;
> > >       promedioverde = 0;
> > >       datospixeles = img.get(i, j, pixeles, pixeles);
> > >       for (var k = 0; k < pixeles; k++) {
> > >         for (var l = 0; l < pixeles; l++) {
> > >           rgb = datospixeles.get(k,l);
> > >           promediorojo += rgb[0];
> > >           promedioazul += rgb[1];
> > >           promedioverde += rgb[2];
> > >         }
> > >       }      
> > >       promediorojo /= (pixeles * pixeles);
> > >       promedioazul /= (pixeles * pixeles);
> > >       promedioverde /= (pixeles * pixeles);
> > >       buscarImagen(promediorojo,promedioazul,promedioverde, i, j, pixeles);
> > >       j += pixeles-1;
> > >     }
> > >     i += pixeles-1;
> > >   }
> > > }
> > > 
> > > function cargarImagen(nombre, x, y, dim){
> > >   loadImage("../sketches/Colores/" + nombre + ".jpg", img => {
> > >     image(img, x, y, dim, dim);
> > >   });
> > > }
> > > 
> > > function buscarImagen(r, g, b, x, y, pixeles){
> > >   switch(true){
> > >     case r >= 170:
> > >       switch(true){
> > >         case g >= 170:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[20], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[19], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[12], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >         case g >= 85:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[18], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[17], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[21], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >         case g >= 0:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[11], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[22], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[10], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >       }
> > >       break;
> > >     case r >= 85:
> > >       switch(true){
> > >         case g >= 170:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[16], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[15], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[23], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >         case g >= 85:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[14], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[13], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[6], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >         case g >= 0:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[24], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[5], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[4], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >       }
> > >       break;
> > >     case r >= 0:
> > >       switch(true){
> > >         case g >= 170:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[9], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[25], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[8], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >         case g >= 85:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[26], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[3], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[2], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >         case g >= 0:
> > >           switch(true){
> > >             case b >= 170:
> > >               cargarImagen(imagenes[7], x, y, pixeles);
> > >               break;
> > >             case b >= 85:
> > >               cargarImagen(imagenes[1], x, y, pixeles);
> > >               break;
> > >             case b >= 0:
> > >               cargarImagen(imagenes[0], x, y, pixeles);
> > >               break;
> > >           }
> > >           break;
> > >       }
> > >       break;
> > >   }
> > > }
> > ```

# Referencias

- [Wikipedia - Fotomosaico](https://es.wikipedia.org/wiki/Fotomosaico)
- [Mosaico de Fotos](https://www.mosaico-de-fotos.es/como-funciona/que-es-un-foto-mosaico/)
- [Unifotografia](https://unifotografia.com/2020/04/10/que-es-el-fotomosaico/)

> :ToCPrevNext