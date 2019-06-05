class Actor
{
  constructor(x,y)
  {
    this.preOffsetPosition = createVector(x,y);
    this.postOffsetPosition = createVector(x,y);
    this.r = 50;
    this.rectPos = this.pos;
    this.rectSize = createVector(this.r/3,this.r/3)
    this.angle = 0;
  }

  update()
  {
    // this.vel.add(this.acc)
    // this.pos.add(this.vel);
    // this.acc.mult(0);
    // this.pos.x-=camera.pos.x;
    // this.pos.y-=camera.pos.y;
    let center = createVector(width/2,height/2);
    let mouse = createVector(mouseX,mouseY);
    let diff=mouse.sub(center).setMag(1.7);
    this.preOffsetPosition.add(diff);

    if(this.preOffsetPosition.x<0 + width/2) this.preOffsetPosition.x = width/2;
    if(this.preOffsetPosition.y<0 + height/2) this.preOffsetPosition.y = height/2;
    if(this.preOffsetPosition.x>boardSize.x + width/2) this.preOffsetPosition.x = boardSize.x + width/2;
    if(this.preOffsetPosition.y>boardSize.y + height/2) this.preOffsetPosition.y = boardSize.y + height/2;

    for(let tmp of foods)
    {
      if(this.checkCollision(tmp)) tmp.isColliding = true;
      else tmp.isColliding = false;
    }
    this.angle+=5;
  }

  show(camera)
  {
    fill(255,255,0);
    noStroke();
    this.postOffsetPosition.x = this.preOffsetPosition.x-camera.offset.x-width/2;
    this.postOffsetPosition.y = this.preOffsetPosition.y-camera.offset.y-height/2;
    ellipse(this.postOffsetPosition.x,this.postOffsetPosition.y,this.r,this.r);
    push();
      let offset = createVector(cos(this.angle),sin(this.angle)).setMag(1);
      offset.mult((this.r/2 + this.rectSize.x/2)*1.2);
      this.rectPos = createVector(this.postOffsetPosition.x+offset.x,this.postOffsetPosition.y+offset.y);
      translate(this.rectPos.x,this.rectPos.y);
      fill(255,0,0);
      rotate(this.angle);
      rect(0,0,this.rectSize.x,this.rectSize.y);
    pop();
  }

  checkCollision(object)
  {
    return dist(this.postOffsetPosition.x,this.postOffsetPosition.y,object.postOffsetPosition.x,object.postOffsetPosition.y) < this.r/2 + object.r/2
  }
}
