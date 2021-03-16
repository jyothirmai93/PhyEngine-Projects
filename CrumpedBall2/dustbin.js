class dustbin{
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=20;
		this.angle=0;	
		this.image=loadImage("dustbingreen.png")

		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.dustbinHeight, {isStatic:true})
		World.add(world, this.bottomBody)

	}
	display(){
			var posBottom=this.bottomBody.position;

			push()
			translate(posBottom.x, posBottom.y);
			angleMode(RADIANS)
			imageMode(CENTER)
			image(this.image, 0,-100,this.dustbinWidth, this.dustbinHeight+200)
			pop()

	}

}