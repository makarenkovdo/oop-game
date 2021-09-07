import { useCallback, useEffect, useRef } from "react"
import "./../styles/gameStyles.css"
import HeroModel from "../components/HeroModel"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
    boosterStatusAction,
    exitSetPositionAction,
    gameOverAction,
    heroMoveAction,
    keyForExitAction,
    levelUpAction,
    selectExitPosition,
    selectGameOverStatus,
    selectHeroPosition,
} from "../redux/gameSlice"
import GameOverModal from "../components/GameOverModal"

export default function Game(props) {
    const heroXY = useAppSelector(selectHeroPosition)
    const keyPosition = useAppSelector((state) => state.game.keyPosition)
    const exitPosition = useAppSelector(selectExitPosition)
    const gameOverState = useAppSelector(selectGameOverStatus)
    const boosterPosition = useAppSelector(
        (state) => state.game.boosterPosition
    )

    const dispatch = useAppDispatch()
    const newHero = props.newHero
    const handleUserKeyPress = useCallback((event) => {
        const { keyCode } = event
        if (keyCode >= 37 && keyCode <= 40) {
            newHero.move(keyCode, moveHero)
        }
    }, [])
    window.addEventListener("keydown", handleUserKeyPress)

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

    if (
        heroXY[0] + newHero.size[0] >= exitPosition[0] &&
        heroXY[0] <= exitPosition[0] + 20
    ) {
        if (
            heroXY[1] + newHero.size[0] >= exitPosition[1] &&
            heroXY[1] <= exitPosition[1] + 20
        ) {
            dispatch(levelUpAction())
            dispatch(exitSetPositionAction([600, 600]))
            dispatch(keyForExitAction(false))
            dispatch(boosterStatusAction(false))
        }
    }

    if (
        heroXY[0] + newHero.size[0] >= keyPosition[0] &&
        heroXY[0] <= keyPosition[0] + 20
    ) {
        if (
            heroXY[1] + newHero.size[0] >= keyPosition[1] &&
            heroXY[1] <= keyPosition[1] + 20
        ) {
            dispatch(keyForExitAction(true))
        }
    }

    if (
        heroXY[0] + newHero.size[0] >= boosterPosition[0] &&
        heroXY[0] <= boosterPosition[0] + 20
    ) {
        if (
            heroXY[1] + newHero.size[1] >= boosterPosition[1] &&
            heroXY[1] <= boosterPosition[1] + 20
        ) {
            dispatch(boosterStatusAction(true))
        }
    }

    const gameOverSwitcher = (gameOverStatus) => {
        dispatch(gameOverAction(false))
    }

    return gameOverState ? (
        <GameOverModal />
    ) : (
        <div>
            <HeroModel heroXY={heroXY} heroSize={newHero.size} />
        </div>
    )
}
