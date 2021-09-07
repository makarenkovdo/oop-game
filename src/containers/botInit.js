import { useAppSelector } from "../app/hooks"
import BossBuilder from "../classes/bossBuilder"
import MoversFactory from "../classes/bots/botFactory/moversFactory"
import Command from "../classes/bots/command"
import BoosterDecorator from "../classes/bots/decorators/boosterDecorator"
import boosterDecorator from "../classes/bots/decorators/boosterDecorator"
import Facade from "../classes/bots/facade"
import FormsFactory from "../classes/bots/forms/formsFactory"
import MoveEasyStrategy from "../classes/bots/strategies/moveRandom"
import MoveHard from "../classes/bots/strategies/moveEightDirections"
import MoveNormal from "../classes/bots/strategies/moveFourDirections"
import BotContainer from "./botContainer"

export default function Level1BotWrapper() {
    const levelState = useAppSelector((state) => state.game.level)

    //Facade task - to hide all bot-production stages

    const formsFactory = new FormsFactory() //abstract form factory init
    const facade = new Facade(formsFactory)
    const commander = facade.createCommander()
    const boss = new BossBuilder().chooseForm2().chooseStrategy2().botType1().
    

    const bot = commander.execute(levelState)

    return <BotContainer bot={bot} />
}
