var girl,idle;




function preload(){
idle=loadAnimation("images/idle/Idle (1).png",
"images/idle/Idle (2).png",
"images/idle/Idle (3).png",
"images/idle/Idle (4).png",
"images/idle/Idle (5).png",
"images/idle/Idle (6).png",
"images/idle/Idle (7).png",
"images/idle/Idle (8).png",
"images/idle/Idle (9).png",
"images/idle/Idle (10).png",
"images/idle/Idle (11).png",
"images/idle/Idle (12).png",
"images/idle/Idle (13).png",
"images/idle/Idle (14).png",
"images/idle/Idle (15).png")


}


function setup(){
createCanvas(1500,700);

girl = createSprite(750,350,100,100);
girl.addAnimation("idleGirl",idle);

}

function draw(){
background("lightblue");



drawSprites()
}