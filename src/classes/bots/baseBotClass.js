export default class BaseBot {
    constructor(type, position, interval, moveLength, form, strategy) {
        this.type = type
        this.position = position
        // this.health = 0 //TODO
        this.interval = interval
        this.moveLength = moveLength
        this.form = form //the bridge realisation
        this.strategy = strategy
    }
}
