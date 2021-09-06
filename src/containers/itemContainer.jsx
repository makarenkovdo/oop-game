import ItemModel from "../components/ItemModel"
import BaseItem from "../classes/items/baseItem"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
    exitSetPositionAction,
    itemSetPositionAction,
    selectExitPosition,
    selectItemPosition,
} from "../redux/gameSlice"
import { useEffect } from "react"

export default function ItemContainer() {
    // const exitPosition = useAppSelector(selectExitPosition)
    // const itemPosition = useAppSelector(selectItemPosition)
    const dispatch = useAppDispatch()

    const newItem = new BaseItem()
    const exit = new BaseItem()
    console.log(newItem.position)
    console.log(exit.position)

    console.log(exit.position)

    useEffect(() => {
        dispatch(exitSetPositionAction(exit.position))
        dispatch(itemSetPositionAction(newItem.position))
    }, [])

    // dispatch(exitSetPositionAction([exit.position]))
    // dispatch(itemSetPositionAction([newItem.position]))

    console.log(exit)

    return (
        <>
            {/* exit.returnComponent() */}
            <ItemModel item={exit.position} />
            <ItemModel item={newItem.position} />
        </>
    )
}
