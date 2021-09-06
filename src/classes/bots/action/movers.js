import BaseBot from "../baseBot"

export default class Mover extends BaseBot {
    constructor(moveLength, position, interval, form, strategy) {
        super(position, interval, form)
        this.moveLength = moveLength
        this.strategy = strategy
    }

    //to the strategy
    // move = (direction, moveBot, moveLength, position) => {
    //     const newPosition = [...position]
    //     if (direction <= 2.5) {
    //         newPosition[0] -= moveLength
    //         moveBot(newPosition[0], newPosition[1])
    //     } else if (direction >= 2.5 && direction <= 5) {
    //         newPosition[1] -= moveLength
    //         moveBot(newPosition[0], newPosition[1])
    //     } else if (direction > 5 && direction <= 7.5) {
    //         newPosition[0] += moveLength
    //         moveBot(newPosition[0], newPosition[1])
    //     } else {
    //         newPosition[1] += moveLength
    //         moveBot(newPosition[0], newPosition[1])
    //     }
    // }
}
