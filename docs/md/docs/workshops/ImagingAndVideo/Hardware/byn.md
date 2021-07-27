# Conversión a Escala de Grises - Hardware

## Planteamiento del Problema

Convertir una imagen a color a escala de grises usando el promedio RGB y Luma por Hardware.

## Codigo & Resultados

### Imagen Mahakal Original y en Escala de grises usando promedio RGB con P5

> :Tabs
> > :Tab title=Original
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/ImagenesOriginales/MahakalaOriginal.js, width=720, height=500
>
> > :Tab title=Resultado
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/Taller3/rgb.js, width=720, height=500
>
> > :Tab title=Codigo
> >
> > ```md
> > > let img;
> > > let imgOriginal;
> > > 
> > > function preload() {
> > > 	img = loadImage('../sketches/Taller1/ImagingAndVideo/WolvCar.png');
> > > 	imgOriginal = loadImage('../sketches/Taller1/ImagingAndVideo/WolvCar.png');
> > > }
> > > 
> > > function setup() {
> > > 	createCanvas(780, 500);
> > > 	pixelDensity(1);
> > > 	imgOriginal.resize(390,500);
> > > 	image(imgOriginal, 0, 0);
> > > }
> > > 
> > > function draw() {
> > > 	img.resize(390,500);
> > > 	image(img, 390, 0);
> > > 	img.loadPixels();
> > > 	for (var y = 0; y < img.height; y++) {
> > > 		for (var x = 0; x < img.width; x++) {
> > > 			var index = (x + y * img.width) * 4;
> > > 			var r = img.pixels[index + 0];
> > > 			var g = img.pixels[index + 1];
> > > 			var b = img.pixels[index + 2];
> > > 			var bw = (r + g + b) / 3;
> > > 			img.pixels[index + 0] = bw;
> > > 			img.pixels[index + 1] = bw;
> > > 			img.pixels[index + 2] = bw;
> > > 		}
> > > 	}
> > > 	img.updatePixels();	
> > > }
> > ```

### Imagen Mahakala Original y en Escala de grises usando Luma con P5

> :Tabs
> > :Tab title=Formula 1
> > 
> > > :Formula align=center
> > > ```
> > > Y = 0.299 * R + 0.587 * V + 0.114 * A
> > > ```
>
> > :Tab title=Formula 2
> > 
> > > :Formula align=center
> > > ```
> > > Y = 0.2126 * R + 0.7152 * V + 0.0722 * A
> > > ```
>

El resultado es el siguiente:

> :Tabs
> > :Tab title=Original
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/ImagenesOriginales/WolverineOriginal.js, width=720, height=500
>
> > :Tab title=Resultado Formula 1
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/Taller3/luma.js, width=720, height=500
>
> > :Tab title=Resultado Formula 2
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/Taller3/luma2.js, width=720, height=500
>
> > :Tab title=Codigo
> >
> > ```md
> > > let img;
> > > let imgOriginal;
> > > 
> > > function preload() {
> > >     img = loadImage('../sketches/Taller1/ImagingAndVideo/WolvCar.png');
> > > 	  imgOriginal = loadImage('../sketches/Taller1/ImagingAndVideo/WolvCar.png');
> > > }
> > > 
> > > function setup() {
> > >     createCanvas(780, 500);
> > >     pixelDensity(1);
> > >     imgOriginal.resize(390,500);
> > > 	image(imgOriginal, 0, 0);
> > >     img.resize(390,500);
> > >     img.loadPixels();
> > >     for (var y = 0; y < img.height; y++) {
> > >         for (var x = 0; x < img.width; x++) {
> > >             var index = (x + y * img.width) * 4;
> > >             var r = img.pixels[index + 0];
> > >             var g = img.pixels[index + 1];
> > >             var b = img.pixels[index + 2];
> > >             var luma = r * .299 + g * .587 + b * .0114;
> > >             img.pixels[index + 0] = luma;
> > >             img.pixels[index + 1] = luma;
> > >             img.pixels[index + 2] = luma;
> > >         }
> > >     }
> > >     img.updatePixels();
> > >     image(img, 390, 0);
> > > }
> > ```

### Video Dedos Original y en Escala de grises usando Luma con P5

Hacer click para correr el video.

> :Tabs
> > :Tab title=Original
> > 
> > > :P5 sketch=/docs/sketches/ImagenesOriginales/VideoOriginal.js, width=720, height=500
>
> > :Tab title=Resultado
> > 
> > > :P5 sketch=/docs/sketches/Taller3/RgbVideo.js, width=720, height=500
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