var canvas;
var music;
var surface1,surface2,surface3,surface4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(100,590,180,20);
surface1.shapeColour="red";
surface2 = createSprite(300,590,180,20);
surface2.shapeColour="green";
surface3 = createSprite(500,590,180,20);
surface3.shapeColour="blue";
surface4 = createSprite(700,590,180,20);
surface4.shapeColour="yellow";

    //create box sprite and give velocity
ball = createSprite(random(10,750),300,20,20);
ball.shapeColour="white";
ball.velocityX=3;
ball.velocityY=3;
}

if(isTouching(ball,surface4)){
    music.play()
        ball.shapeColour="yellow";
        bounceOff(ball,surface4)}

else if(isTouching(ball,surface3)){
music.stop()
    ball.shapeColour="blue";
bounceOff(ball,surface3)}

else if(isTouching(ball,surface2)){
music.stop()
ball.shapeColour="green";
bounceOff(ball,surface2)
ball.velocityX=0;
ball.velocityY=0;}

else if(isTouching(ball,surface1)){
music.stop()
ball.shapeColour="red";
bounceOff(ball,surface1)}

if(ball.y<0){
music.stop()
ball.velocityY=3
}

function draw() {
    background(rgb(169,169,169));

    if(ball.x<0){
music.stop()
ball.velocityX=3;}

else if(ball.x>800){
    music.stop()
    ball.velocityX=-3}

    
    //create edgeSprite
   


    //add condition to check if box touching surface and make it box
  

createEdgeSprites();
        
    
    drawSprites();
}
