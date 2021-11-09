//this is the fabric

import BaseBot from '../baseBotClass'

export default class ShootersFactory {
    create(botLevel, form, strategy) {
        console.log(botLevel, form, strategy)
        switch (botLevel) {
            case 'easy':
                return [
                    new BaseBot('shooter', [500, 300], 0, 0, form, strategy),
                    new BaseBot('bullet', [700, 300], 50, 2, form, strategy),
                    //TODO different strategies&forms
                ]
            case 'normal':
                return [
                    new BaseBot('shooter', [300, 300], 0, 0, form, strategy),
                    new BaseBot('bullet', [500, 300], 40, 3, form, strategy),
                ]
            case 'hard':
                return [
                    new BaseBot('shooter', [800, 300], 0, 0, form, strategy),
                    new BaseBot('bullet', [800, 300], 30, 4, form, strategy),
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
