//this is the abstract factory

import BulletFactory from './botFactories/bulletFactory'
import JumpersFactory from './botFactories/jumperFactory'
import MoversFactory from './botFactories/moversFactory'
import ShootersFactory from './botFactories/shootersFactory'

export default class AbstractBotFactory {
    constructor() {
        this.case1 = 'mover'
        this.case2 = 'jumper'
        this.case3 = 'shooter'
        this.case4 = 'bullet'
        this.botLevel1 = 'easy'
        this.botLevel2 = 'normal'
        this.botLevel3 = 'hard'
        this.moversFactory = new MoversFactory()
        this.jumpersFactory = new JumpersFactory()
        this.shootersFactory = new ShootersFactory()
    }

    create(factoryType, botLevel, form, strategy) {
        console.log(factoryType, botLevel, form, strategy)
        switch (factoryType) {
            case this.case1:
                return this.moversFactory.create(
                    botLevel,
                    form,
                    strategy.create(botLevel)
                )
            case this.case2:
                return this.jumpersFactory.create(
                    botLevel,
                    form,
                    strategy.create(botLevel)
                )
            case this.case3:
                return this.shootersFactory.create(
                    botLevel,
                    form,
                    strategy.create(botLevel)
                )
            default:
                return false
        }
    }
}
