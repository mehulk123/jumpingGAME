var music;
var rectimage1;
var rectimage2;
var rectimage3;
var rectimage4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    R1 = createSprite(110,580,180,80);
    R1.shapeColor = "orange";
    R2 = createSprite(300,580,180,80);
    R2.shapeColor = "blue";
    R3 = createSprite(490,580,180,80);
    R3.shapeColor = "green";
    R4 = createSprite(680,580,180,80);
    R4.shapeColor = "purple";
     Sq1 = createSprite(400,300,30,30);
     Sq1.shapeColor = "black"
     Sq1.velocityY = 4
     Sq1.velocityX = -4
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    if(R1.isTouching(Sq1) && Sq1.bounceOff(R1)){
        Sq1.shapeColor = "limegreen"
    }
    
    if(R2.isTouching(Sq1) && Sq1.bounceOff(R2)){
        Sq1.shapeColor = "skyblue"
    }

    if(R3.isTouching(Sq1) && Sq1.bounceOff(R3)){
        Sq1.shapeColor = "darkgreen"
    }

    if(R4.isTouching(Sq1) && Sq1.bounceOff(R4)){
        Sq1.shapeColor = "red"
    }

    













    //add condition to check if box touching surface and make it box
    drawSprites();
}
