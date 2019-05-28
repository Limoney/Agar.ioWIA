class Actor
{
  constructor(x,y)
  {
    this.pos = createVector(x,y);
    this.acc = createVector();
    this.vel = createVector();
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
    this.pos.add(diff);

    if(this.pos.x<0 + width/2) this.pos.x = width/2;
    if(this.pos.y<0 + height/2) this.pos.y = height/2;
    if(this.pos.x>boardSize.x + width/2) this.pos.x = boardSize.x + width/2;
    if(this.pos.y>boardSize.y + height/2) this.pos.y = boardSize.y + height/2;

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
    ellipse(this.pos.x-camera.offset.x-width/2,this.pos.y-camera.offset.y-height/2,this.r,this.r);
    push();
      translate(this.pos.x-camera.offset.x-width/2,this.pos.y-camera.offset.y-height/2);
      fill(255,0,0);
      let offset = createVector(cos(this.angle*.0001),sin(this.angle*.0001)).setMag(1);
      offset.mult((this.r/2 + this.rectSize.x/2));
      rotate(this.angle);
      rect(offset.x,offset.y,this.rectSize.x,this.rectSize.y);
    pop();
  }

  checkCollision(object)
  {
    //console.log(dist(this.pos.x,this.pos.y,object.pos.x,object.pos.y));
    //console.log(this.r + object.r);
    return dist(this.pos.x-camera.offset.x-width/2,this.pos.y-camera.offset.y-height/2,object.pos.x,object.pos.y) < this.r/2 + object.r/2
  }
}
