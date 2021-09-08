//this is the Mediator Pattern implementation

export default class CollisionChecker {
    returnResultOfChecking(
        firstObjPosition,
        firstObjSize,
        secondObjPosition,
        secondObjSize
    ) {
        if (
            firstObjPosition[0] + firstObjSize[0] >= secondObjPosition[0] &&
            firstObjPosition[0] <= secondObjPosition[0] + secondObjSize[0]
        ) {
            if (
                firstObjPosition[1] + firstObjSize[1] >= secondObjPosition[1] &&
                firstObjPosition[1] <= secondObjPosition[1] + secondObjSize[1]
            ) {
                return true
            } else return false
        } else return false
    }
}
