import MoveEightDirections from "./strategies/moveEightDirections"
import MoveFourDirections from "./strategies/moveFourDirections"
import MoveLeft from "./strategies/moveLeft"
import MoveRandom from "./strategies/moveRandom"

export default class BotStrategy {
    create(factoryType, botType) {
        switch (factoryType) {
            case "easy":
                return new MoveLeft()
            case "normal":
                return new MoveFourDirections(botTpe)
            case "hard":
                return new MoveEightDirections()
            default:
                return false
        }
    }
}
