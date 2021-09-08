//this is the fabric

import Mover from "../action/movers"
import MoversFactory from "./botFactories/moversFactory"

export default class BotFactory {
    create(type) {
        switch (type) {
            case "Mover":
                return new MoversFactory()
            case "Shooter":
                return new Mover(10, [300, 300], 40, form, strategy)
            default:
                return false
        }
    }
    // constructor(form) {
    //     super(form)

    //     this.xPosition = 120
    //     this.yPosition = 120
    // }

    getPose() {
        return this.position
    }

    toForm() {
        return this.form
    }
}
