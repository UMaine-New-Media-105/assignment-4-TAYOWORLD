function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background("grey");
   
funnyStar(50,50,10)
  
funnyStar(200,80,15)
  
funnyStar(120,200,8)
  
}
function funnyStar(x, y, size) {
  push(); 
  translate(x, y); 
  scale(size);
  beginShape();
  for (let i = 0; i < 5; i++) {
    let angle = TWO_PI * i / 5 - HALF_PI;
    let x = cos(angle);
    let y = sin(angle);
    vertex(x, y);
    angle += TWO_PI * 2 / 5;
    x = cos(angle) * 0.5;
    y = sin(angle) * 0.5;
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
}
