//Topic 1.1 
//Object orientation revisted
//part one

var flying_saucer_x;
var flying_saucer_y;


function setup()
{
    createCanvas(800,600);
    noStroke();

    flying_saucer_x = 200;
    flying_saucer_y = 100;


}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    
    //draw the flying saucer
    fill(175,238,238);
    arc(flying_saucer_x,flying_saucer_y,75,100,PI,TWO_PI)
    fill(150);
    arc(flying_saucer_x,flying_saucer_y,150,50,PI,TWO_PI);
    fill(50);
    arc(flying_saucer_x,flying_saucer_y,150,25,0,PI);
    
}