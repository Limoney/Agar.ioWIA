class Player extends Actor
{
  constructor(x,y,radius)
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
  }

  update()
  {
    this.grow();
    let center = createVector(width/2,height/2);
    let mouse = createVector(mouseX,mouseY);
    let diff=mouse.sub(center).setMag(this.speed/this.mass);
    this.preOffsetPosition.add(diff);

    this.checkBoundaries();

    for(let food of foods)
    {
      if(this.checkCollision(food)) this.eat(food);
    }
    this.rotationAngle+=5;
  }

  show(camera)
  {
    fill(255,255,0);
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
      rotate(this.rotationAngle);
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
      this.mass*=0.9;
      this.radius*=0.98;
      this.rectSize*=0.98;
      if(this.radius*camera.zoomValue<1/8*width)
      {
        camera.zoom(camera.zoomValue+0.0025);
      }
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
      camera.zoom(camera.zoomValue-0.0025);
    }
  }
}
