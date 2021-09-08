//this is the fabric

import Mover from "../action/movers"

export default class MoversFactory {
    create(type, form, strategy) {
        switch (type) {
            case "simple":
                return [
                    new Mover(0, [800, 300], 0, form, strategy),
                    new Mover(10, [800, 300], 40, form, strategy),
                ]
            case "normal":
                return [
                    new Mover(0, [800, 300], 0, form, strategy),
                    new Mover(10, [800, 300], 40, form, strategy),
                ]
            case "hard":
                return [
                    new Mover(0, [800, 300], 0, form, strategy),
                    new Mover(10, [800, 300], 40, form, strategy),
                ]
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
