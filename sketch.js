// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var bgImg;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    engine = Engine.create();
    world = engine.world;
    
    
    bgImg = loadImage("bg.jpg");
    var canvas = createCanvas(800,400);

    shooter = new Cannon(175,270,200,100);
    ground = new Ground(400,320,width,10);
    tanker = new Tanker(125,270,225,125);
    danger1 = new Danger(600,100,50,50);

    


}

function draw() {
// Remember to update the Matter Engine and set the background.
    Engine.update(engine);
    background(bgImg);

    shooter.display();
    tanker.display();
    danger1.display();
    
    
}


function keyReleased() {
    // Call the shoot method for the cannon.
}