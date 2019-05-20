let actor;
let foods = [];
function setup()
{
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  createCanvas(400,400);
  actor = new Actor();
  for(let x = 0;x<10;x++)
  {
    for(let y = 0;y<10;y++)
    {
      foods.push(new Food(random(-width,width),random(-height,height)))
    }
  }
}

function draw()
{
  background(51);
  actor.update();
  actor.show();

  for(let food of foods)
  {
    food.show();
  }
}
