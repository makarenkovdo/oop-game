import ItemContainer from "../../containers/itemContainer"

export default class BaseItem {
    constructor() {
        this.position = [
            Math.ceil(Math.random() * 0.7 * window.screen.width + 50),
            Math.ceil(Math.random() * 0.7 * window.screen.height + 50),
        ]
    }

    returnComponent() {
        return <ItemContainer item={this.position} />
    }
}
