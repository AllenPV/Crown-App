noseX = 0;
noseY = 0;

function preload() {
    crown = loadImage("https://th.bing.com/th/id/Re27cb12b8726dab57259c501deda7aa0?rik=iv1IjbqGrLx2xw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fblack-crown-transparent-background%2fblack-crown-transparent-background-15.png&ehk=1OV8DTWx0mu9S2%2bs25cuWfDVz1H3gBIyKivkV9jimFE%3d&risl=&pid=ImgRaw");
}

function setup() {
    Canvas = createCanvas(300, 300);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.size(300, 300);
    Video.hide();
    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.rightEar.x-27;
        noseY = results[0].pose.leftEar.y-160;
    }
}

function draw() {
    image(Video, 0, 0, 300, 300);
    image(crown, noseX, noseY, 130, 101);
}

function Take_Snapshot() {
    save("Photo.png");
}