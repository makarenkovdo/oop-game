//this is the fabric

import BaseBot from '../baseBotClass'

export default class BulletFactory {
    //TODO: DELETE THIS ONE
    create(botLevel, form, strategy) {
        switch (botLevel) {
            case 'easy':
                return new BaseBot('bullet', [300, 300], 50, 10, form, strategy)
            case 'normal':
                return new BaseBot('bullet', [300, 300], 30, 10, form, strategy)
            case 'hard':
                return new BaseBot('bullet', [300, 300], 20, 10, form, strategy)

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
