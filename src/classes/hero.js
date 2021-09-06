export default class Hero {
    constructor(
        personName = "Hero",
        xPosition = 0,
        yPosition = 0,
        level = 0,
        moveLength = 20,
        size = [38, 38]
    ) {
        this.personName = personName
        this.xPosition = xPosition
        this.yPosition = yPosition
        this.size = size

        this.moveLength = moveLength
        this.level = level
        this.style = "white"
    }

    move = (keyCode, moveHero, botXY) => {
        switch (keyCode) {
            case 37:
                this.xPosition -= this.moveLength
                moveHero(this.xPosition, this.yPosition, botXY)
                break
            case 38:
                this.yPosition -= this.moveLength
                moveHero(this.xPosition, this.yPosition, botXY)
                break
            case 39:
                this.xPosition += this.moveLength
                moveHero(this.xPosition, this.yPosition, botXY)
                break
            case 40:
                this.yPosition += this.moveLength
                moveHero(this.xPosition, this.yPosition, botXY)
                break
            default:
                break
        }
    }
    getPose(x, y) {
        this.xPosition = x
        this.yPosition = y
    }
}
