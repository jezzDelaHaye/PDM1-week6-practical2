class Star
{
    x;
    y;

    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
    draw()
    {
        fill(255, 234, 0);
        noStroke();
        triangle(this.x, this.y - 50, this.x - 20, this.y, this.x + 20, this.y);
        triangle(this.x - 50, this.y - 20, this.x, this.y - 20, this.x, this.y + 10);
        triangle(this.x + 50, this.y - 20, this.x, this.y - 20, this.x, this.y + 10);
        triangle(this.x - 20, this.y - 5, this.x, this.y + 10, this.x - 35, this.y + 30);
        triangle(this.x, this.y + 10, this.x + 20, this.y - 5, this.x + 35, this.y + 30);
    }
    shoot(speed)
    {
        this.x += speed;

    }
    fall(speed)
    {
        this.y += speed;
    }
}
let fallingStar = new Star(200,0);
let shootingStar = new Star(0,200);

function setup() 
{
    createCanvas(400, 400);
}
function draw() 
{
    background(0);
    shootingStar.shoot(5);
    shootingStar.draw();
    fallingStar.fall(5);
    fallingStar.draw();
}
