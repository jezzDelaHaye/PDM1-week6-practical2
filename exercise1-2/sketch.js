class Coordinate 
{
    x;
    y;
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
    isInBounds(x,y,width,height)
    {
        
        if (this.x < x || this.x > (x+width) || this.y < y || this.y > (y+height))
        {
            console.log("false")
            return false;
        }
        else
        {
            console.log("true")
            //
            return true;
            
        }
    }

}
function setup()
{
    createCanvas(400,400)
    background(172)
}
function draw()
{
}

function mousePressed()
{
    let coordinate = new Coordinate(mouseX,mouseY);
    if (coordinate.isInBounds(0,0,width,height) === true)
    {
        console.log("yay")
        ellipse(random(0,width),random(0,height),random(30,90),random(30,90))
    }

    console.log(coordinate)

    
}