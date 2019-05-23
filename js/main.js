let actor;
let foods = [];
let camera;
let boardSize;
function setup()
{
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  createCanvas(600,600);
  boardSize = createVector(width*2,height*3);
  camera = createVector(-boardSize.x/2,-boardSize.y/2);
  actor = new Actor();
  for(let x = 0;x<10;x++)
  {
    for(let y = 0;y<10;y++)
    {
      foods.push(new Food(random(0,boardSize.x),random(0,boardSize.y)))
    }
  }
  // foods.push(new Food(width/2,height/2));
}

function draw()
{
  background(51);
  test();
  stroke(255,0,0);
  strokeWeight(10);

  let center = createVector(width/2,height/2);
  let mouse = createVector(mouseX,mouseY);
  let diff=center.sub(mouse).setMag(1.7);
  camera.add(diff);
  // camera.x+=0.1;
  // translate(0,0);

  if(camera.y>boardSize.y-camera.y)
  {
    camera.y=boardSize-camera.y;
  }
  // else if(camera.x> boardSize.x)
  // {
  //   camera.x = boardSize.x;
  // }
  // if(camera.y<0)
  // {
  //   camera.y = 0
  // }
  // else if(camera.y> boardSize.y)
  // {
  //   camera.y = boardSize.y;
  // }

  actor.update();
  actor.show();
  translate(camera.x,camera.y);
  stroke(255,0,0);
  strokeWeight(10);
  line(0,0,boardSize.x,0);
  // line(0,0,boardSize.x,0);
  // line(0,boardSize.y,boardSize.x,boardSize.y);
  // line(0,0,0,boardSize.x);
  // line(boardSize.x,0,boardSize.x,boardSize.y);
  for(let food of foods)
  {
    food.show();
  }
}

function test()
{
  if (keyIsDown(LEFT_ARROW)) {
    camera.x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    camera.x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    camera.y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    camera.y += 5;
  }
}
