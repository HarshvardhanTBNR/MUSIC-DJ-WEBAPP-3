song1="";
song2="";

leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

function preload(){
song1=loadSound("mighty morphin power rangers.mp3");
song2=loadSound("harry-potter-theme-song.mp3");
}

function setup(){
canvas=createCanvas(500,400);
canvas.position(400,180);
video=createCapture(VIDEO);
video.hide();
}
    
function draw(){
image(video,0,0,500,400);
fill("#FF000");
stroke("FF000");
circle(leftWristX,leftWristY,20);
circle(rightWristX,rightWristY,20);
}

function gotPoses(results){
if(results.length>0){
console.log(results);
}
    
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
    
console.log("Left wrist X = "+leftWristX);
console.log("Left wrist Y = "+leftWristY);
    
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
    
console.log("Right wirst X = "+rightWristX);
console.log("Right wrist Y = "+rightWristY);
    
}