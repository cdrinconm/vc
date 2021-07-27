precision mediump float;

uniform sampler2D texture;

uniform vec2 texOffset;

uniform float param;

varying vec4 vVertexColor;

varying vec2 vTexCoord;

void main() {

  vec4 col0 = texture2D(texture, vTexCoord + vec2(-texOffset.s, -texOffset.t));
  vec4 col1 = texture2D(texture, vTexCoord + vec2(0.0, -texOffset.t));
  vec4 col2 = texture2D(texture, vTexCoord + vec2(+texOffset.s, -texOffset.t));
  vec4 col3 = texture2D(texture, vTexCoord + vec2(-texOffset.s, 0.0));
  vec4 col4 = texture2D(texture, vTexCoord + vec2(0.0, 0.0));
  vec4 col5 = texture2D(texture, vTexCoord + vec2(+texOffset.s, 0.0));
  vec4 col6 = texture2D(texture, vTexCoord + vec2(-texOffset.s, +texOffset.t));
  vec4 col7 = texture2D(texture, vTexCoord + vec2(0.0, +texOffset.t));
  vec4 col8 = texture2D(texture, vTexCoord + vec2(+texOffset.s, +texOffset.t));

  //vec4 sum = 8.0 * col4 - (col0 + col1 + col2 + col3 + col5 + col6 + col7 + col8);
  //vec4 sum = 8.0 * col4 - (vec4(param, param, param, param)*col0 + vec4(param, param, param, param)*col1 + vec4(param, param, param, param)*col2 + vec4(param, param, param, param)*col3 + vec4(param, param, param, param)*col5 + vec4(param, param, param, param)*col6 + vec4(param, param, param, param)*col7 + vec4(param, param, param, param)*col8);
  vec4 sum = param * col4 - (col0 + col1 + col2 + col3 + col5 + col6 + col7 + col8);

  gl_FragColor = vec4(vec3(sum), 1.0) * vVertexColor;
}