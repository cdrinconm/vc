# Convolucion de Imagenes - Software

## Planteamiento del Problema

Aplicar una mascara de convolucion a una imagen usando una matriz "kernel".

## Antecedentes

La matriz de convolución es una matriz de datos que permite, entre otros, detectar bordes, añadir relieves, desenfocar o aumentar la nitidez de una imagen. Con este filtro, se pueden crear filtros personalizados.

### ¿Que es una matriz de convolución?

Es posible hacerse una idea sin usar las herramientas matemáticas que solo conocen unos pocos. Convolución es el tratamiento de una matriz por otra que se llama “kernel”.

El filtro matriz de convolución usa una primera matriz que es la imagen que será tratada. La imagen es una colección bidimensional de píxeles en coordenada rectágular. El kernel usado depende del efecto deseado.

Consideraremos solo las matrices 3x3, son las más usadas y son suficiente para los efectos deseados. Si todos los valores de un kernel se seleccionan a cero, el sistema la considerará como una matriz 3x3.

## Codigo & Resultados

### Imagen Wolverine Original y una Mascara de Convolucion con P5

> :Tabs
> > :Tab title=Original
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/ImagenesOriginales/WolvOriginal.js, width=720, height=500
>
> > :Tab title=Resultado
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/Taller1/ImagingAndVideo/convolution.js, width=720, height=500
>
> > :Tab title=Codigo
> >
> > ```md
> > > let img;
> > > let w = 80;
> > > const xstart = 0;
> > > const ystart = 0;
> > > const matrixsize = 3;
> > > 
> > > // It's possible to convolve the image with many different matrices to produce 
> > > //different effects. This is a high-pass filter; it accentuates the edges. 
> > > const matrix = [[-1, -1, -1],
> > >                 [-1,  9, -1],
> > >                 [-1, -1, -1]];
> > > 
> > > function preload() {
> > >   img = loadImage('/vc/docs/sketches/Taller1/ImagingAndVideo/Wolv.jpg');
> > > }
> > > 
> > > function setup() {
> > >   img.resize(720,500);
> > >   // We're only going to process a portion of the image so let's set the whole 
> > >   // image as the background first
> > >   img.loadPixels();
> > >   createCanvas(720, 500);
> > >   pixelDensity(1);
> > > }
> > > 
> > > function draw() {
> > >   loadPixels();
> > >   for (let x = xstart; x < img.width; x++) {
> > >     for (let y = ystart; y < img.height; y++) {
> > >       let c = convolution(x, y);
> > >       let loc = (x + y * img.width) * 4;
> > >       pixels[loc] = red(c);
> > >       pixels[loc + 1] = green(c);
> > >       pixels[loc + 2] = blue(c);
> > >       pixels[loc + 3] = alpha(c);
> > >     }
> > >   }
> > >   updatePixels();
> > > }
> > > 
> > > function convolution(x, y) {
> > >   let rtotal = 0.0;
> > >   let gtotal = 0.0;
> > >   let btotal = 0.0;
> > >   const offset = Math.floor(matrixsize / 2);
> > >   for (let i = 0; i < matrixsize; i++) {
> > >     for (let j = 0; j < matrixsize; j++) {
> > >       // What pixel are we testing
> > >       const xloc = (x + i - offset);
> > >       const yloc = (y + j - offset);
> > >       let loc = (xloc + img.width * yloc) * 4;
> > >       // Make sure we haven't walked off our image, we could do better here
> > >       loc = constrain(loc, 0, img.pixels.length - 1);
> > >       // Calculate the convolution, retrieve RGB values
> > >       rtotal += (img.pixels[loc]) * matrix[i][j];
> > >       gtotal += (img.pixels[loc + 1]) * matrix[i][j];
> > >       btotal += (img.pixels[loc + 2]) * matrix[i][j];
> > >     }
> > >   }
> > >   // Make sure RGB is within range
> > >   rtotal = constrain(rtotal, 0, 255);
> > >   gtotal = constrain(gtotal, 0, 255);
> > >   btotal = constrain(btotal, 0, 255);
> > >   // Return the resulting color
> > >   return color(rtotal, gtotal, btotal);
> > > }
> > ```

# Referencias

- [GIMP Docs](https://docs.gimp.org/2.6/es/plug-in-convmatrix.html)

> :ToCPrevNext