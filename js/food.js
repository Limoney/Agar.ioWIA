class Food
{
  constructor(x,y)
  {
    this.pos = createVector(x,y);
  }

  show()
  {
    fill(138,180,240);
    ellipse(this.pos.x,this.pos.y,20,20);
  }
}
