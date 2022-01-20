function preload(){
}

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(300,300);
    canvas.center();
    canvas.position (560, 150);
}

function draw(){
}

function take_snapshot(){
    save("my_picture.png");
}
