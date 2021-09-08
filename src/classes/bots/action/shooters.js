import BaseBot from "../baseBotClass"

export default class Shooter extends BaseBot {
    constructor(form) {
        super(form)
        this.shotSpeed = 20
    }
}
