var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  orange=createSprite(300,100,70,70);
  orange.shapeColor="orange";
  banana=createSprite(50,100,70,70);
  banana.shapeColor="yellow";

  
  

  apple=createSprite(600,100,70,70);
  apple.shapeColor="red"
  grapes=createSprite(200,100,70,70);
  grapes.shapeColor="purple";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //function call
  if(isTouching(apple,movingRect)){
    movingRect.shapeColor = "blue";
    apple.shapeColor = "magenta";
  }
  else{
    movingRect.shapeColor = "green";
    apple.shapeColor = "red";
  }
  if(isTouching(grapes,movingRect)){
    movingRect.shapeColor = "blue";
    grapes.scale = 0.1;
  }
  else{
    movingRect.shapeColor = "green";
    grapes.scale=1
  }
  drawSprites(); 
}



