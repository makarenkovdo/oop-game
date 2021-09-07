import BaseBot from "../baseBotClass"

export default class Shooter extends BaseBot {
    constructor(form) {
        super(form)
        this.moveLength = 20
    }

    //to the strategy
    shoot = (direction, moveBot, moveLength) => {
        // console.lo);
        if (direction <= 2.5) {
            moveBot(this.xPosition, this.yPosition)
        } else if (direction >= 2.5 && direction <= 5) {
            this.yPosition -= moveLength
            moveBot(this.xPosition, this.yPosition)
        } else if (direction > 5 && direction <= 7.5) {
            this.xPosition += moveLength
            moveBot(this.xPosition, this.yPosition)
        } else {
            this.yPosition += moveLength
            moveBot(this.xPosition, this.yPosition)
        }
    }
}
