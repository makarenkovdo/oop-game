import BaseBot from "../baseBotClass"

export default class Mover extends BaseBot {
    // TODO: unnecessary class => merge with BaseBot
    constructor(moveLength, position, interval, form, strategy) {
        super(position, interval, form)
        this.moveLength = moveLength
        this.strategy = strategy
    }
}
