import { useAppSelector } from "../app/hooks"
import BaseItem from "../classes/items/baseItem"
import ExitModel from "../components/ExitModel"
import {
    exitSetPositionAction,
    levelUpAction,
    selectHeroPosition,
} from "../redux/gameSlice"

// IT'S NOT WORKING FILE!!! DELETE???

export default function ExitContainer() {
    const heroXY = useAppSelector(selectHeroPosition)

    const exitItem = new BaseItem(700, 700)

    if (
        heroXY[0] + 20 >= exitItem.position[0] &&
        heroXY[0] <= exitItem.position[0] + 20
    ) {
        if (
            heroXY[1] + 20 >= exitItem.position[1] &&
            heroXY[1] <= exitItem.position[1] + 20
        ) {
            dispatch(levelUpAction())
            dispatch(exitSetPositionAction([600, 600]))
        }
    }

    return <ExitModel exitItem={exitItem} />
}
