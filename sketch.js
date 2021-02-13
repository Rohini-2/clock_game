function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  // calculating time using predefined func from p5.js
  hr=hour();
  mn=minute();
  sc=second();
  sc=second();
  
    noStroke();
  }
  
  function draw() {
    background(0);
    // Scale the mouseX value from 0 to 720 to a range between 0 and 175
    let c = map(mouseX, 0, width, 0, 175);
    // Scale the mouseX value from 0 to 720 to a range between 40 and 300
    let d = map(mouseX, 0, width, 40, 300);
    fill(255, c, 0);
    ellipse(width/2, height/2, d, d);
    //  drawing seconds hand
      //rotate the hand based on angle calculated
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);  
    //drawing hours hand
      //rotate the hand based on angle calculated
    stroke(255,0,0);
    strokeWeight(7);
    line(10,10,300,10); 
   // drawing minutes hand
    //rotate the hand based on angle calculated
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0); 
   
  drawSprites();
}
 function arc(){
    arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
    
 }
 
 
 