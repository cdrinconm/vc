let fingers;

function setup() {
  createCanvas(720, 240);
  // specify multiple formats for different browsers
  fingers = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
  fingers.hide(); // by default video shows up in separate dom
  // element. hide it and draw it to the canvas
  // instead
}

function draw() {
  image(fingers, 400, 0); // draw the video frame to canvas
  filter(GRAY);
  image(fingers, 0, 0); // draw a second copy to canvas
}

function mousePressed() {
  fingers.loop(); // set the video to loop and start playing
  background(255);
}