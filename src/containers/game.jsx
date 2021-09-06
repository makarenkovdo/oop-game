import { useCallback, useEffect, useRef } from "react"
import "./../styles/gameStyles.css"
import GameArea from "../components/GameArea"
import Hero from "../classes/hero"
import HeroModel from "../components/HeroModel"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
    exitSetPositionAction,
    gameOverAction,
    heroMoveAction,
    levelUpAction,
    selectBotPosition,
    selectExitPosition,
    selectGameOverStatus,
    selectHeroPosition,
} from "../redux/gameSlice"

export default function Game(props) {
    const heroXY = useAppSelector(selectHeroPosition)
    const botXY = useAppSelector(selectBotPosition)
    const botForm = useAppSelector((state) => state.game.botSize)

    const exitPosition = useAppSelector(selectExitPosition)
    const gameOverState = useAppSelector(selectGameOverStatus)

    const dispatch = useAppDispatch()
    const newHero = new Hero()

    const handleUserKeyPress = useCallback((event) => {
        const { keyCode } = event
        if (keyCode >= 37 && keyCode <= 40) {
            newHero.move(keyCode, moveHero, heroXY)
        }
    }, [])

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress)
    })

    const moveHero = (xPosition, yPosition) => {
        let newXPosition = xPosition
        let newYPosition = yPosition
        let xMax = window.screen.width
        let yMax = window.screen.height

        if (xPosition <= 0) {
            newXPosition = 20
        }
        if (yPosition <= 40) {
            newYPosition = 40
        }
        if (xPosition >= xMax - 60) {
            newXPosition = xMax - 60
        }
        if (yPosition >= yMax - 140) {
            newYPosition = yMax - 160
        }
        dispatch(heroMoveAction([newXPosition, newYPosition]))
        newHero.getPose(newXPosition, newYPosition)
    }

    if (exitPosition[0] === heroXY[0] && exitPosition[1] === heroXY[1]) {
        console.log("hooray")
        dispatch(levelUpAction())
        dispatch(exitSetPositionAction([600, 600]))
    }

    if (
        heroXY[0] + newHero.size[0] >= exitPosition[0] &&
        heroXY[0] <= exitPosition[0] + 20
    ) {
        if (
            heroXY[1] + newHero.size[1] >= exitPosition[1] &&
            heroXY[1] <= exitPosition[1] + 20
        ) {
            dispatch(levelUpAction())
            dispatch(exitSetPositionAction([600, 600]))
        }
    }

    if (
        heroXY[0] + newHero.size[0] >= botXY[0] &&
        heroXY[0] <= botXY[0] + botForm[0]
    ) {
        if (
            heroXY[1] + newHero.size[1] >= botXY[1] &&
            heroXY[1] <= botXY[1] + botForm[1]
        ) {
            dispatch(gameOverAction(true))
        }
    }

    const gameOverSwitcher = (gameOverStatus) => {
        dispatch(gameOverAction(false))
    }

    const gameOverModal = () => {
        return (
            <div className='modalStyle'>
                Game over!
                <button onClick={() => gameOverSwitcher(false)}>
                    TRYYYY Again!
                </button>
            </div>
        )
    }

    if (gameOverState) {
        gameOverModal()
    }

    return gameOverState ? (
        <div className='modalStyle'>
            Game over!
            <button onClick={() => gameOverSwitcher(false)}>
                TRYYYY Again!
            </button>
        </div>
    ) : (
        <div>
            <HeroModel heroXY={[...heroXY]} heroSize={newHero.size} />
        </div>
    )
}
