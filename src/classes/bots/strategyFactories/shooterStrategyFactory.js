import MoveEightDirections from "../strategies/moveEightDirections"
import MoveFourDirections from "../strategies/moveFourDirections"
import MoveLeft from "../strategies/moveLeft"
import MoveRandom from "../strategies/moveRandom"
import Stand from "../strategies/stand"

export default class ShooterStrategyFactory {
    create(factoryType, botType) {
        switch (factoryType) {
            case "easy":
                return new Stand()
            case "normal":
                return new MoveFourDirections()
            case "hard":
                return new MoveEightDirections()
            default:
                return false
        }
    }
}
