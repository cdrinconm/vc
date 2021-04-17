let vid;
function setup() {
  noCanvas();
  vid = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm'],vidLoad);
  vid.size(400, 500);
}

// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(0);
}