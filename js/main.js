let actor;
let foods = [];
let camera;
let boardSize;
let tmpzoom=1;
function setup()
{
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  createCanvas(600,600);
  boardSize = createVector(width*2,height*2);
  camera = new Camera();
  actor = new Actor(boardSize.x/2,boardSize.y/2);
  for(let x = 0;x<10;x++)
  {
    for(let y = 0;y<10;y++)
    {
      foods.push(new Food(random(0,boardSize.x),random(0,boardSize.y)))
    }
  }
  camera.follow(actor);
  //camera.zoom(1);
}

function draw()
{
  background(51);
  test();
  camera.update();
  actor.update();
  actor.show(camera);

  for(let food of foods)
  {
    food.update(camera);
    food.show(camera);
  }
}

function test()
{
  if (keyIsDown(LEFT_ARROW)) {
    actor.pos.x -= 5;
    //camera.move(createVector(-5,0));
  }

  if (keyIsDown(RIGHT_ARROW)) {
    actor.pos.x += 5;
    //camera.move(createVector(5,0));
  }

  if (keyIsDown(UP_ARROW)) {
    actor.pos.y -= 5;
    //camera.move(createVector(0,-5));
  }

  if (keyIsDown(DOWN_ARROW)) {
    actor.pos.y += 5;
    //camera.move(createVector(0,5));
  }

  if (keyIsDown(65)) {
    tmpzoom+=0.005;
    camera.zoom(tmpzoom)
    //camera.move(createVector(0,5));
  }
  if (keyIsDown(68)) {
    tmpzoom-=0.005;
    camera.zoom(tmpzoom)
    //camera.move(createVector(0,5));
  }
}
