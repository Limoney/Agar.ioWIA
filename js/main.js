let actor;
function setup()
{
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  createCanvas(400,400);
  actor = new Actor();
}

function draw()
{
  background(51);
  actor.update();
  actor.show();
}
