import BaseItem from "../classes/items/baseItem"
import ItemContainer from "./itemContainer"
import ProxyItem from "../classes/items/proxyItem"
import { useAppSelector } from "../app/hooks"

export default function ItemInit() {
    const levelState = useAppSelector((state) => state.game.level)
    console.log(levelState)
    const keyItem = new BaseItem()
    const exit = new BaseItem()
    const proxyExit = new ProxyItem(exit)
    const booster = new BaseItem()
    console.log(proxyExit.item.position)
    console.log(keyItem.position)
    console.log(booster.position)

    // newItem.TryDispatchBridge()

    return (
        <>
            <ItemContainer
                keyItem={keyItem}
                exit={proxyExit}
                booster={booster}
            />
        </>
    )
}
