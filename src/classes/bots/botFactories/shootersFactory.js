//this is the fabric

import BaseBot from '../baseBotClass'

export default class ShootersFactory {
    create(botLevel, form, strategy) {
        switch (botLevel) {
            case 'simple':
                return [
                    new BaseBot('shooter', [800, 300], 0, 0, form, strategy),
                    new BaseBot('bullet', [800, 300], 50, 2, form, strategy),
                ]
            case 'normal':
                return [
                    new BaseBot('shooter', [800, 300], 0, 0, form, strategy),
                    new BaseBot('bullet', [800, 300], 40, 3, form, strategy),
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
