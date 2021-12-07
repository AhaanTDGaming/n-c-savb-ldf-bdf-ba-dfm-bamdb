nosex=0;
nosey=0;

function preload(){
    image=loadImage("https://i.postimg.cc/s23J4ym0/image.jpg");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center;
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video ,0,0,300,300);
    image(nosex,nosey,20,20);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PostNet Is Initialised');
}

function gotPoses(results){
    if (results.length>0) {
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("nose x ="+nosex);
console.log("nose y ="+nosex);
    }
}