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
// this is the part where it draws the particles each frame

// chnaged background color to black because they dots werent appearing 
function draw() {
  background(0);
  // adding horizontal lines from sketch 2 
  horizonal(0, width, 0, height);
  vertical(0, width, 0, height);

  for (var i = 0; i < pix.length; i++) {
    pix[i].update();
    pix[i].display();
  }
}
 function Pixel(x, y, speed, curve) {

  this.x = x;
  this.y = y;
  this.speed = speed;
  this.curve = curve;

  this.update = function() {
    // added mouse interaction here by making the mouse change movement speed
    // changed speed just so it can be more noticeable 
    // now when moving the mouse left the points fall slowly and when right they fall fast
    this.y += this.speed + mouseX * 0.005;
    if (this.y > height) {
      this.y = 0;
    }
  }

  this.display = function() {
    // im trying to change the color of the points
    // now i made the points different colors some pink and some blue
    // chnaged the pink to more of a vibrant pink to become more visable 
    if (this.x < width / 2) { 
      fill(255, 20, 147); 
    } else {
      fill(100,200,255);
    }

    noStroke();

    // here i made the shape bigger it turned into big circles 
    // i changed the circles to smaller circles something in between so not too small
    //  chnaged the size to something that looks different so they are not all the same size
    ellipse(this.x, this.y + 5, 2, 2);
    ellipse(width - this.x, this.y + 5, 4, 4);
  }

}
function horizonal(x1, x2, y1, y2) { 
  // changed color from black to blue
  // gonna make it respond to the mouse interaction
  // nvm i wanted to make the canvas change color as i move the mouse but i feel like its complicating things for me right now so ill just do it later maybe
  stroke(0, 150, 255, 65); 
  // i also made it a bit transparent to help make it less visable 
  strokeWeight(1);// making blue lines thicker
  // making the line thinner because im trying to make it not overpower the dots

  var increment = 4; 
  for (i = y1; i <= y2; i += increment) { 
    line(x1, i, x2, i);
  } 
} 
function vertical(x1, x2, y1, y2) {
  stroke(255, 105, 180);
  var increment = 3;

  for (i = x1; i <= x2; i += increment) {
    line(i, y1, i, y2);
  }
}


