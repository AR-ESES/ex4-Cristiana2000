let espLarg = 20;
let espAltura = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {
  
  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg, j * height / espAltura)
      translate(-55,-45)
      scale(0.13);
      noStroke();
   
      
     
 
fill(222,184,135);
rect(80, 180, 240, 40, 50); 
fill(209,135,82);
rect(90, 190, 220, 20, 50); 
fill(random (222,184,135));
rect(170, 270, 55, 55, 20); 
circle(200, 200, 200);    
fill(220,220,220);
circle(155, 180, 40); 
circle(238, 180, 40); 
fill(0,0,0);
circle(155, 180, 20); 
circle(238, 180, 20); 
fill(random(160,82,45));
arc(198,225, 80, 80, 0, PI, CHORD);
fill(random(209,135,82)); 
square(180, 180, 33, 45, 64,10, 9); 
fill (229, 57, 53)
rect(110, 310, 180, 295, 40); 
fill (192,192,192)
rect(110, 470, 180, 140, 10); 
fill(0,0,0)
rect(110,470,180,10); 
fill (222,184,135)
rect(75, 360, 30, 120, 30); 
rect(295, 360, 30, 120, 30); 
fill (229, 57, 53)
rect(60, 310, 280, 70, 30); 
fill(222,184,135)
arc(198,310, 100, 90, 0, PI, CHORD); 
fill (0,0,0)
rect(195, 475, 4, 135, 0); 
fill(255,255,255)
rect (171,225,55,5,1); 
fill(160,82,45);
arc(195, 90, 80, 80, 12, PI + QUARTER_PI, PIE); 
arc(165, 90, 80, 80, 12, PI + QUARTER_PI, PIE); 
arc(230, 90, 80, 80, 12, PI + QUARTER_PI, PIE); 
fill (0,0,0); 
ellipse(246,610, 90, 45); 
ellipse(152,610, 90, 45); 

      pop();
    }
  }
}