import ItemModel from "../../components/ItemModel"
import ItemContainer from "../../containers/itemContainer"

export default class ProxyItem {
    constructor(item) {
        this.item = item
    }
    render(cases) {
        switch (cases) {
            case false:
                return (
                    <ItemModel
                        position={this.item.position}
                        color={"transparent"}
                        size={this.item.size}
                    />
                )
            case true:
                return this.item.render()
            default:
                return false
        }
    }
}
