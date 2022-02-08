x=0;
y=0;
drawcircle="";
drawrectangle="";
function setup(){
    canvas=createCanvas(900,600);
}
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="System is listening. Please speak."
    recognition.start();
}
recognition.onresult=function(a){
    console.log(a);
    b=a.results[0][0].transcript;
    document.getElementById("status").innerHTML="Speech has been recognized as: "+b;
    if(b=="circle"){
        console.log("circle");
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        drawcircle="set";
        document.getElementById("status").innerHTML="Started drawing circle.";
    }
    if(b=="rectangle"){
        console.log("rectangle");
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        drawrectangle="set";
        document.getElementById("status").innerHTML="Started drawing rectangle.";
    }   
}
function draw(){
    if(drawcircle=="set"){
        r=Math.floor(Math.random()*100);
        circle(x,y,r);
        document.getElementById("status").innerHTML="Circle is drawn.";
        drawcircle="";
    }
    if(drawrectangle=="set"){
        w=Math.floor(Math.random()*100);
        h=Math.floor(Math.random()*100);
      rect(x,y,w,h);
        document.getElementById("status").innerHTML="Rectangle is drawn.";
        drawrectangle="";
}

}

