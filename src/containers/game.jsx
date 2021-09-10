import { useCallback } from 'react'
import './../styles/gameStyles.css'
import HeroModel from '../components/HeroModel'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
    heroMoveAction,
    heroSizeInitAction,
    selectGameOverStatus,
    selectHeroPosition,
} from '../redux/gameSlice'
import GameOverModal from '../components/GameOverModal'

export default function Game(props) {
    const heroXY = useAppSelector(selectHeroPosition)
    const gameOverState = useAppSelector(selectGameOverStatus)
    const boosterPosition = useAppSelector(
        (state) => state.game.boosterPosition
    )

    const dispatch = useAppDispatch()
    const newHero = props.newHero
    dispatch(heroSizeInitAction(newHero.size))
    const handleUserKeyPress = useCallback((event) => {
        const { keyCode } = event
        if (keyCode >= 37 && keyCode <= 40) {
            newHero.move(keyCode, moveHero)
        }
    }, [])
    window.addEventListener('keydown', handleUserKeyPress)

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

    // const gameOverSwitcher = (gameOverStatus) => {
    //     dispatch(gameOverAction(false))
    // }

    return gameOverState ? (
        <GameOverModal />
    ) : (
        <div>
            <HeroModel heroXY={heroXY} heroSize={newHero.size} />
        </div>
    )
}
