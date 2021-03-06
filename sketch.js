const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(890, 265, 220, 20);
    ground2 = new Ground(590, 465, 220, 20);

	box1 = new Box(830, 235, 30, 40);
	box2 = new Box(860, 235, 30, 40);
	box3 = new Box(890, 235, 30, 40);
	box4 = new Box(920, 235, 30, 40);
	box5 = new Box(950, 235, 30, 40);
	box6 = new Box(860, 195, 30, 40);
	box7 = new Box(890, 195, 30, 40);
	box8 = new Box(920, 195, 30, 40);
    box9 = new Box(890, 155, 30, 40);
    box10 = new Box(530, 435, 30, 40);
	box11 = new Box(560, 435, 30, 40);
	box12 = new Box(590, 435, 30, 40);
	box13 = new Box(620, 435, 30, 40);
	box14 = new Box(650, 435, 30, 40);
	box15 = new Box(560, 395, 30, 40);
	box16 = new Box(590, 395, 30, 40);
	box17 = new Box(620, 395, 30, 40);
	box18 = new Box(590, 355, 30, 40);

    polygon = new Polygon(200,250);

    slingshot = new SlingShot(polygon.body,{x:200, y:250});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    ground1.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    polygon.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        Matter.Body.setPosition(polygon.body, {x: 200, y: 250});
        slingshot.attach(polygon.body);
    }
}