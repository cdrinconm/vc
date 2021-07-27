# Arte Ascci - Hardware

## Planteamiento del Problema

Realizar la conversion de una imagen a arte ASCII por Hardware.

## Codigo & Resultados

### Imagen Wolverine Original y en arte ASCII con P5

> :Tabs
> > :Tab title=Original
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/ImagenesOriginales/RyukOriginal.js, width=720, height=500
>
> > :Tab title=Ascci
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/Taller3/ascci.js, width=720, height=500
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
> > >   img = loadImage("../sketches/Ryuk.jpg");
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

> :ToCPrevNext