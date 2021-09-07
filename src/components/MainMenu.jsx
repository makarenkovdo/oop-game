//Facade implementation

import { useRef } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
    difficultyStatusAction,
    heroNameAction,
    startStatusAction,
} from "../redux/gameSlice"
import "./../styles/gameStyles.css"

export default function MainMenu() {
    const difficultyStatus = useAppSelector(
        (state) => state.game.difficultyStatus
    )
    const heroName = useAppSelector((state) => state.game.heroName)
    console.log(difficultyStatus, heroName)
    const dispatch = useAppDispatch()

    const textRef = useRef()

    return (
        <div className='mainMenuContent'>
            <form id='form'>
                <b>
                    <div style={{ fontSize: 30 }}>Difficulty Level:</div>
                    <div>
                        <br />
                        <br />
                        <input
                            onChange={() => dispatch(difficultyStatusAction(1))}
                            type='radio'
                            name='age'
                            value='10'
                        />
                        Easy
                    </div>
                    <div>
                        <input
                            onChange={() => dispatch(difficultyStatusAction(2))}
                            type='radio'
                            name='age'
                            value='10'
                        />
                        Normal
                    </div>
                    <div>
                        <input
                            onChange={() => dispatch(difficultyStatusAction(3))}
                            type='radio'
                            name='age'
                            value='10'
                        />
                        Hard
                    </div>
                    <br />
                    <br />

                    <fieldset name='userFields'>
                        <legend>Enter your name:</legend>
                        <input
                            ref={textRef}
                            onChange={() =>
                                dispatch(heroNameAction(textRef.current?.value))
                            }
                            name='login'
                            type='text'
                            placeholder='Hero name'
                        />
                    </fieldset>
                </b>
                <button onClick={() => dispatch(startStatusAction(true))}>
                    START GAME
                </button>
            </form>
        </div>
    )
}
