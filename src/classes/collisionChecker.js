//this is the Mediator Pattern implementation

export default class CollisionChecker {
    constructor(heroPosition, heroSize, smthPosition, smthSize) {
        this.heroPosition = heroPosition
        this.heroSize = heroSize
        this.smthPosition = smthPosition
        this.smthSize = smthSize
    }
    returnResultOfChecking() {
        if (
            heroPosition[0] + heroSize >= smthPosition[0] &&
            heroPosition[0] <= smthPosition[0] + smthSize[0]
        ) {
            if (
                heroPosition[1] + heroSize >= smthPosition[1] &&
                heroPosition[1] <= smthPosition[1] + smthSize[1]
            ) {
                return true
            } else return false
        } else return false
    }
}
