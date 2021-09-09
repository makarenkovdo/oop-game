import BulletStrategyFactory from './bulletStrategyFactory'
import JumperStrategyFactory from './jumperStrategyFactory'
import MoverStrategyFactory from './moverStrategyFactory'
import ShooterStrategyFactory from './shooterStrategyFactory'

export default class BotStrategyFactory {
    constructor() {
        this.case1 = 'mover'
        this.case2 = 'jumper'
        this.case3 = 'shooter'
        this.case4 = 'bullet'
        this.strategyType1 = 'easy'
        this.strategyType1 = 'normal'
        this.strategyType1 = 'hard'
    }
    create(factoryType, strategyType) {
        switch (factoryType) {
            case this.case1:
                return new MoverStrategyFactory(strategyType)
            case this.case2:
                return new JumperStrategyFactory(strategyType)
            case this.case3:
                return new ShooterStrategyFactory(strategyType)
            case this.case4:
                return new BulletStrategyFactory(strategyType)

            default:
                return false
        }
    }
}
