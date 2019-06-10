class Player extends Actor
{
  constructor(x,y,radius,col)
  {
    super(x,y,radius)
    this.rectPos = this.pos;
    this.rectSize = this.radius/3;
    this.rotationAngle=0;
    this.growSpeed = 0.05;
    this.mass = 1;
    this.speed = 2.5;
    this.ballColor = col;
  }

  update()
  {
    if(this.grow())camera.zoom(camera.zoomValue-0.015);
    let center = createVector(width/2,height/2);
    let mouse = createVector(mouseX,mouseY);
    let diff=mouse.sub(center).setMag(this.speed/this.mass);
    this.preOffsetPosition.add(diff);

    this.checkBoundaries();

    for(let food of foods)
    {
      if(this.checkCollision(food)) if(this.eat(food)) camera.zoom(camera.zoomValue+0.015);
    }
    this.rotationAngle+=2;
  }

  show(camera)
  {
    fill(this.ballColor);
    noStroke();
    this.postOffsetPosition.x = this.preOffsetPosition.x-camera.offset.x-width/2;
    this.postOffsetPosition.y = this.preOffsetPosition.y-camera.offset.y-height/2;
    ellipse(this.postOffsetPosition.x,this.postOffsetPosition.y,this.radius,this.radius);
    push();
      let offset = createVector(cos(this.rotationAngle),sin(this.rotationAngle)).setMag(1);
      offset.mult((this.radius/2 + this.rectSize/2)*1.2);
      this.rectPos = createVector(this.postOffsetPosition.x+offset.x,this.postOffsetPosition.y+offset.y);
      translate(this.rectPos.x,this.rectPos.y);
      fill(255,0,0);
      //no time for better collision
      //rotate(this.rotationAngle);
      rect(0,0,this.rectSize,this.rectSize);
    pop();
  }

  checkBoundaries()
  {
    if(this.preOffsetPosition.x<0 + width/2) this.preOffsetPosition.x = width/2;
    if(this.preOffsetPosition.y<0 + height/2) this.preOffsetPosition.y = height/2;
    if(this.preOffsetPosition.x>boardSize.x + width/2) this.preOffsetPosition.x = boardSize.x + width/2;
    if(this.preOffsetPosition.y>boardSize.y + height/2) this.preOffsetPosition.y = boardSize.y + height/2;
  }

  eat(object)
  {
    if(object instanceof Food)
    {
      object.reset();
      this.mass*=0.85;
      this.radius*=0.95;
      this.rectSize*=0.95;
      if(!(this instanceof Bot)) score+=0.1;
      if(this.radius*camera.zoomValue<1/4*width)
      {
        return true;
      }

    }
    else if(!(object instanceof Bot))
    {
      player.reset();
      score = 0;
    }
    else
    {
      object.reset();
      score++;
    }
  }

  grow()
  {
    if(this.mass<this.speed+1)this.mass+=this.growSpeed/10;
    this.radius+=this.growSpeed;
    this.rectSize+=this.growSpeed/2;
    if(this.radius*camera.zoomValue>1/4*width)
    {
      return true;
    }
  }

  rectAABB(object)
  {
    //fixme naprawić to coś
    return ((this.rectPos.x - this.rectSize/2 < object.rectPos.x + object.rectSize/2 &&
             this.rectPos.x + this.rectSize/2 > object.rectPos.x - object.rectSize/2 ) &&
            (this.rectPos.y - this.rectSize/2 < object.rectPos.y + object.rectSize/2 &&
             this.rectPos.y + this.rectSize/2 > object.rectPos.y - object.rectSize/2))
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
    this.mass = 1;
    this.radius = this.radiusCopy;
    this.rectSize = this.radius/3;
  }
}
