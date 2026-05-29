// =============================================
// remix.js — your combined sketch
// This is where sketch1 and sketch2 come together
// into something new
// =============================================
// your combined code here
var pix = [];
//  this is to let left Diagonal lines move 
let offset = 0;
function setup() {
  // i copied the particle system from sketch 1 
  // wanted to start building the remix with the moving dots
  // chnaged canvas size so more can be seen 
  createCanvas(1000, 800);
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

  offset += 1;


  // adding horizontal lines from sketch 2 
  horizonal(0, width, 0, height);
  vertical(0, width, 0, height);
  rightDiagonal(0, width, 0, height);
  leftDiagonal(0, width, 0, height);

  for (var i = 0; i < pix.length; i++) {
    pix[i].update();
    pix[i].display();
  } // im just testing to see if the dot will appear and chnage size with the mouse because the blue and pink ones are not working
  // fill(255,255,0);
  // ellipse(mouseX, mouseY, 50, 50); 
  // added a border to match the geometric style from sketch 2 
  stroke(255, 50, 50);
  strokeWeight(10);
  noFill();
  rect(5, 5, width - 10, height - 10);
}
function Pixel(x, y, speed, curve) {

  this.x = x;
  this.y = y;
  this.speed = speed;
  this.curve = curve;

  this.update = function () {
    // added mouse interaction here by making the mouse change movement speed
    // changed speed just so it can be more noticeable 
    // now when moving the mouse left the points fall slowly and when right they fall fast
    this.y += this.speed + mouseX * 0.005;
    if (this.y > height) {
      this.y = 0;
    }
  }


  this.display = function () {
    // im trying to change the color of the points
    // now i made the points different colors some pink and some blue
    // chnaged the pink to more of a vibrant pink to become more visiable 
    if (this.x < width / 3) {
      fill(255, 20, 147);
    } else if (this.x < 2 * width / 3) {
      fill(100, 200, 255);
    } else {
      fill(200, 255, 0);
    } // adding one more color that breaks the theme just so it pops out

    noStroke();

    // if mouse goes up particles become smaller and if down they become large 
    let s = map(mouseY, 0, height, 2, 10);


    // here i made the shape bigger it turned into big circles 
    // i changed the circles to smaller circles something in between so not too small
    //  chnaged the size to something that looks different so they are not all the same size
    ellipse(this.x, this.y + 5, s, s);
    ellipse(width - this.x, this.y + 5, s + 2, s + 2);
  }

}
function horizonal(x1, x2, y1, y2) {
  // changed color from black to blue
  // gonna make it respond to the mouse interaction
  // nvm i wanted to make the canvas change color as i move the mouse but i feel like its complicating things for me right now so ill just do it later maybe
  // stroke(mouseX / 3, 150, 255, 65);  this didnt work because the lines are kind of hard to see 
  stroke(0, 150, 255, 180);
  // i also made it a bit transparent to help make it less visiable 
  strokeWeight(1);// making blue lines thicker
  // making the line thinner because im trying to make it not overpower the dots
  // added mouse interaction to the line pattern
  // var increment = mouseX / 5 + 2; 
  var increment = 4;
  for (i = y1; i <= y2; i += increment) {
    line(x1, i, x2, i);
  }
}
function vertical(x1, x2, y1, y2) {
  stroke(255, 105, 180, 70);
  var increment = 3;

  for (i = x1; i <= x2; i += increment) {
    line(i, y1, i, y2);
  }
}
function rightDiagonal(x1, x2, y1, y2) {
  var increment = 10;
  stroke(255, 0, 0, 90);
  var w = x2 - x1;

  for (i = 0; i <= w; i += increment) {

    if (w - i < y2 - y1) {
      line(x1 + i, y1, x2, y1 + (w - i));
    }

    if (y2 - i >= y1) {
      line(x1, y2 - i, x1 + i, y2);
    }

    if (y2 - y1 > x2 - x1 && y1 + w + i < y2) {
      line(x1, y1 + i, x2, y1 + w + i);
    }

    if ((x2 - x1 > y2 - y1) && (i <= w - (y2 - y1))) {
      line(x1 + i, y1, x1 + i + y2 - y1, y2);
    }
  }
}
// im adding more lines to make it look full and complete 
function leftDiagonal(x1, x2, y1, y2) {
// they werent showing much so i made it more visiable 
  stroke(255, 100, 150, 180);
  strokeWeight(2);

  var increment = 20;

  for (var i = -height; i < width; i += increment) {
    line(i + offset, y1, i + height + offset, y2);
  }
}

