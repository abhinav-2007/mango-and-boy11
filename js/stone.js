class stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:1,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/stone.png")
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var stonepos=this.body.position;
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			// strokeWeight(4);
			// fill("blue")
			// //imageMode(CENTER);
			// //image(this.image, 0,0,this.r, this.r)
			// ellipse(0,0,this.r, this.r);
			// pop()
			rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
	}

}