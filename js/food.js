class Food
{
  constructor(x,y)
  {
    this.preOffsetPosition = createVector(x,y);
    this.postOffsetPosition = createVector(x,y);
    this.r = 20;
    this.isColliding = false
  }

  update(camera)
  {
    this.postOffsetPosition.x=this.preOffsetPosition.x-camera.offset.x;
    this.postOffsetPosition.y=this.preOffsetPosition.y-camera.offset.y;
  }

  show(camera)
  {
    this.isColliding ? fill(240,180,138):fill(138,180,240);
    ellipse(this.postOffsetPosition.x,this.postOffsetPosition.y,this.r,this.r);
  }
}
