class Food extends Actor
{
  constructor(x,y,radius)
  {
    super(x,y,radius)
  }

  update(camera)
  {
    this.postOffsetPosition.x=this.preOffsetPosition.x-camera.offset.x;
    this.postOffsetPosition.y=this.preOffsetPosition.y-camera.offset.y;
  }

  show(camera)
  {
    this.isColliding ? fill(240,180,138):fill(138,180,240);
    ellipse(this.postOffsetPosition.x,this.postOffsetPosition.y,this.radius,this.radius);
  }

  reset()
  {
    this.preOffsetPosition = createVector(random(0,boardSize.x),random(0,boardSize.y));
  }
}
