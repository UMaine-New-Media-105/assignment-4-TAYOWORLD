function setup() {
  createCanvas(800, 500);
  noLoop();
}

function draw() {
  background("grey");
  
  coolStar(70,80,70,5)
  niceStar(250,90,80,5)
  easyStar(400,90,70,5)
  
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
