class SAT
{

  static checkCollision(obj1,obj2)
  {
    let o1sides = [];
    let o1angle = obj1.angle;
    let o1diag = obj1.rectSize.x/2*sqrt(2);

    o1sides.push(createVector(cos(o1angle+45) * o1diag,
                              sin(o1angle+45) * o1diag));
    o1sides.push(createVector(cos(o1angle-45) * o1diag,
                              sin(o1angle-45) * o1diag));
    o1sides.push(createVector(-cos(o1angle+45) * o1diag,
                              -sin(o1angle+45) * o1diag));
    o1sides.push(createVector(-cos(o1angle-45) * o1diag,
                              -sin(o1angle-45) * o1diag));


    let o1axises = [];
    for(let i=0;i<o1sides.length;i++)
    {
      o1axises.push(createVector(abs(o1sides[i%o1sides.length].x-o1sides[(i+1)%o1sides.length].x),
                                 abs(o1sides[i%o1sides.length].y-o1sides[(i+1)%o1sides.length].y)));
      push();
      stroke(255);
      strokeWeight(4);
      translate(obj1.rectPos.x,obj1.rectPos.y);
      ellipse(o1sides[i].x,o1sides[i].y,5,5);
      line(o1sides[i%o1sides.length].x,o1sides[i%o1sides.length].y,
          o1sides[(i+1)%o1sides.length].x,o1sides[(i+1)%o1sides.length].y);
      pop();
    }
    // console.log(o1sides);
    // noLoop();
    // console.log(axises);
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
