class Actor
{
  constructor(x,y,radius)
  {
    this.preOffsetPosition = createVector(x,y);
    this.postOffsetPosition = createVector(x,y);
    this.radius = radius;
    this.isColliding = false;
  }

  checkCollision(object)
  {
    return dist(this.postOffsetPosition.x,this.postOffsetPosition.y,object.postOffsetPosition.x,object.postOffsetPosition.y) < this.radius/2 + object.radius/2
  }


}
