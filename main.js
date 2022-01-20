function preload(){
}

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(300,300);
    canvas.center();
}

function draw(){
}

function take_snapshot(){
    save("my_picture.png");
}
