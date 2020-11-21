var bullet, wall,thickness;
var speed,weight;
var damage;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(0,200,50,10);
  wall=createSprite(1200,200,thickness,200);
  bullet.velocityX=speed;
}
function draw() {
  background(0);  
  wall.shapeColor=color(80,80,80);
  bullet.shapeColor="white";

  
  if(bullet.isTouching(wall)){
    bullet.velocityX=0;
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    console.log(damage);
    if(damage<=10){
      wall.shapeColor="green";
    }
  
  else if(damage>10){
    wall.shapeColor="red";
  }
  }

  bullet.depth=wall.depth+1;
  drawSprites();
}