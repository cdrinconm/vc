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
> > :Tab title=Fragment Shader
> >
> > ```md
> > > precision mediump float;
> > > 
> > > uniform sampler2D texture;
> > > 
> > > varying vec4 vVertexColor;
> > > 
> > > varying vec2 vTexCoord;
> > > 
> > > void main() {
> > >   vec4 col = texture2D(texture, vTexCoord) * vVertexColor;
> > >   float grayRGB = dot(col.rgb, vec3(0.333, 0.333, 0.333));
> > >   gl_FragColor = vec4(vec3(grayRGB), 1.0);
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
> > :Tab title=Fragment Shader
> >
> > ```md
> > > precision mediump float;
> > > 
> > > uniform sampler2D texture;
> > > 
> > > uniform bool form;
> > > 
> > > varying vec4 vVertexColor;
> > > 
> > > varying vec2 vTexCoord;
> > > 
> > > void main() {
> > >   vec4 col = texture2D(texture, vTexCoord) * vVertexColor;
> > >   float grayLuma;
> > >   if(form){
> > >     grayLuma = dot(col.rgb, vec3(0.299, 0.587, 0.114));
> > >   }else{
> > >     grayLuma = dot(col.rgb, vec3(0.2126, 0.7152, 0.0722));
> > >   }
> > >   gl_FragColor = vec4(vec3(grayLuma), 1.0);
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
> > :Tab title=Fragment Shader
> >
> > ```md
> > > precision mediump float;
> > > 
> > > uniform sampler2D texture;
> > > 
> > > varying vec4 vVertexColor;
> > > 
> > > varying vec2 vTexCoord;
> > > 
> > > void main() {
> > >   vec4 col = texture2D(texture, vTexCoord) * vVertexColor;
> > >   float grayRGB = dot(col.rgb, vec3(0.333, 0.333, 0.333));
> > >   gl_FragColor = vec4(vec3(grayRGB), 1.0);
> > > }
> > ```

> :ToCPrevNext