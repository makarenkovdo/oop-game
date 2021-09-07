import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
    boosterSetPositionAction,
    exitSetPositionAction,
    keyPositionSetPositionAction,
    selectHeroPosition,
} from "../redux/gameSlice"
import { useEffect } from "react"

export default function ItemContainer(props) {
    const heroXY = useAppSelector(selectHeroPosition)
    const keyStatus = useAppSelector((state) => state.game.keyForExit)

    // const exitPosition = useAppSelector(selectExitPosition)
    // const itemPosition = useAppSelector(selectItemPosition)
    const dispatch = useAppDispatch()

    const keyItem = props.keyItem
    const exit = props.exit
    const booster = props.booster

    // const heroXY = props.heroXY

    useEffect(() => {
        dispatch(exitSetPositionAction(exit.item.position))
        dispatch(keyPositionSetPositionAction(keyItem.position))
        dispatch(boosterSetPositionAction(booster.position))
    }, [])

    // if (
    //     heroXY[0] + 20 >= exit.position[0] &&
    //     heroXY[0] <= exit.position[0] + 20
    // ) {
    //     console.log("check")

    //     if (
    //         heroXY[1] + 20 >= exit.position[1] &&
    //         heroXY[1] <= exit.position[1] + 20
    //     ) {
    //         dispatch(levelUpAction())
    //         dispatch(exitSetPositionAction([600, 600]))
    //     }
    // }

    // dispatch(exitSetPositionAction([exit.position]))
    // dispatch(itemSetPositionAction([newItem.position]))

    return (
        <>
            {/* exit.returnComponent() */}
            {props.booster.render()}
            {keyItem.render()}
            {exit.render(keyStatus)}
        </>
    )
}
