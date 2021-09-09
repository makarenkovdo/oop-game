import { useEffect } from 'react'
import {
    boosterStatusAction,
    botMoveAction,
    botSizeInitAction,
    bulletMoveAction,
    bulletStateAction,
    gameOverAction,
    selectBotPosition,
    selectGameOverStatus,
    selectHeroPosition,
} from '../redux/gameSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import BoosterDecorator from '../classes/bots/decorators/boosterDecorator'
import CollisionChecker from '../classes/collisionChecker'
import BotModel from '../components/BotModel'

export default function BotContainer(props) {
    const bulletState = useAppSelector((state) => state.game.bulletState)

    const gameOverStatus = useAppSelector(selectGameOverStatus)
    const pauseStatus = useAppSelector((state) => state.game.pauseStatus)
    const boosterStatus = useAppSelector((state) => state.game.boosterStatus)
    const levelState = useAppSelector((state) => state.game.level)
    const collisionChecker = new CollisionChecker()

    const botSize = useAppSelector((state) => state.game.botSize)
    const heroSize = useAppSelector((state) => state.game.heroSize)
    let botXY = useAppSelector(selectBotPosition)
    const heroXY = useAppSelector(selectHeroPosition)
    const bulletXY = useAppSelector((state) => state.game.bulletPosition)

    const bot = props.bot
    const dispatch = useAppDispatch()

    if ((bot.type === 'bullet') & !bulletState) {
        botXY = bulletXY
        bulletStateAction(true)
    }

    if (boosterStatus && levelState >= 0) {
        const boosterBot = new BoosterDecorator(bot)
        dispatch(boosterStatusAction(false))
    }

    useEffect(() => {
        dispatch(botSizeInitAction(bot.form))
    }, [])

    useEffect(() => {
        if (!gameOverStatus && !pauseStatus) {
            const interval = setInterval(() => {
                bot.strategy.move(
                    Math.random() * 10,
                    moveBot,
                    bot.moveLength,
                    botXY,
                    heroXY
                )
            }, bot.interval)
            return () => clearInterval(interval)
        }
    }, [botXY])

    useEffect(() => {
        if (!gameOverStatus && !pauseStatus && bot.type === 'bullet') {
            const interval = setInterval(() => {
                //2 copies of interval => make 1 variable and put instead of this code

                bot.strategy.move(
                    Math.random() * 10,
                    moveBot,
                    bot.moveLength,
                    botXY,
                    heroXY
                )
            }, bot.interval)
            return () => clearInterval(interval)
        }
    }, [botXY])

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(bulletStateAction(false))
        }, 2000)
    }, [bulletState])

    const moveBot = (xPosition, yPosition) => {
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
        if (bot.type !== 'bullet') {
            dispatch(botMoveAction([newXPosition, newYPosition]))
        } else dispatch(bulletMoveAction([newXPosition, newYPosition]))
    }

    if (
        collisionChecker.returnResultOfChecking(
            heroXY,
            heroSize,
            botXY,
            botSize
        )
    ) {
        dispatch(gameOverAction(true))
    }

    // return <>{bot.returnComponent(botXY)}</>
    return !bulletState ? (
        <BotModel botXY={[...botXY]} form={bot.form} />
    ) : (
        <>
            <BotModel botXY={[...botXY]} form={bot.form} />
            <BotModel botXY={[...botXY]} form={bot.form} />
        </>
    )
}
