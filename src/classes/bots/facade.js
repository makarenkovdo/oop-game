import AbstractBotFactory from './abstractBotFactory'
import Command from './command'
import FormsFactory from './forms/formsFactory'
import BotStrategyFactory from './strategyFactories/abstractStrategyFactory'

export default class CommanderCreatingFacade {
    constructor() {
        this.Command = Command
        this.FormsFactory = FormsFactory
        this.BotFactory = AbstractBotFactory
        this.formsFactory = new FormsFactory()
        this.form1 = this.formsFactory.create('smallSquare')
        this.form2 = this.formsFactory.create('bigSquare')
        this.form3 = this.formsFactory.create('highLine')
        this.botStategyFactory = new BotStrategyFactory()
    }

    createCommander() {
        return new this.Command(
            new this.BotFactory(),
            new BotStrategyFactory(),
            this.formsFactory.create('smallSquare'),
            this.formsFactory.create('bigSquare'),
            this.formsFactory.create('highLine')
        )
    }
}
