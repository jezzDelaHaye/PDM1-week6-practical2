let counter = 0;
/**
 * A class representing a UI button.
 */
class Button 
{

    x;
    y;
    width;
    height;
    label;

    constructor(x, y, width, height, label) 
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.label = label;

    }

    /**
     * Draws the button at its specified location and dimensions. Also 
     * displays the label on the button. If the mouse is over the button, 
     * the button's fill colour will be blue (0, 0, 255). Otherwise, it 
     * will be black.
     */
    draw() 
    {
        if (this.#mouseIsOver())
        {
            fill(0,0,255)
        }
        else
        {
            fill(0)
        }
        rect(this.x,this.y,this.width,this.height);
        fill(172.5)
        textSize(40)
        textAlign(CENTER,CENTER)
        text(this.label,this.x+(this.width/2),this.y+(this.height/2))
    }

    /**
     * A private method that checks if the mouse is over the button. 
     * @returns {boolean} True if the mouse is over the button, false otherwise.
     */
    #mouseIsOver() 
    {
        if (mouseX > (this.x + this.width) || mouseX < this.x|| mouseY > (this.y + this.height) || mouseY < this.y)
        {
            return(false);
        }
        else
        {
            return(true);
        }
    }

    /**
     * Checks if button is clicked--the mouse is over the button and the mouse 
     * is currently pressed.
     * @returns {boolean} True if the button is clicked, false otherwise.
     */
    clicked() 
    {     
        if (this.#mouseIsOver() && mouseIsPressed)
        {
            counter++;
            console.log(counter);
            return(true)
        }
        else
        {
            return(false)
        }
    }
}
function setup()
{
    createCanvas(400,400)
}
let button = new Button(100,100,200,100,"button");
function draw()
{
    background(172.5);
    button.clicked()
    button.draw();
    fill(0)
    textSize(20)
    text("button has been pressed " + counter + " times!", 200,300)
}

