import { useAppDispatch, useAppSelector } from "../app/hooks"
import { gameOverAction, loadStateAction } from "../redux/gameSlice"
import "./../styles/gameStyles.css"
import { initialState } from "../redux/gameSlice"

export default function GameOverModal() {
    console.log("inside modal!")
    console.log(initialState)
    const dispatch = useAppDispatch()
    const gameRestart = () => {
        dispatch(gameOverAction(false))
        dispatch(loadStateAction(initialState))
    }
    return (
        <div className='modalStyle'>
            Game over!!!!!!!!!!!!!!!
            <button onClick={() => gameRestart()}>TRYYYY Again!</button>
        </div>
    )
}
