class Actor
{
  constructor(x,y,radius)
  {
    this.preOffsetPosition = createVector(x,y);
    this.postOffsetPosition = createVector(x,y);
    this.radius = radius;
    this.isColliding = false;
    this.closestFood = null;
    this.closestFoodDist = Infinity;
  }

  checkCollision(object)
  {
    let distance = dist(this.postOffsetPosition.x,this.postOffsetPosition.y,object.postOffsetPosition.x,object.postOffsetPosition.y);
    this.closestFoodDist = min(distance,this.closestFoodDist);
    if(this.closestFoodDist==distance) this.closestFood = object;
    return distance < this.radius/2 + object.radius/2
  }


}
