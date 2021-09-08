export default class MoveLeft {
    move = (direction, moveBot, moveLength, position) => {
        const newPosition = [...position]
        newPosition[0] -= moveLength
        moveBot(newPosition[0], newPosition[1])
    }
}
