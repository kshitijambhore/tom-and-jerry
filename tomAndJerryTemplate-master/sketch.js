
function preload() {
    //load the images here
    cimg=loadImage("images/cat1.png")
    mimg=loadImage("images/mouse1.png")
    gimg=loadImage("images/garden.png")
    cimg2=loadImage("images/cat2.png")
    mimg2=loadImage("images/mouse2.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600)
cat.addImage(cimg)
cat.scale=0.2

mouse=createSprite(200,600)
    mouse.addImage(mimg)
mouse.scale=0.1

}

function draw() {

    background(gimg);
    //Write condition here to evalute if tom and jerry collide

if(cat.x - mouse.x < (cat.width - mouse.width)/2){

cat.velocityX=0
cat.addImage(cimg)
cat.x = 300
cat.changeImge(cimg)
mouse.addImage(mimg)
mouse.changeImage(mimg)

}



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode === LEFT_ARROW){
mouse.addImage("mimg2")
mouse.frameDelay = 25;

}

if(keyCode === RIGHT_ARROW){
cat .addImage("cimg2")

}
}
