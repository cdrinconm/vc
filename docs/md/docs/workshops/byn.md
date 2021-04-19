# Conversión a Escala de Grises

## Planteamiento del Problema

Convertir una imagen a color a escala de grises usando el promedio RGB y Luma.

## Antecedentes

Antiguamente las imágenes estaban solamente presentadas en escalas de grises, en estas imágenes las formas se podían distinguir por su luminosidad. En algunos casos se podía distinguir si los objetos eran de diferentes colores cuando estos tenían “grises” diferentes. Ahora con la aparición y uso del RGB (Red, Green & Blue) o en español RVA (Rojo, Verde & Azul), se hace uso del modelo aditivo de la luz para simular la mayoría de los colores visibles. Aunque pasar de un modelo RGB a una escala de grises es poco común, esto es posible hacerlo gracias a distintos métodos de conversión, entre ellos están el promedio de RGB y Luma.

## Codigo & Resultados

### Imagen Wolverine Original y en Escala de grises usando promedio RGB con P5

El promedio RGB, como lo indica su nombre, solo hace uso del promedio de los valores en la escala RGB para calcular la luminosidad del píxel y de esta manera transformarlo a escala de grises.

> :Tabs
> > :Tab title=Original & Resultado
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/bnrgb.js, width=720, height=500
>
> > :Tab title=Codigo
> >
> > ```md
> > > let img;
> > > let imgOriginal;
> > > 
> > > function preload() {
> > > 	img = loadImage('../sketches/WolvCar.png');
> > > 	imgOriginal = loadImage('../sketches/WolvCar.png');
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

### Imagen Wolverine Original y en Escala de grises usando Luma con P5

Luma, por otro lado, es definida como la corrección de gamma en una señal de video. Los más usados actualmente son UIT-R BT 601 (TVSD) y UIT-R BT 709 (TVHD) que están definidos como:

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
> > :Tab title=Original & Resultado
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/luma.js, width=720, height=500
>
> > :Tab title=Codigo
> >
> > ```md
> > > let img;
> > > let imgOriginal;
> > > 
> > > function preload() {
> > >     img = loadImage('../sketches/WolvCar.png');
> > > 	  imgOriginal = loadImage('../sketches/WolvCar.png');
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

### Comparacion Imagen Wolverine en Escala de grises usando RGB Vs Luma con P5

Si realizamos la comparacion entre el metodo de promedio RGB y Luma, podemos notar que el segundo tiene su escala mas oscura que el primero.

> :Tabs
> > :Tab title=Resultado
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/bnrgbvsluma.js, width=720, height=500
>
> > :Tab title=Codigo
> >
> > ```md
> > > let img;
> > > let imgOriginal;
> > > 
> > > function preload() {
> > >     img = loadImage('../sketches/WolvCar.png');
> > > 	imgOriginal = loadImage('../sketches/WolvCar.png');
> > > }
> > > 
> > > function setup() {
> > >     createCanvas(780, 500);
> > >     pixelDensity(1);
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
> > > 
> > > function draw() {
> > > 	imgOriginal.resize(390,500);
> > > 	image(imgOriginal, 0, 0);
> > > 	imgOriginal.loadPixels();
> > > 	for (var y = 0; y < imgOriginal.height; y++) {
> > > 		for (var x = 0; x < imgOriginal.width; x++) {
> > > 			var index = (x + y * imgOriginal.width) * 4;
> > > 			var r = imgOriginal.pixels[index + 0];
> > > 			var g = imgOriginal.pixels[index + 1];
> > > 			var b = imgOriginal.pixels[index + 2];
> > > 			var bw = (r + g + b) / 3;
> > > 			imgOriginal.pixels[index + 0] = bw;
> > > 			imgOriginal.pixels[index + 1] = bw;
> > > 			imgOriginal.pixels[index + 2] = bw;
> > > 		}
> > > 	}
> > > 	imgOriginal.updatePixels();	
> > > }
> > ```

### Video Dedos Original y en Escala de grises usando Luma con P5

Luego realizamos la conversion de un video a escala de grises y obtenemos el siguiente resultado:

Hacer click para correr el video.

> :Tabs
> > :Tab title=Original & Resultado
> > 
> > > :P5 sketch=/docs/sketches/videobn.js, width=720, height=240
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

# Referencias

- [Respuestas ME](https://respuestas.me/q/ca-lculo-promedio-de-dos-valores-rgb-60927652686)
- [PTC Support](http://support.ptc.com/help/mathcad/es/index.html#page/PTC_Mathcad_Help/example_grayscale_and_color_in_images.html)
- [Wikipedia RGB](https://es.wikipedia.org/wiki/RGB)

> :ToCPrevNext