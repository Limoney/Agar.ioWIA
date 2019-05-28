class Food
{
  constructor(x,y)
  {
    this.physicalPosition = createVector(x,y);
    this.drawPosition = createVector(x,y);
    this.pos = this.drawPosition;
    this.r = 20;
    this.isColliding = false
  }

  update(camera)
  {
    this.drawPosition.x=this.physicalPosition.x-camera.offset.x;
    this.drawPosition.y=this.physicalPosition.y-camera.offset.y;
    this.pos = this.drawPosition;
  }

  show(camera)
  {
    this.isColliding ? fill(240,180,138):fill(138,180,240);
    ellipse(this.drawPosition.x,this.drawPosition.y,this.r,this.r);
  }
}
