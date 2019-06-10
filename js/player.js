class Player extends Actor
{
  constructor(x,y,radius,col)
  {
    super(x,y,radius)
    this.preOffsetPosition = createVector(x,y);
    this.postOffsetPosition = createVector(x,y);
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
    if(this.grow())camera.zoom(camera.zoomValue-0.0025);
    let center = createVector(width/2,height/2);
    let mouse = createVector(mouseX,mouseY);
    let diff=mouse.sub(center).setMag(this.speed/this.mass);
    this.preOffsetPosition.add(diff);

    this.checkBoundaries();

    for(let food of foods)
    {
      if(this.checkCollision(food)) if(this.eat(food)) camera.zoom(camera.zoomValue+0.0025);
    }
    this.rotationAngle+=5;
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
      if(this.radius*camera.zoomValue<1/8*width)
      {
        return true;
      }

    }
    else if(!(object instanceof Bot))
    {
      //death
    }
    else
    {
      object.reset();
      score++;
    }
  }

  grow()
  {
    if(this.mass<3)this.mass+=this.growSpeed/10;
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
    return (this.rectPos.x - this.rectSize > object.rectPos.x - object.rectSize ||
           this.rectPos.x + this.rectSize < object.rectPos.x + object.rectSize);
  }
}
/*

return (this.rectPos.x + this.rectSize < object.rectPos.x - object.rectSize &&
       this.rectPos.x - this.rectSize > object.rectPos.x + object.rectSize &&
       this.rectPos.y + this.rectSize < object.rectPos.y - object.rectSize &&
       this.rectSize.y - this.rectSize > object.rectPos.y + object.rectSize);

*/
