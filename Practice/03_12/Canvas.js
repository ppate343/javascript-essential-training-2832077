
class Canvas {
    constructor(
        //defining parameters
        colour,
        size,
        shape,
        material,
        complete
    ) {
        //defining properties
        this.colour = colour;
        this.size = size;
        this.shape = shape;
        this.material = material,
            this.complete = complete;
    }
    //adding methods like properties 
    changeColour(newColour) {
        this.colour = newColour;
    }
    changeSize(newSize) {
        this.size = newSize;
    }
}

export default Canvas; 