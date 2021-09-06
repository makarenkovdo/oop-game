export default class MoveEasyStrategy {
    move = (direction, moveBot, moveLength, position) => {
        const newPosition = [...position]
        if (direction <= 2.5) {
            newPosition[0] -= moveLength
            moveBot(newPosition[0], newPosition[1])
        } else if (direction > 2.5 && direction <= 5) {
            newPosition[1] -= moveLength
            moveBot(newPosition[0], newPosition[1])
        } else if (direction > 5 && direction <= 7.5) {
            newPosition[0] += moveLength
            moveBot(newPosition[0], newPosition[1])
        } else {
            newPosition[1] += moveLength
            moveBot(newPosition[0], newPosition[1])
        }
    }
}
