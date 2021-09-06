import ItemModel from "../components/ItemModel"
import BaseItem from "../classes/items/baseItem"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
    exitSetPositionAction,
    itemSetPositionAction,
    keyPositionSetPositionAction,
    levelUpAction,
    selectHeroPosition,
} from "../redux/gameSlice"
import { useEffect } from "react"
import ProxyItem from "../classes/items/proxyItem"

export default function ItemContainer(props) {
    const heroXY = useAppSelector(selectHeroPosition)
    const keyStatus = useAppSelector((state) => state.game.keyForExit)

    // const exitPosition = useAppSelector(selectExitPosition)
    // const itemPosition = useAppSelector(selectItemPosition)
    const dispatch = useAppDispatch()

    const newItem = props.newItem
    const exit = props.exit
    // const heroXY = props.heroXY

    useEffect(() => {
        dispatch(exitSetPositionAction(exit.item.position))
        dispatch(keyPositionSetPositionAction(newItem.position))
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

    console.log(keyStatus)

    return (
        <>
            {/* exit.returnComponent() */}
            {newItem.render()}
            {exit.render(keyStatus)}
        </>
    )
}
