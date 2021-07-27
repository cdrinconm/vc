precision mediump float;

uniform sampler2D texture;

uniform bool form;

varying vec4 vVertexColor;

varying vec2 vTexCoord;

void main() {
  vec4 col = texture2D(texture, vTexCoord) * vVertexColor;
  float grayLuma;
  if(form){
    grayLuma = dot(col.rgb, vec3(0.299, 0.587, 0.114));
  }else{
    grayLuma = dot(col.rgb, vec3(0.2126, 0.7152, 0.0722));
  }
  gl_FragColor = vec4(vec3(grayLuma), 1.0);
}