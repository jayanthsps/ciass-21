var canvas;
var music;
var block1,block2,block3,block4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1=createSprite(0,580,360,30)
    block1.shapeColor="red";
    
    block2=createSprite(295,580,200,30)
    block2.shapeColor="green"

    block3=createSprite(515,580,200,30)
    block3.shapeColor="black"

    block4=createSprite(740,580,220,30)
    block4.shapeColor="yellow"

    box=createSprite(random(25,700),100,30,30)
    box.shapeColor="white"
    box.velocityX=-5
    box.velocityY=5

   



}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges= createEdgeSprites();
    
    box.bounceOff(edges);

    if(box.isTouching(block1) && box.bounceOff(block1)){
     box.shapeColor=block1.shapeColor;
     music.play()

    }

    if(box.isTouching(block2) && box.bounceOff(block2)){
        box.shapeColor=block2.shapeColor;
        music.play()
    }

    if(box.isTouching(block3) && box.bounceOff(block3)){
        box.shapeColor=block3.shapeColor;
        box.velocityX=0;
        box.velocityY=0;
        
        music.stop()
    }
    
    if(box.isTouching(block4) && box.bounceOff(block4)){
        box.shapeColor=block4.shapeColor;
        music.play()
    }
    
    
drawSprites();

    //add condition to check if box touching surface and make it box
}
