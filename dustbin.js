    
	class Box {
		constructor(x, y, width, height) {
		  var options = {
			  'restitution':0.8,
			  'friction':0.3,
			  'density':1.0
		  }
		  var BoxR ;
		  var BoxL;
		  var BoxG;
		  BoxR = createSprite(450,650,20,50);
	BoxL= createSprite(350,650,20,50);
	BoxG =createSprite(400,665,100,20);
	BoxR.shapeColor=color(255)
	BoxL.shapeColor=color(255)
	BoxG.shapeColor=color(255)
		}
		display(){
		  var pos =this.body.position;
		  rectMode(CENTER);
		  fill(255);
		  rect(pos.x, pos.y, this.width, this.height);
		  pop();
		}
	  };
	  