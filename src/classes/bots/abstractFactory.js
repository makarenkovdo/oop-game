//this is the abstract factory

import Mover from "../action/movers"
import MoversFactory from "./botFactories/moversFactory"

export default class AbstractBotFactory {
    create(factoryType, botType) {
        switch (factoryType) {
            case "Mover":
                return new MoversFactory(botType)
            case "Shooter":
                return new MoversFactory(botType)
            case "Jumper":
                return new MoversFactory(botType)
            default:
                return false
        }
    }
}
