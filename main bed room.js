
objectdetector="";
status="";
img="";
var objects="";

function preload(){
    img=loadImage('bedroom.jpeg');
}

function draw(){
    image(img,0,0,400,500)
}



function setup(){
    canvas=createCanvas(450,500);
    canvas.position(700,200);
    objectdetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Satus : Detecting Objects";

}

function modelloaded(){
    console.log("Model has loaded");
    status =true;
    objectdetector.detect(img,gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}


function draw(){
    image(img,0,0,400,500)
    k=objects.length;
    for(i=0;i<k;i++){
        stroke('#fc1100');
        text(objects[i].label,objects[i].x+15,objects[i].y+15);
        noFill();
        stroke('#fc1100')
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}