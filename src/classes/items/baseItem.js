import ItemModel from "../../components/ItemModel"

export default class BaseItem {
    constructor() {
        this.position = [
            Math.ceil(Math.random() * 0.7 * window.screen.width + 50),
            Math.ceil(Math.random() * 0.7 * window.screen.height + 50),
        ]
        this.size = [20, 20]
    }

    render() {
        return (
            <ItemModel
                position={this.position}
                color={"white"}
                size={this.size}
            />
        )
    }
}
