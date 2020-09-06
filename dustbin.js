class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
        this.width=140;
		this.height=140;
		//height is given 0 for bodies so that the paper goes in dustbin else it form a boundary around dustbin and does not let paper fall in dustbin
		this.body=Bodies.rectangle(x,y,this.width,0,{isStatic:true});
        this.image=loadImage("dustbingreen.png")
        World.add(world,this.body);
		
		
	}
	display()
	{
			
		//var=this.body.position;
		
			// translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255)
			// imageMode(CENTER);
			image(this.image, this.x,this.y,this.width, this.height)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			
			
	}

}
