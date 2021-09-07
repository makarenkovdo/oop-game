import MoversFactory from "./botFactory/moversFactory"
import BaseBot from "./bots/baseBotClass"
import Command from "./command"
import FormsFactory from "./forms/formsFactory"
import MoveEasyStrategy from "./strategies/moveEasy"
import MoveHard from "./strategies/moveHard"
import MoveNormal from "./strategies/moveNormal"

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
        this.strategy1 = new MoveEasyStrategy()
        this.strategy2 = new MoveNormal()
        this.strategy3 = new MoveHard()
    }

    FormSmall() {
        this.form = this.formsFactory.create("smallSquare")
        return this
    }
    FormBig() {
        this.form = this.formsFactory.create("bigSquare")
        return this
    }
    ActionTypeMover() {
        this.actionType = new this.MoversFactory()
        return this
    }
    StrategyEasy() {
        this.strategy = new MoveEasyStrategy()
        return this
    }
    StrategyNormal() {
        this.strategy = new MoveNormal()
        return this
    }
    createSimple() {
        return this.actionType.create("simpleMover", this.form, this.strategy)
    }
}
