//this is the Mediator Pattern implementation

export default class CollisionChecker {
    returnResultOfChecking(heroXY, heroSize, smthPosition, smthSize) {
        if (
            heroXY[0] + heroSize[0] >= smthPosition[0] &&
            heroXY[0] <= smthPosition[0] + smthSize[0]
        ) {
            if (
                heroXY[1] + heroSize[1] >= smthPosition[1] &&
                heroXY[1] <= smthPosition[1] + smthSize[1]
            ) {
                return true
            } else return false
        } else return false
    }
}
