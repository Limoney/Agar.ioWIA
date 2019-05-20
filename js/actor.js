class Actor
{
  constructor()
  {
    this.pos = createVector(width/2,height/2);
    this.acc = createVector();
    this.vel = createVector();
    this.r = 50;
    this.rectPos = this.pos;
    this.rectSize = createVector(this.r/3,this.r/3)
    this.angle = 0;
    this.angle2 = 0;
  }

  update()
  {
    let mouse  = createVector(mouseX,mouseY);
    let sth =  dist(mouseX,mouseY,this.pos.x,this.pos.y) > 1 ? mouse.sub(this.pos).setMag(2) : createVector();
    this.vel = sth;
    this.vel.add(this.acc)
    this.pos.add(this.vel);
    this.acc.mult(0);
    //this.r+=0.1;
    this.angle+=5;
  }

  show()
  {
    push();
    translate(this.pos.x,this.pos.y);
    fill(255,255,0);
    noStroke();
    ellipse(0,0,this.r,this.r);
    push();
      // translate(this.pos.x,this.pos.y);
      fill(255,0,0);
      let offset = createVector(cos(this.angle*.0001),sin(this.angle*.0001)).setMag(1);
      offset.mult(this.r/2 + this.rectSize.x/2);
      //offset =createVector();
      rotate(this.angle);
      rect(offset.x,offset.y,this.rectSize.x,this.rectSize.y);
    pop();
    pop();
  }
}
