//this is the fabric

import Mover from "../action/movers"

export default class MoversFactory {
    create(type, form, strategy) {
        switch (type) {
            case "simpleMover":
                return new Mover(10, [300, 300], 30, form, strategy)
            case "jumper":
                return new Mover(1, [300, 300], 7, form, strategy)
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
