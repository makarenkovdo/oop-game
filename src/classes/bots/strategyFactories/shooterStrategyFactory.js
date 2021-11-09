import MoveEightDirections from '../strategies/moveEightDirections'
import MoveFourDirections from '../strategies/moveFourDirections'
import MoveLeft from '../strategies/moveLeft'
import MoveRandom from '../strategies/moveRandom'
import Stand from '../strategies/stand'

export default class ShooterStrategyFactory {
    create(strategyType) {
        switch (strategyType) {
            case 'easy':
                return new Stand()
            case 'normal':
                return new MoveFourDirections()
            case 'hard':
                return new MoveEightDirections()
            default:
                return false
        }
    }
}
