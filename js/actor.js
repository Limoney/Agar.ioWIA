class Actor
{
  constructor()
  {
    this.pos = createVector(width/2,height/2);
    this.acc = createVector();
    this.vel = createVector();
    this.r = 50;
    this.rectPos = this.pos;
    this.rectSize = createVector(this.r/2,this.r/2)
    this.angle = 0;
    this.angle2 = 0;
  }

  update()
  {
    let mouse  = createVector(mouseX,mouseY);
    let sth =  dist(mouseX,mouseY,this.pos.x,this.pos.y) > 1 ? mouse.sub(this.pos).setMag(2) : createVector();
    //this.vel = sth;
    this.vel.add(this.acc)
    this.pos.add(this.vel);
    this.acc.mult(0);
    //this.r+=0.1;
    this.angle+=1;
    this.angle2+=4;
  }

  show()
  {
    fill(255,255,0);
    noStroke();
    rect(this.pos.x,this.pos.y,this.r,this.r);
    push();
    translate(this.rectPos.x,this.rectPos.y)
    fill(255,0,0);
    let offset = createVector(cos(this.angle),sin(this.angle));
    offset.mult(this.r/2 + this.rectSize.x/2);
    rotate(this.angle);
    rect(offset.x,offset.y,this.rectSize.x,this.rectSize.y);
    pop();

  }
}
