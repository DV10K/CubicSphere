
function setup() {
	createCanvas(1920, 1080, WEBGL);
	
background(0);
	const myCamera = createCamera();
	myCamera.setPosition(500, -500, 500);
	myCamera.lookAt(0, 0, 0);
frameRate(20)
  
}


function draw() {
 
  rotateX(sin(frameCount)*random(100))
  rotateY(cos(frameCount)*random(100))
  rotateZ(random(100))
	fill(random(0,255),random(0,255),random(0,255))
noStroke()
  translate(0,0,355)
box(25)
  }
function mousePressed() {
 let fs = fullscreen();
 fullscreen(!fs);
}
