import { useAppSelector } from "../app/hooks"
import BossBuilder from "../classes/bots/bossBuilder"
import Facade from "../classes/bots/facade"
import FormsFactory from "../classes/bots/forms/formsFactory"
import BotContainer from "./botContainer"

export default function Level1BotWrapper() {
    const levelState = useAppSelector((state) => state.game.level)

    const formsFactory = new FormsFactory() //abstract form factory init
    const facade = new Facade(formsFactory) //Facade task - to hide all bot-production stages
    const commander = facade.createCommander()
    const boss = new BossBuilder()
        .formSmall()
        .strategyNormal()
        .actionTypeMover()
        .createSimple()
    const boss2 = new BossBuilder()
        .formBig()
        .strategyNormal()
        .actionTypeMover()
        .createSimple()

    const bot = commander.execute(levelState) //command pattern creates the bot based on levelState

    let BotContainer = <BotContainer bot={bot} />

    if (levelState >= 4 && levelState < 7) {
        BotContainer = (
            <>
                <BotContainer bot={bot[0]} />
                <BotContainer bot={bot[1]} />
            </>
        )
    }

    if (levelState === 7) {
        BotContainer = (
            <>
                <BotContainer bot={boss} />
            </>
        )
    }

    return { BotContainer }
}
