import MoversFactory from "./botFactories/moversFactory"
import BaseBot from "./baseBotClass"
import Command from "./command"
import FormsFactory from "./forms/formsFactory"
import MoveRandom from "./strategies/moveRandom"
import MoveFourDirections from "./strategies/moveFourDirections"
import MoveEightDirections from "./strategies/moveEightDirections"

export default class BossBuilder {
    constructor() {
        this.baseBot = new BaseBot()
        this.form = ""
        this.actionType = ""
        this.Command = Command
        this.FormsFactory = FormsFactory
        this.MoversFactory = MoversFactory
        this.moversFactory = new this.MoversFactory()
        this.botType1 = "simpleMover"
        this.botType2 = "jumper"
        this.formsFactory = new FormsFactory()
        this.strategy1 = new MoveRandom()
        this.strategy2 = new MoveFourDirections()
        this.strategy3 = new MoveEightDirections()
    }

    formSmall() {
        this.form = this.formsFactory.create("smallSquare")
        return this
    }
    formBig() {
        this.form = this.formsFactory.create("bigSquare")
        return this
    }
    actionTypeMover() {
        this.actionType = new this.MoversFactory()
        return this
    }
    strategyEasy() {
        this.strategy = new MoveRandom()
        return this
    }
    strategyNormal() {
        this.strategy = this.strategy2
        return this
    }
    createSimple() {
        return this.actionType.create("simpleMover", this.form, this.strategy)
    }
}
