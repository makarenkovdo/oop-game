import ItemModel from "../components/ItemModel"
import BaseItem from "../classes/items/baseItem"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
    exitSetPositionAction,
    itemSetPositionAction,
    levelUpAction,
    selectHeroPosition,
} from "../redux/gameSlice"
import { useEffect } from "react"
import ItemContainer from "./itemContainer"
import ProxyItem from "../classes/items/proxyItem"

export default function ItemInit() {
    const newItem = new BaseItem()
    const exit = new BaseItem()
    const proxyExit = new ProxyItem(exit)
    console.log(proxyExit)
    console.log(newItem)

    // newItem.TryDispatchBridge()

    return (
        <>
            <ItemContainer newItem={newItem} exit={proxyExit} />
        </>
    )
}
