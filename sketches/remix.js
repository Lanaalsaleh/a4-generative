// =============================================
// remix.js — your combined sketch
// This is where sketch1 and sketch2 come together
// into something new
// =============================================
 // your combined code here
var pix = [];
function setup() {
  // i copied the particle system from sketch 1 
  // wanted to start building the remix with the moving dots
  createCanvas(800, 500);
for (var i = 0; i < width / 10; i++) {
    for (var j = 0; j < height / 20; j++) {
      pix[i * (height / 20) + j] = 
      new Pixel(i * 10, j * 10, i / 100.0 * j / 100 * 8.0, true);
    }
  }
}

function draw() {
  background(220);
 
}

