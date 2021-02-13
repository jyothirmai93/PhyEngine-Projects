class rope{
	constructor(body1,body2)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;
		
		push()
		rectMode(CENTER)
		fill('black')
		strokeWeight(4);
		var Anchor1X=pointA.x
		var Anchor1Y=pointA.y
		var Anchor2X=pointB.x
		var Anchor2Y=pointB.y
		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
		pop()
	}

}