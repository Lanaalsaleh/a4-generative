/* 
   
   Structure 2 
   
   A grid of points in the top half of the surface. 
   Each point moves downward and returns to the top when it falls off the 
   bottom edge. Beginning in the upper-left, each row and column moves 
   faster than the previous one. The speeds combine so that the point in the 
   upper-left is the slowest and the point in the lower-right is the 
   fastest. Copy and flip the grid across a central vertical axis and 
   display simultaneously. 
   
   Ported to p5.js by Casey Reas
   14 July 2016
   p5.js 0.5.2
 
   Restored by Casey Reas <http://reas.com> 
   22 June 2016 
   Processing v.3.1.1 <http://processing.org> 
 
   Implemented by Casey Reas 
   16 April 2004 
   Processing v.68 <http://processing.org> 
 
*/

var pix = [];

function setup() {
  // made canvas larger
  createCanvas(1000, 800);
  // changed the frame rate to 60 to make the circles move faster 
  frameRate(60);

  for (var i = 0; i < width / 10; i++) {
    for (var j = 0; j < height / 20; j++) {
      pix[i * (height / 20) + j] = new Pixel(i * 10, j * 10, i / 100.0 * j / 100 * 8.0, true);
    }
  }
}

function draw() {
  // creating motion trails behind the moving circles
  // im gonna try making it shorter just because it blends so much and i dont like it 
  // wanted this version to look way diff than the final version the remix
  background(0, 25);
  for (var i = height / 10; i < pix.length; i++) {
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
