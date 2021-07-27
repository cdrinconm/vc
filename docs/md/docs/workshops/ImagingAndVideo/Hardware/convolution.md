# Convolucion de Imagenes - Hardware

## Planteamiento del Problema

Aplicar una mascara de convolucion a una imagen usando una matriz "kernel" por Hardware.

## Codigo & Resultados

### Imagen Mahakala Original y una Mascara de Convolucion con P5

> :Tabs
> > :Tab title=Original
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/ImagenesOriginales/MahakalaOriginal.js, width=720, height=500
>
> > :Tab title=Resultado
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/Taller3/convolucion.js, width=720, height=500
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
> > >   img = loadImage('../sketches/Wolv.jpg');
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

### Video Dedos Original y una Mascara de Convolucion con P5

Hacer click para correr el video.

> :Tabs
> > :Tab title=Original
> > 
> > > :P5 sketch=/docs/sketches/ImagenesOriginales/VideoOriginal.js, width=720, height=500
>
> > :Tab title=Resultado
> > 
> > > :P5 sketch=/docs/sketches/Taller3/ConvolucionVideo.js, width=720, height=500
>
> > :Tab title=Codigo
> >
> > ```md
> > > let fingers;
> > > 
> > > function setup() {
> > >   createCanvas(780, 240);
> > >   fingers = createVideo(['/vc/docs/sketches/fingers.mov', 
> > >   '/vc/docs/sketches/fingers.webm']);
> > >   fingers.hide();
> > > }
> > > 
> > > function draw() {
> > >   image(fingers, 460, 0);
> > >   filter(GRAY);
> > >   image(fingers, 0, 0);
> > > }
> > > 
> > > function mousePressed() {
> > >   fingers.loop();
> > >   background(255);
> > > }
> > ```

> :ToCPrevNext