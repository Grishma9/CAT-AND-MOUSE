var background,gardenImage,cat,mouse,catImage,mouseImage;
function preload() {
 catImage=loadImage("cat1.png","cat2.png","cat3.png","cat4.png");
 gardenImage=loadImage("garden.png");
 mouseImage=loadImage("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
}

function setup(){
    createCanvas(400,400);
    background = createSprite(200,200);
    background.addImage=gardenImage;
    //create tom and jerry sprites here
 cat = createSprite(200,200,20,20);
 mouse = createSprite(200,100,20,20);
 
}

function draw() {
    
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
