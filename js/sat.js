class SAT
{

  static checkCollision(obj1,obj2)
  {
    
  }
}

/*
for food collision
get rect axises
project to those axises
calc axis.norm()*food.r
check min-max
https://www.youtube.com/watch?v=7Ik2vowGcU0











sample
let angle = 0;
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(51);
  angle+=0.3;
  push();
  translate(width/2,height/2);
  fill(255);
  rotate(angle);
  rect(0,0,100,100);
  pop();
  translate(width/2,height/2);
  fill(255,0,0);
  ellipse(cos(angle+45) * (50*sqrt(2)),
          sin(angle+45) * (50*sqrt(2)),20,20);
  fill(0,255,0);
  ellipse(cos(angle-45) * (50*sqrt(2)),
          sin(angle-45) * (50*sqrt(2)),20,20);
  fill(0,0,255);
  ellipse(-cos(angle-45) * (50*sqrt(2)),
          -sin(angle-45) * (50*sqrt(2)),20,20);
  fill(255,255,0);
  ellipse(-cos(angle+45) * (50*sqrt(2)),
          -sin(angle+45) * (50*sqrt(2)),20,20);
}
*/
