# Conversion de imagen a ASCII Art - Software

## Planteamiento del Problema

Realizar la conversion de una imagen a arte ASCII.

## Antecedentes

El American Standard Code for Information Interchange, o ASCII, es un estándar usado en la mayoría de los computadores que contiene una pequeña cantidad de símbolos usados principalmente en el inglés. Aunque los símbolos de este alfabeto, a simpe vista no permite dibujar, en los años 60s algunos artistas decidieron usar estos símbolos para hacer dibujos. Estos dibujos, en su mayoría, usan una técnica similar a la del puntillismo en la cual símbolos que rellenan mas volumen son los puntos más “coloridos” del dibujo. Esto incluso se ha usado en videojuegos como Dwarf Fortress que usan el arte ASCII para mostrar su interfaz grafica.

## Codigo & Resultados

### Imagen Dodge Original y en arte ASCII con P5

> :Tabs
> > :Tab title=Original
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/Taller1/ImagenesOriginales/DodgeOriginal.js, width=720, height=500
>
> > :Tab title=Resultado
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/Taller1/ImagingAndVideo/ascii.js, width=720, height=500
>
> > :Tab title=Codigo
> >
> > ```md
> > > var img;
> > > var pixeles = 1;
> > > var line;
> > > let pospixel;
> > > let posy = pixeles;
> > > var caracteres = ['#', 'B', 'M', 'D', '*', 'm', 't', 'p', 'o', ';', ':', '-', '´', '.'];
> > > 
> > > function preload() {
> > >   img = loadImage('/vc/docs/sketches/Taller1/ImagingAndVideo/dodge.png');
> > > }
> > > 
> > > function setup() {
> > >   createCanvas(720, 500);
> > >   background(255);
> > >   textFont("monospace", pixeles);
> > >   img.resize(720/pixeles, 500/pixeles);
> > >   img.loadPixels();
> > >   for (var i = 0; i < img.height * 4; i++) {
> > >     line = '';
> > >     for (var j = 0; j < img.width * 4; j++) {
> > >       pospixel = j + i * img.width;
> > >       let x = img.pixels[pospixel] + img.pixels[pospixel + 1] + img.pixels[pospixel + 2];
> > >       for(var k = 1; k <= caracteres.length; k++){
> > >         if(x < 765 * k / caracteres.length){
> > >           line += caracteres[k-1];
> > >           break;
> > >         }
> > >        }
> > >       j += 1;
> > >     }
> > >     i += 3;
> > >     posy += pixeles;
> > >     text(line, 0, posy);
> > >   }
> > > }
> > ```

# Referencias

- [El Codigo Ascii](https://elcodigoascii.com.ar/)
- [Wikipedia - Ascii](https://es.wikipedia.org/wiki/ASCII)
- [Digital Guide IONOS](https://www.ionos.es/digitalguide/servidores/know-how/ascii-american-standard-code-for-information-interchange/)
- [Wikipedia - Arte Ascii](https://es.wikipedia.org/wiki/Arte_ASCII)

> :ToCPrevNext