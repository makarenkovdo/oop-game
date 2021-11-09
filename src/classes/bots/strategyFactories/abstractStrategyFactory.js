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
        this.strategyType2 = 'normal'
        this.strategyType3 = 'hard'
    }
    create(factoryType, strategyType) {
        switch (factoryType) {
            case this.case1:
                return new MoverStrategyFactory()
            case this.case2:
                return new JumperStrategyFactory()
            case this.case3:
                console.log(new ShooterStrategyFactory())
                return new ShooterStrategyFactory()
            case this.case4:
                return new BulletStrategyFactory()

            default:
                return false
        }
    }
}
