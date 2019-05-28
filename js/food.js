class Food
{
  constructor(x,y)
  {
    this.phisicalPosition = createVector(x,y);
    this.drawPosition = createVector(x,y);
    this.r = 20;
  }

  update(camera)
  {
    this.drawPosition.x=this.phisicalPosition.x-camera.offset.x;
    this.drawPosition.y=this.phisicalPosition.y-camera.offset.y;
  }

  show(camera)
  {
    fill(138,180,240);
    ellipse(this.drawPosition.x/camera.zoomValue,this.drawPosition.y/camera.zoomValue,this.r/camera.zoomValue,this.r/camera.zoomValue);
  }
}
