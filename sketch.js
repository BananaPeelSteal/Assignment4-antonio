


 
let sketch1 = function(p){
  

  p.setup = function() {
var canvas = p.createCanvas(1000,1000);
p.background(0);
    canvas.parent('lightswitch');

}

p.draw = function(){
x= 300
  y= 500
  p.fill(0,255)
  //on and off sequence based on mouse position on x axis
  if (p.mouseX > 500){
   p.fill(255,255,0,50);
    x=500
    
  }
 p.noStroke(); 
//light beam
p.beginShape();
p.vertex(500,0);
p.vertex(0,1000);
p.vertex(1000,1000);
p.endShape(p.CLOSE);

p.stroke(24);
p.stroke('white');
p.fill(0,255);
 //on and off sequence based on mouse position on x axis
if (p.mouseX > 500) {
	p.fill(255,255,0,50);
	}
//light bulb  
p.ellipse(500,0,156,148);  
p.noStroke();
p.fill(255,255);
p.rect(300,500,400,200);
  p.fill(0,0,0,50);
  p.rect(x,y,200,200);
  p.fill(255,0,0);
  p.text('off',350,620);
  p.text('on',600,620);
  
  p.textSize(40); 
}
}

var sketch2 = function(p){
  
  p.setup = function () {
    var canvas = p.createCanvas (1000,1000);
    canvas.parent('lamp');
  }
p.draw = function (){
  
  p.background(0);
  //lamp
  p.fill(255)
    p.rect(650,350,20,200);
   p.fill(103,151,185);
  p.rect(400,350,200,500);
  p.fill(103,185,146);
  p.beginShape();
  p.vertex(305,140);
  p.vertex(680,140);
  p.vertex(800,433);
  p.vertex(190,433);
  p.endShape(p.CLOSE);

  //lamp light
  p.noStroke();
  p.fill(255,255,0,0);
    if (p.mouseX > 600 && p.mouseY > 550) {
	p.fill(255,255,0,50);
	}
  p.beginShape();
  p.vertex(800,433);
  p.vertex(190,433);
  p.vertex (90,600);
  p.vertex(900,600);
  p.endShape(p.CLOSE);
 
  

  
}
}
var sketch3 = function(p){

   p.setup = function () {
    var canvas = p.createCanvas (1000,1000);
    canvas.parent('flashlight');
     //setting up for function of mouse press restricted to canvas element
     canvas.mousePressed(light);
     //alpha value for light
     d = 0;
  }
  //function of mouse press in this case setting the alpha value of the light
  function light(){
    d = 50
  }
  p.draw = function (){
  
  p.background(0);
    p.noStroke();
    p.fill(255,255,0,d);
      p.beginShape();
    p.vertex(0,418);
    p.vertex(0,663);
    p.vertex(451,541);
    p.endShape(p.CLOSE);
  p.fill(196, 196, 196);
p.rect(392,483,423,117);
    p.rect(330,453,62,178);
    p.fill(208,95,95);
    p.rect(563,458,104,40);
  
  }
  
}
//instances
let myfirstsketch = new p5(sketch1);
let mysecondsketch = new p5(sketch2);
let mythirdsketch = new p5(sketch3);
