export default class Stand {
    move = (direction, moveBot, moveLength, position) => {
        moveBot(position[0], position[1])
    }
}
