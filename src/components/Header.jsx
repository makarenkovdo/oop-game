import { useAppDispatch, useAppSelector } from "../app/hooks"
import SaveLoad from "../classes/saveLoad"
import {
    botMoveAction,
    loadStateAction,
    pauseStatusAction,
    saveAction,
    selectBotPosition,
} from "../redux/gameSlice"
import "./../styles/gameStyles.css"
import { newItem } from "./ItemModel"

export default function Header() {
    let saveLoad = new SaveLoad()
    const dispatch = useAppDispatch()
    const state = useAppSelector((state) => state.game)
    const botPosition = useAppSelector(selectBotPosition)
    if (state.saveStatus) {
        dispatch(saveAction(false))
        saveLoad.save(state)
    }

    const load = (payload) => {
        let x = saveLoad.load()
        dispatch(loadStateAction(x))
    }

    const play = () => {
        const newBotPosition = [...botPosition]
        newBotPosition[0] += 1 //it's because of useEffect dependency , for "alive" bot
        dispatch(pauseStatusAction(false))
        dispatch(botMoveAction(newBotPosition))
    }
    return (
        <div className='header'>
            <span style={{ color: "whitesmoke" }}>Level {state.level}</span>
            <button
                onClick={() => {
                    dispatch(saveAction(true))
                }}
            >
                Save
            </button>
            <button onClick={() => load()}>Load</button>
            <button onClick={() => dispatch(pauseStatusAction(true))}>
                Pause
            </button>
            <button onClick={() => play()}>Play</button>
        </div>
    )
}
