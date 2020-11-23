var bullet,wall;
 
var speed,weight;

var bre, wle;
var thickness;
thickness = random(22,83);
 
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  car=createSprite(50,200,50,50);
  car.shapeColor = "red";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet = createSprite(200,200,50,5);
  bullet.shapeColor = "white";
}
 
function draw() {
  background(255,255,255);  
  car.velocityX = speed;
 bullet.collide(wall);
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var df = 0.5 * weight * speed* speed/22509;
    if (df > 180) {
      car.shapeColor = "red";
    }
    if(df<180 && df>100) {
      car.shapeColor = "yellow";
    }
    if(df<100){
      car.shapeColor = "green";
	}
	
	if(hasCollided(bullet,wall)){
		bullet.velocityX=0;
		var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
		
		if (damage>10){
			wall.shapeColor = color(255,0,0);
		}

		if(damage<10){
			wall.shapeColor = color(0,255,0);	
		}
	}
 
    wall.destroy();
 
  }
 
  drawSprites();
}

function hasCollided(lbullet,lwall) {
 bre = lbullet.x + lbullet.width;
 wle = wall.x;
 if(bre>=wle){
	 return true;
 }
 return false;

}
