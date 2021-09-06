export default class MoveHard {
    move = (direction, moveBot, moveLength, position, heroPosition) => {
        console.log(position, heroPosition)
        const newPosition = [...position]
        if (
            heroPosition[0] < newPosition[0] &&
            heroPosition[1] < newPosition[1]
        ) {
            newPosition[0] -= moveLength
            newPosition[1] -= moveLength
            moveBot(newPosition[0], newPosition[1])
        } else if (
            heroPosition[0] > newPosition[0] &&
            heroPosition[1] < newPosition[1]
        ) {
            newPosition[0] += moveLength
            newPosition[1] -= moveLength
            moveBot(newPosition[0], newPosition[1])
        } else if (
            heroPosition[0] > newPosition[0] &&
            heroPosition[1] > newPosition[1]
        ) {
            newPosition[0] += moveLength
            newPosition[1] += moveLength
            moveBot(newPosition[0], newPosition[1])
        } else if (
            heroPosition[0] < newPosition[0] &&
            heroPosition[1] > newPosition[1]
        ) {
            newPosition[0] -= moveLength
            newPosition[1] += moveLength
            moveBot(newPosition[0], newPosition[1])
        } else if (
            heroPosition[0] === newPosition[0] &&
            heroPosition[1] > newPosition[1]
        ) {
            newPosition[1] += moveLength
            moveBot(newPosition[0], newPosition[1])
        } else if (
            heroPosition[0] === newPosition[0] &&
            heroPosition[1] < newPosition[1]
        ) {
            newPosition[1] -= moveLength
            moveBot(newPosition[0], newPosition[1])
        } else if (
            heroPosition[0] > newPosition[0] &&
            heroPosition[1] === newPosition[1]
        ) {
            newPosition[0] += moveLength
            moveBot(newPosition[0], newPosition[1])
        } else if (
            heroPosition[0] < newPosition[0] &&
            heroPosition[1] === newPosition[1]
        ) {
            newPosition[0] -= moveLength
            moveBot(newPosition[0], newPosition[1])
        }
    }
}
