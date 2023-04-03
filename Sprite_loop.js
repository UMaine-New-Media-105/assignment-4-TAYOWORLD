function setup() {
  createCanvas(800, 500);
  noLoop();
}

function draw() {
  background("grey");
  
  let starX = 75 
  let starY = 80
  
  let starXa = 75 
  let starYa =250
  
  let starXb = 75
  let starYb = 400
  
  
  for(let counter = 0; counter < 8; counter ++){
     niceStar(starXa,starYa,60,5)
  starXa = starXa + 210
  }
  
  
  for(let counter = 0; counter < 8; counter ++){
  easyStar(starXb,starYb,60,5)
    starXb = starXb + 210
 }
  
  
  for(let counter = 0; counter < 15; counter ++){
    coolStar(starX,starY,60,5)
    starX = starX+ 210
   
     
  
  }
}

function coolStar(x, y, radius, npoints) {
  push();
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  fill("red")
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius / 2;
    sy = y + sin(a + halfAngle) * radius / 2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  pop();
}
function niceStar(x, y, radius, npoints) {
  push();
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  fill("white")
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius / 2;
    sy = y + sin(a + halfAngle) * radius / 2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  pop();
}
function easyStar(x, y, radius, npoints) {
  push();
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  fill("blue")
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius / 2;
    sy = y + sin(a + halfAngle) * radius / 2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  pop();
}
