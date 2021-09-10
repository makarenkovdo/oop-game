export default class MoveFourDirections {
    move = (direction, moveBot, moveLength, position, heroPosition) => {
        const newPosition = [...position]
        if (heroPosition[0] < newPosition[0]) {
            newPosition[0] -= moveLength
            moveBot(newPosition[0], newPosition[1])
        } else if (heroPosition[0] > newPosition[0]) {
            newPosition[0] += moveLength
            moveBot(newPosition[0], newPosition[1])
        } else if (heroPosition[1] > newPosition[1]) {
            newPosition[1] += moveLength
            moveBot(newPosition[0], newPosition[1])
        } else if (heroPosition[1] < newPosition[1]) {
            newPosition[1] -= moveLength
            moveBot(newPosition[0], newPosition[1])
        }
    }
}
