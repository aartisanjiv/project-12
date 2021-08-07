var garden,rabbit;
var gardenImg,rabbitImg;
var apple , appleImg ;
var leaf , leafImg , orangeLeaf , orangeLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = World.mouseX ;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprite = Math.round(random(0,2));
  if(frameCount % 80 == 0){
    if(select_sprite == 1){
     createApples();
    }
    if(select_sprite == 2){
      createOrange();
    }
    else{
      createLeaf();
    }
  }

  drawSprites();
}

function createApples(){
  apple = createSprite(random(10,300) , 20,21);
  apple.scale = 0.05;
  apple.addImage(appleImg);
  apple.velocityY = 4 ;
}

function createLeaf(){

  leaf = createSprite(random(20 , 300),20,21);
  leaf.scale = 0.05;
  leaf.addImage(leafImg);
  leaf.velocityY = 4 ;  
}

function createOrange(){

  orangeLeaf = createSprite(random(30 , 300),20,25);
  orangeLeaf.scale = 0.06 ;
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.velocityY = 4 ;

}