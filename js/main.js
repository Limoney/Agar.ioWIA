let player;
let foods = [];
let camera;
let boardSize;
let tmpzoom=1;
let score = 0;
function setup()
{
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  createCanvas(600,600);
  boardSize = createVector(width*2,height*2);
  camera = new Camera();
  player = new Player(boardSize.x/2,boardSize.y/2,50);
  for(let x = 0;x<15;x++)
  {
    for(let y = 0;y<15;y++)
    {
      foods.push(new Food(random(0,boardSize.x),random(0,boardSize.y),20))
    }
  }
  camera.follow(player);
  //camera.zoom(1);
}

function draw()
{
  background(51);
  test();
  push();
  camera.update();
  player.update();
  player.show(camera);
  // SAT.checkCollision(player,null);

  stroke(255,0,0);
  strokeWeight(10);
  // line(-camera.offset.x,-camera.offset.y,boardSize.x,-camera.offset.y);
  // line(-camera.offset.x,-camera.offset.y,camera.offset.x,boardSize.y);
  // line(-boardSize.x,-camera.offset.y,camera.offset.x,boardSize.y);
  // line(camera.offset.x,boardSize.y);
  noStroke();

  for(let food of foods)
  {
    food.update(camera);
    food.show(camera);
  }
  pop();
  showScore();
}

function showScore()
{
  push();
    textSize(24);
    fill("#78f");
    translate(0,0);
    text("Score: "+ score,5,20);
  pop();
}

function test()
{
  if (keyIsDown(LEFT_ARROW)) {
    // player.pos.x -= 5;
    //camera.move(createVector(-5,0));
  }

  if (keyIsDown(RIGHT_ARROW)) {
    // player.pos.x += 5;
    //camera.move(createVector(5,0));
  }

  if (keyIsDown(UP_ARROW)) {
    // player.pos.y -= 5;
    //camera.move(createVector(0,-5));
  }

  if (keyIsDown(DOWN_ARROW)) {
    // player.pos.y += 5;
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
