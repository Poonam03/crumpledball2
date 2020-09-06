class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
        this.width=140;
		this.height=140;
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