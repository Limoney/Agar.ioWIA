class Bot extends Player
{
  constructor(x,y,radius,color)
  {
    super(x,y,radius,color);
    this.acc = createVector();
    this.vel = createVector();
    this.rotationAngle = random(0,360);
  }

  update(camera,player)
  {
    this.grow();
    this.checkBoundaries();
    if(dist(this.preOffsetPosition.x,this.preOffsetPosition.y,player.preOffsetPosition.x,player.preOffsetPosition.y)<350)
    {
      this.vel = player.preOffsetPosition.copy().sub(this.preOffsetPosition).setMag(this.speed/this.mass);
      if(this.rectAABB(player))
      {
        console.log("EAAAT");
        //player eats bot
        if(player.radius*1.15 > this.radius)
        {
          player.eat(this);
        }
      }
    }
    else
    {
      if(this.closestFood!=null)
      {
        this.vel = this.closestFood.postOffsetPosition.copy().sub(this.postOffsetPosition).setMag(this.speed/this.mass);
      }
    }
    this.vel.add(this.acc);
    this.preOffsetPosition.add(this.vel);

    for(let food of foods)
    {
      if(this.checkCollision(food)) this.eat(food);
    }
    this.rotationAngle+=5;
  }
  reset()
  {
    this.preOffsetPosition = createVector(random(0,boardSize.x),random(0,boardSize.y));
    this.postOffsetPosition = createVector(random(0,boardSize.x),random(0,boardSize.y));
    this.closestFood = null;
    this.closestFoodDist = Infinity;
    this.acc = createVector();
    this.vel = createVector();
    this.rotationAngle = random(0,360);
  }
}
