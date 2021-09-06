import { useAppDispatch } from "../../app/hooks"
import ItemModel from "../../components/ItemModel"
import ItemContainer from "../../containers/itemInit"
import { heroMoveAction } from "../../redux/gameSlice"

export default class BaseItem {
    constructor() {
        this.position = [
            Math.ceil(Math.random() * 0.7 * window.screen.width + 50),
            Math.ceil(Math.random() * 0.7 * window.screen.height + 50),
        ]
    }

    render() {
        return <ItemModel item={this.position} color={"white"} />
    }
}
