class Camera
{
  constructor(x,y)
  {
    this.offset = createVector(x,y);
    this.followTarget=null;
    this.zoomValue = 1;
  }

  move(step)
  {
    this.offset.add(step);
  }

  follow(actor)
  {
    this.followTarget = actor;

  }

  update()
  {
    if(this.followTarget!=null)
    {
      this.offset.x = this.followTarget.pos.x - width/2;
      this.offset.y = this.followTarget.pos.y - width/2;
    }
    translate(width/2,height/2)
    scale(this.zoomValue);
    // this.offset.x += width* (this.zoomValue-1);
    // this.offset.y += height * (this.zoomValue-1);
  }

  zoom(zoomValue)
  {
    this.zoomValue = zoomValue;
  }
}
