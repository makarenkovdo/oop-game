import BaseBot from "../baseBotClass"

export default class Mover extends BaseBot {
    constructor(moveLength, position, interval, form, strategy) {
        super(position, interval, form)
        this.moveLength = moveLength
        this.strategy = strategy
    }
}
