import MoveEightDirections from '../strategies/moveEightDirections'
import MoveFourDirections from '../strategies/moveFourDirections'
import MoveRandom from '../strategies/moveRandom'

export default class MoverStrategyFactory {
    create(botType) {
        switch (botType) {
            case 'easy':
                return new MoveRandom()
            case 'normal':
                return new MoveFourDirections()
            case 'hard':
                return new MoveEightDirections()
            default:
                return false
        }
    }
}
