export default class WindowBorderChecker {
    constructor() {
        this.xMin = 20
        this.yMin = 50
        this.xMax = window.screen.width - 60
        this.yMax = window.screen.height - 160
    }

    moveObject = (xPosition, yPosition) => {
        let newXPosition = xPosition
        let newYPosition = yPosition
        if (xPosition <= this.xMin) {
            newXPosition = this.xMin
        }
        if (yPosition <= this.yMin) {
            newYPosition = this.yMin
        }
        if (xPosition >= this.xMax) {
            newXPosition = this.xMax
        }
        if (yPosition >= this.yMax) {
            newYPosition = this.yMax
        }

        return [newXPosition, newYPosition]

        dispatch(heroMoveAction([newXPosition, newYPosition]))
        newHero.getPose(newXPosition, newYPosition)
    }
}
