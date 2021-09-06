import { useAppSelector } from "../app/hooks"
import MoversFactory from "../classes/bots/botFactory/moversFactory"
import Command from "../classes/bots/command"
import FormsFactory from "../classes/bots/forms/formsFactory"
import MoveEasyStrategy from "../classes/bots/strategies/moveEasy"
import MoveHard from "../classes/bots/strategies/moveHard"
import MoveNormal from "../classes/bots/strategies/moveNormal"
import BotContainer from "./botContainer"

export default function Level1BotWrapper() {
    const levelState = useAppSelector((state) => state.game.level)
    // const startStatus = useAppSelector((state) => state.game.startStatus)

    const formsFactory = new FormsFactory() //abstract form factory init

    const bigSquareForm = formsFactory.create("bigSquare") //bridge init
    const smallSquareForm = formsFactory.create("smallSquare") //bridge init
    const highLineForm = formsFactory.create("highLine") //bridge init
    //all forms ....................................................................CREATE!

    const moversFactory = new MoversFactory() //abstract action factory init
    const shootersFactory = {} // .................................................CREATE!!

    const moveEasy = new MoveEasyStrategy()
    const moveNormal = new MoveNormal()
    const moveHard = new MoveHard() //strategy init

    // const bot = moversFactory.create(
    //     "simpleMover",
    //     bigSquareForm.getForm(),
    //     moveEasy
    // )
    //send data to the bot-factory
    const commander = new Command(
        moversFactory,
        "simpleMover",
        "jumper",
        smallSquareForm,
        bigSquareForm,
        highLineForm,
        moveEasy,
        moveNormal,
        moveHard
    )
    const bot = commander.execute(levelState)
    return <BotContainer bot={bot} />

    // startStatus ?
    // : <MainMenu />
}
