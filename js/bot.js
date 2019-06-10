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
      if(this.checkCollision(player))
      {
        //player eats bot
        if(player.radius*1.3 > this.radius)
        {
          player.eat(this);
          player.radius += this.radius/2;
          player.rectSize = player.radius/3;
        }
        else
        {
          this.eat(player);
          this.radius += player.radius/2;
          this.rectSize = this.radius/3;
        }
      }
      if(this.rectAABB(player))
      {
        score = 0;
        player.reset();
        this.reset();
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
    this.rotationAngle+=2;
  }
}
