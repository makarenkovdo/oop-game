import BaseItem from "../classes/items/baseItem"
import ItemContainer from "./itemContainer"
import ProxyItem from "../classes/items/proxyItem"

export default function ItemInit() {
    const keyItem = new BaseItem()
    const exit = new BaseItem()
    const proxyExit = new ProxyItem(exit)
    const booster = new BaseItem()

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
