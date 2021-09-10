import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
    boosterSetPositionAction,
    exitSetPositionAction,
    itemSizeInitAction,
    keyPositionSetPositionAction,
} from '../redux/gameSlice'

export default function ItemContainer(props) {
    const keyStatus = useAppSelector((state) => state.game.keyForExit)

    const dispatch = useAppDispatch()

    const keyItem = props.keyItem
    const exit = props.exit
    const booster = props.booster

    dispatch(itemSizeInitAction(exit.item.size))
    dispatch(exitSetPositionAction(exit.item.position))
    dispatch(keyPositionSetPositionAction(keyItem.position))
    dispatch(boosterSetPositionAction(booster.position))

    return (
        <>
            {props.booster.render()}
            {keyItem.render()}
            {exit.render(keyStatus)}
        </>
    )
}
