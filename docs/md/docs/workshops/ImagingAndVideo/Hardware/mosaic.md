# Foto mosaico - Hardware

## Planteamiento del Problema

Realizar la conversion de una imagen a un foto mosaico por Hardware.

## Codigo & Resultados

### Imagen Ryuk Original en mosaico con P5

> :Tabs
> > :Tab title=Original
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/ImagenesOriginales/RyukOriginal.js, height=500
>
> > :Tab title=Resultado
> > 
> > > :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/Taller3/mosaico.js, width=720, height=500
>
> > :Tab title=Fragment Shader
> >
> > ```md
> > > precision mediump float;
> > > 
> > > uniform sampler2D image;
> > > 
> > > uniform sampler2D symbol1;
> > > uniform sampler2D symbol2;
> > > uniform sampler2D symbol3;
> > > uniform sampler2D symbol4;
> > > uniform sampler2D symbol5;
> > > uniform sampler2D symbol6;
> > > uniform sampler2D symbol7;
> > > uniform sampler2D symbol8;
> > > uniform sampler2D symbol9;
> > > uniform sampler2D symbol10;
> > > uniform sampler2D symbol11;
> > > uniform sampler2D symbol12;
> > > uniform sampler2D symbol13;
> > > uniform sampler2D symbol14;
> > > uniform sampler2D symbol15;
> > > uniform sampler2D symbol16;
> > > uniform sampler2D symbol17;
> > > uniform sampler2D symbol18;
> > > uniform sampler2D symbol19;
> > > uniform sampler2D symbol20;
> > > uniform sampler2D symbol21;
> > > uniform sampler2D symbol22;
> > > uniform sampler2D symbol23;
> > > uniform sampler2D symbol24;
> > > uniform sampler2D symbol25;
> > > uniform sampler2D symbol26;
> > > uniform sampler2D symbol27;
> > > 
> > > uniform bool debug;
> > > 
> > > uniform float resolution;
> > > 
> > > varying vec4 vVertexColor;
> > > 
> > > varying vec2 vTexCoord;
> > > 
> > > void main() {
> > > 
> > >   vec2 symbolCoord = vTexCoord * resolution;
> > >   vec2 imageCoord = floor(symbolCoord);
> > >   symbolCoord = symbolCoord - imageCoord;
> > >   vec4 col = texture2D(image, vTexCoord) * vVertexColor;
> > >   float grayLuma = dot(col.rgb, vec3(1, 1, 1));
> > >   float r = col.r * 255.0;
> > >   float g = col.g * 255.0;
> > >   float b = col.b * 255.0;
> > > 
> > >   if(r > 170.0)
> > >     if(g > 170.0)
> > >       if(b > 127.0)
> > >         gl_FragColor = texture2D(symbol21, symbolCoord) * vVertexColor;
> > >       else
> > >         gl_FragColor = texture2D(symbol13, symbolCoord) * vVertexColor;
> > >     else if(g > 85.0)
> > >       if(b > 127.0)
> > >         gl_FragColor = texture2D(symbol18, symbolCoord) * vVertexColor;
> > >       else
> > >         gl_FragColor = texture2D(symbol21, symbolCoord) * vVertexColor;
> > >     else if(b > 127.0)
> > >       gl_FragColor = texture2D(symbol23, symbolCoord) * vVertexColor;
> > >     else
> > >       gl_FragColor = texture2D(symbol11, symbolCoord) * vVertexColor;
> > >   else if(r > 85.0)
> > >     if(g > 170.0)
> > >       if(b > 127.0)
> > >         gl_FragColor = texture2D(symbol17, symbolCoord) * vVertexColor;
> > >       else
> > >         gl_FragColor = texture2D(symbol23, symbolCoord) * vVertexColor;
> > >     else if(g > 85.0)
> > >       if(b > 127.0)
> > >         gl_FragColor = texture2D(symbol15, symbolCoord) * vVertexColor;
> > >       else
> > >         gl_FragColor = texture2D(symbol7, symbolCoord) * vVertexColor;
> > >     else if(b > 127.0)
> > >       gl_FragColor = texture2D(symbol25, symbolCoord) * vVertexColor;
> > >     else
> > >       gl_FragColor = texture2D(symbol5, symbolCoord) * vVertexColor;
> > >   else if(g > 170.0)
> > >     if(b > 127.0)
> > >       gl_FragColor = texture2D(symbol25, symbolCoord) * vVertexColor;
> > >     else
> > >       gl_FragColor = texture2D(symbol9, symbolCoord) * vVertexColor;
> > >   else if(g > 85.0)
> > >     if(b > 127.0)
> > >       gl_FragColor = texture2D(symbol27, symbolCoord) * vVertexColor;
> > >     else
> > >       gl_FragColor = texture2D(symbol3, symbolCoord) * vVertexColor;
> > >   else if(b > 127.0)
> > >     gl_FragColor = texture2D(symbol8, symbolCoord) * vVertexColor;
> > >   else
> > >     gl_FragColor = texture2D(symbol1, symbolCoord) * vVertexColor;
> > > }
> > ```

> :ToCPrevNext