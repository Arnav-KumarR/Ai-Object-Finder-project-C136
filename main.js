Status = "";
objects = [];
audio = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.position(500, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 640, 420)
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}