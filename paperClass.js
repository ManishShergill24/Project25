class Paper{
constructor(x,y,radius){
var options ={

'restitution':0.2,
'friction':1,
'density':1.0

}
this.body = Bodies.circle(x,y,radius,options);
this.width = 50;
this.height = 50;
this.image = loadImage("paper.png");

World.add(world,this.body);

}
display(){

ellipseMode(CENTER);
fill("white");
ellipse(this.body.position.x,this.body.position.y,this.width,this.height)
imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,100,100)

}
}