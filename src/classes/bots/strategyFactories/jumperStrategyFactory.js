import MoveEightDirections from "../strategies/moveEightDirections"
import MoveFourDirections from "../strategies/moveFourDirections"
import MoveRandom from "../strategies/moveRandom"

export default class JumperStrategyFactory {
    create(factoryType, botType) {
        switch (factoryType) {
            case "easy":
                return new MoveRandom()
            case "normal":
                return new MoveFourDirections()
            case "hard":
                return new MoveEightDirections()
            default:
                return false
        }
    }
}
