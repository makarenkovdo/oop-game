import { useAppDispatch, useAppSelector } from '../app/hooks'
import CollisionChecker from '../classes/collisionChecker'
import {
    boosterStatusAction,
    exitSetPositionAction,
    keyForExitAction,
    levelUpAction,
    selectHeroPosition,
} from '../redux/gameSlice'

export default function CollisionCheckerContainer() {
    const dispatch = useAppDispatch()

    const heroSize = useAppSelector((state) => state.game.heroSize)
    // const botXY = useAppSelector(selectBotPosition)
    const heroXY = useAppSelector(selectHeroPosition)

    const exitXY = useAppSelector((state) => state.game.exitPosition)
    const keyXY = useAppSelector((state) => state.game.keyPosition)
    const boosterXY = useAppSelector((state) => state.game.boosterPosition)
    const itemSize = useAppSelector((state) => state.game.itemSize)

    const collisionChecker = new CollisionChecker()
    // let flag = false

    if (
        collisionChecker.returnResultOfChecking(
            heroXY,
            heroSize,
            keyXY,
            itemSize
        )
    ) {
        dispatch(keyForExitAction(true))
    }
    if (
        collisionChecker.returnResultOfChecking(
            heroXY,
            heroSize,
            exitXY,
            itemSize
        )
    ) {
        console.log('LEVEL-UP')
        console.log(heroXY, heroSize, exitXY, itemSize)
        dispatch(levelUpAction())
        dispatch(keyForExitAction(false))
        dispatch(boosterStatusAction(false))
        dispatch(exitSetPositionAction([900, 900]))
        //item new position, otherwise auto level-up
    }
    if (
        collisionChecker.returnResultOfChecking(
            heroXY,
            heroSize,
            boosterXY,
            itemSize
        )
    ) {
        dispatch(boosterStatusAction(true))
    }
    // console.log(flag)

    // switch (flag) {
    //     case "gameOver":
    //         dispatch(gameOverAction(false))
    //         break
    //     case "keyFound":
    //         dispatch(keyForExitAction(true))
    //         break
    //     case "exitFound":
    //         dispatch(levelUpAction())
    //         dispatch(exitSetPositionAction([600, 600]))
    //         dispatch(keyForExitAction(false))
    //         dispatch(boosterStatusAction(false))
    //         break
    //     case "boosterFound":
    //         dispatch(boosterStatusAction(true))
    //         break
    //     default:
    //         return false
    // }
    return false
}
