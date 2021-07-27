precision mediump float;

uniform sampler2D texture;

varying vec4 vVertexColor;

varying vec2 vTexCoord;

void main() {
  vec4 col = texture2D(texture, vTexCoord) * vVertexColor;
  float grayRGB = dot(col.rgb, vec3(0.333, 0.333, 0.333));
  gl_FragColor = vec4(vec3(grayRGB), 1.0);
}