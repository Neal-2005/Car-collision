var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 350, 20, 10);
  car1=createSprite(50, 200, 20, 10);
  car2=createSprite(50, 50, 20, 10);

  wall=createSprite(500,350,10,50);
  wall1=createSprite(500,200,10,50);
  wall2=createSprite(500,50,10,50);
  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX = speed;
  car1.velocityX = speed;
  car2.velocityX = speed;


  if (wall.x-car.x < (car.width+ wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5* weigth * speed * speed / 22509;
    if (deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }

    if (deformation<180 && deformation>100)
    {

    }
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}