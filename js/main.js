let player;
let foods = [];
let bots = [];
let camera;
let boardSize;
let tmpzoom=1;
let score = 0;

/*

Jeśli cos jest undefined priszę odświeżyć

*/

function setup()
{
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  createCanvas(600,600);
  boardSize = createVector(width*4,height*4);
  camera = new Camera();
  player = new Player(boardSize.x/2,boardSize.y/2,50,"#cab");
  for(let x = 0;x<20;x++)
  {
    for(let y = 0;y<20;y++)
    {
      foods.push(new Food(random(0,boardSize.x),random(0,boardSize.y),20))
    }
  }

  for(let i =0;i<8;i++)
  {
    bots.push(new Bot(random(0,boardSize.x),random(0,boardSize.y),50,"#bca"))
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
  for(let bot of bots)
  {
    bot.show(camera);
    bot.update(camera,player);

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
    text("Score: "+ score.toFixed(2),5,20);
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
