precision mediump float;

uniform sampler2D image;

uniform sampler2D symbol1;
uniform sampler2D symbol2;
uniform sampler2D symbol3;
uniform sampler2D symbol4;
uniform sampler2D symbol5;
uniform sampler2D symbol6;
uniform sampler2D symbol7;
uniform sampler2D symbol8;
uniform sampler2D symbol9;
uniform sampler2D symbol10;
uniform sampler2D symbol11;
uniform sampler2D symbol12;
uniform sampler2D symbol13;
uniform sampler2D symbol14;

uniform bool debug;

uniform float resolution;

varying vec4 vVertexColor;

varying vec2 vTexCoord;

void main() {

  vec2 symbolCoord = vTexCoord * resolution;

  vec2 imageCoord = floor(symbolCoord);
  symbolCoord = symbolCoord - imageCoord;
  vec4 col = texture2D(image, vTexCoord) * vVertexColor;
  float grayLuma = dot(col.rgb, vec3(1, 1, 1));

  if(grayLuma > 2.6)
    gl_FragColor = texture2D(symbol14, symbolCoord) * vVertexColor;
  else if(grayLuma > 2.4)
    gl_FragColor = texture2D(symbol13, symbolCoord) * vVertexColor;
  else if(grayLuma > 2.2)
    gl_FragColor = texture2D(symbol12, symbolCoord) * vVertexColor;
  else if(grayLuma > 2.0)
    gl_FragColor = texture2D(symbol11, symbolCoord) * vVertexColor;
  else if(grayLuma > 1.8)
    gl_FragColor = texture2D(symbol10, symbolCoord) * vVertexColor;
  else if(grayLuma > 1.6)
    gl_FragColor = texture2D(symbol9, symbolCoord) * vVertexColor;
  else if(grayLuma > 1.4)
    gl_FragColor = texture2D(symbol8, symbolCoord) * vVertexColor;
  else if(grayLuma > 1.2)
    gl_FragColor = texture2D(symbol7, symbolCoord) * vVertexColor;
  else if(grayLuma > 1.0)
    gl_FragColor = texture2D(symbol6, symbolCoord) * vVertexColor;
  else if(grayLuma > 0.8)
    gl_FragColor = texture2D(symbol5, symbolCoord) * vVertexColor;
  else if(grayLuma > 0.6)
    gl_FragColor = texture2D(symbol4, symbolCoord) * vVertexColor;
  else if(grayLuma > 0.4)
    gl_FragColor = texture2D(symbol3, symbolCoord) * vVertexColor;
  else if(grayLuma > 0.2)
    gl_FragColor = texture2D(symbol2, symbolCoord) * vVertexColor;
  else
    gl_FragColor = texture2D(symbol1, symbolCoord) * vVertexColor;

}