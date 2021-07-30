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
> > :Tab title=Fragment Shader
> >
> > ```md
> > > precision mediump float;
> > > 
> > > uniform sampler2D texture;
> > > 
> > > uniform vec2 texOffset;
> > > 
> > > uniform float param;
> > > 
> > > varying vec4 vVertexColor;
> > > 
> > > varying vec2 vTexCoord;
> > > 
> > > void main() {
> > > 
> > >   vec4 col0 = texture2D(texture, vTexCoord + vec2(-texOffset.s, -texOffset.t));
> > >   vec4 col1 = texture2D(texture, vTexCoord + vec2(0.0, -texOffset.t));
> > >   vec4 col2 = texture2D(texture, vTexCoord + vec2(+texOffset.s, -texOffset.t));
> > >   vec4 col3 = texture2D(texture, vTexCoord + vec2(-texOffset.s, 0.0));
> > >   vec4 col4 = texture2D(texture, vTexCoord + vec2(0.0, 0.0));
> > >   vec4 col5 = texture2D(texture, vTexCoord + vec2(+texOffset.s, 0.0));
> > >   vec4 col6 = texture2D(texture, vTexCoord + vec2(-texOffset.s, +texOffset.t));
> > >   vec4 col7 = texture2D(texture, vTexCoord + vec2(0.0, +texOffset.t));
> > >   vec4 col8 = texture2D(texture, vTexCoord + vec2(+texOffset.s, +texOffset.t));
> > >   vec4 sum = param * col4 - (col0 + col1 + col2 + col3 + col5 + col6 + col7 + col8);
> > >   gl_FragColor = vec4(vec3(sum), 1.0) * vVertexColor;
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
> > :Tab title=Fragment Shader
> >
> > ```md
> > > precision mediump float;
> > > 
> > > uniform sampler2D texture;
> > > 
> > > uniform vec2 texOffset;
> > > 
> > > uniform float param;
> > > 
> > > varying vec4 vVertexColor;
> > > 
> > > varying vec2 vTexCoord;
> > > 
> > > void main() {
> > > 
> > >   vec4 col0 = texture2D(texture, vTexCoord + vec2(-texOffset.s, -texOffset.t));
> > >   vec4 col1 = texture2D(texture, vTexCoord + vec2(0.0, -texOffset.t));
> > >   vec4 col2 = texture2D(texture, vTexCoord + vec2(+texOffset.s, -texOffset.t));
> > >   vec4 col3 = texture2D(texture, vTexCoord + vec2(-texOffset.s, 0.0));
> > >   vec4 col4 = texture2D(texture, vTexCoord + vec2(0.0, 0.0));
> > >   vec4 col5 = texture2D(texture, vTexCoord + vec2(+texOffset.s, 0.0));
> > >   vec4 col6 = texture2D(texture, vTexCoord + vec2(-texOffset.s, +texOffset.t));
> > >   vec4 col7 = texture2D(texture, vTexCoord + vec2(0.0, +texOffset.t));
> > >   vec4 col8 = texture2D(texture, vTexCoord + vec2(+texOffset.s, +texOffset.t));
> > >   vec4 sum = param * col4 - (col0 + col1 + col2 + col3 + col5 + col6 + col7 + col8);
> > >   gl_FragColor = vec4(vec3(sum), 1.0) * vVertexColor;
> > > }
> > ```

> :ToCPrevNext