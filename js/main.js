let actor;
let foods = [];
let camera;
function setup()
{
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  createCanvas(400,400);
  camera = createVector(width/2,height/2);
  actor = new Actor();
  for(let x = 0;x<10;x++)
  {
    for(let y = 0;y<10;y++)
    {
      foods.push(new Food(random(-width,width),random(-height,height)))
    }
  }
  // foods.push(new Food(width/2,height/2));
}

function draw()
{
  background(51);
  //test();
  let center = createVector(width/2,height/2);
  let mouse = createVector(mouseX,mouseY);
  let diff=center.sub(mouse).setMag(1.2);
  camera.add(diff);
  actor.update();
  actor.show();
  translate(camera.x,camera.y);
  for(let food of foods)
  {
    food.show();
  }
}

function test()
{
  if (keyIsDown(LEFT_ARROW)) {
    camera.x += 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    camera.x -= 5;
  }

  if (keyIsDown(UP_ARROW)) {
    camera.y += 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    camera.y -= 5;
  }
}
