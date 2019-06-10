class Food extends Actor
{
  constructor(x,y,radius)
  {
    super(x,y,radius)
    this.ttl = random(10,30);
    this.lastReset = 0;
  }

  update(camera)
  {
    if(millis()>this.lastReset+this.ttl*1000) this.reset();
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
    this.lastReset=millis();
    this.ttl = random(20,60);
    this.preOffsetPosition = createVector(random(0,boardSize.x),random(0,boardSize.y));
  }
}
