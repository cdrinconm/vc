precision mediump float;

uniform sampler2D texture;

varying vec4 vVertexColor;

varying vec2 vTexCoord;

void main() {
  gl_FragColor = texture2D(texture, vTexCoord) * vVertexColor;  
}