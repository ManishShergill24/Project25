class dustbin{
constructor(x,y,width,height){

var options={

'isStatic':true

}

this.body = Bodies.rectangle(x,y,100,20,options);
this.width = width;
this.height = height;
this.image = loadImage("dustbingreen.png");
World.add(world,this.body);
World.add(world,this.body);
World.add(world,this.body);

}

display(){

rectMode(CENTER);
fill("white");
rect(this.body.position.x,this.body.position.y,this.width,this.height);
imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y-25,165,200)

}

}