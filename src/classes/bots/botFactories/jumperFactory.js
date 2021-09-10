//this is the fabric

import BaseBot from '../baseBotClass'

export default class JumpersFactory {
    create(botLevel, form, strategy) {
        switch (botLevel) {
            case 'easy':
                return new BaseBot(
                    'jumper',
                    [300, 300],
                    500,
                    50,
                    form,
                    strategy
                )
            case 'normal':
                return new BaseBot(
                    'jumper',
                    [300, 300],
                    500,
                    50,
                    form,
                    strategy
                )
            case 'hard':
                return new BaseBot(
                    'jumper',
                    [300, 300],
                    500,
                    50,
                    form,
                    strategy
                )

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
