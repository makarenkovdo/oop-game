import MoversFactory from "./botFactory/moversFactory"
import Command from "./command"
import FormsFactory from "./forms/formsFactory"
import MoveRandom from "./strategies/moveRandom"
import MoveEightDirections from "./strategies/moveEightDirections"
import MoveFourDirections from "./strategies/moveFourDirections"

export default class CommanderCreatingFacade {
    constructor() {
        this.Command = Command
        this.FormsFactory = FormsFactory
        this.MoversFactory = MoversFactory
        this.moversFactory = new this.MoversFactory()
        this.botType1 = "simpleMover"
        this.botType2 = "jumper"
        this.formsFactory = new FormsFactory()
        this.form1 = this.formsFactory.create("smallSquare")
        this.form2 = this.formsFactory.create("bigSquare")
        this.form3 = this.formsFactory.create("highLine")
        this.strategy1 = new MoveRandom()
        this.strategy2 = new MoveEightDirections()
        this.strategy3 = new MoveFourDirections()
    }

    createCommander() {
        return new this.Command(
            this.moversFactory,
            this.botType1,
            this.botType2,
            this.form1,
            this.form2,
            this.form3,
            this.strategy1,
            this.strategy2,
            this.strategy3
        )
    }
}
