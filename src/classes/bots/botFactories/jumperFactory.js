//this is the fabric

import Mover from "../action/movers"

export default class MoversFactory {
    create(type, form, strategy) {
        switch (type) {
            case "easy":
                return new Mover(50, [300, 300], 1000, form, strategy)
            case "normal":
                return new Mover(50, [300, 300], 1000, form, strategy)
            case "hard":
                return new Mover(50, [300, 300], 1000, form, strategy)

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
