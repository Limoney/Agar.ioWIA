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

    if(this.pos.x<0) this.pos.x = 0;
    if(this.pos.y<0) this.pos.y = 0;
    if(this.pos.x>boardSize.x) this.pos.x = boardSize.x;
    if(this.pos.y>boardSize.y) this.pos.y = boardSize.y;


    this.angle+=5;
  }

  show(camera)
  {
    fill(255,255,0);
    noStroke();
    ellipse(this.pos.x-camera.offset.x,this.pos.y-camera.offset.y,this.r/camera.zoomValue,this.r/camera.zoomValue);
    push();
      translate(this.pos.x-camera.offset.x,this.pos.y-camera.offset.y);
      fill(255,0,0);
      let offset = createVector(cos(this.angle*.0001),sin(this.angle*.0001)).setMag(1);
      offset.mult((this.r/2 + this.rectSize.x/2)/camera.zoomValue);
      rotate(this.angle);
      rect(offset.x,offset.y,this.rectSize.x/camera.zoomValue,this.rectSize.y/camera.zoomValue);
    pop();
  }
}
