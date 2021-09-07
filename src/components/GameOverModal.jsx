import { useAppDispatch, useAppSelector } from "../app/hooks"
import { gameOverAction, loadStateAction } from "../redux/gameSlice"
import "./../styles/gameStyles.css"
import { initialState } from "../redux/gameSlice"

export default function GameOverModal() {
    const dispatch = useAppDispatch()
    const gameRestart = () => {
        dispatch(gameOverAction(false))
        dispatch(loadStateAction(initialState))
    }
    return (
        <div className='modalContainer'>
            <div className='modalContent'>Game over!</div>
            <div>
                <button className='modalButton' onClick={() => gameRestart()}>
                    Try again!
                </button>
            </div>
        </div>
    )
}
