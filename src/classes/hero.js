export default class Hero {
    constructor(
        position,
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

    move = (keyCode, moveHero) => {
        switch (keyCode) {
            case 37:
                this.xPosition -= this.moveLength
                moveHero(this.xPosition, this.yPosition)
                break
            case 38:
                this.yPosition -= this.moveLength
                moveHero(this.xPosition, this.yPosition)
                break
            case 39:
                this.xPosition += this.moveLength
                moveHero(this.xPosition, this.yPosition)
                break
            case 40:
                this.yPosition += this.moveLength
                moveHero(this.xPosition, this.yPosition)
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
