import { useEffect } from "react"
import {
    boosterStatusAction,
    botMoveAction,
    botSizeInitAction,
    gameOverAction,
    selectBotPosition,
    selectGameOverStatus,
    selectHeroPosition,
} from "../redux/gameSlice"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import BoosterDecorator from "../classes/bots/decorators/boosterDecorator"
import CollisionChecker from "../classes/collisionChecker"

export default function BotContainer(props) {
    const gameOverStatus = useAppSelector(selectGameOverStatus)
    const pauseStatus = useAppSelector((state) => state.game.pauseStatus)
    const boosterStatus = useAppSelector((state) => state.game.boosterStatus)
    const collisionChecker = new CollisionChecker()

    const botSize = useAppSelector((state) => state.game.botSize)
    const heroSize = useAppSelector((state) => state.game.heroSize)
    const botXY = useAppSelector(selectBotPosition)
    const heroXY = useAppSelector(selectHeroPosition)

    const bot = props.bot
    const dispatch = useAppDispatch()

    // const bot = new Mover(new FormLine(16, 16))
    // const [botXY, setBotXY] = useState([100,100])

    if (boosterStatus) {
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
        dispatch(botMoveAction([newXPosition, newYPosition]))
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

    // if (heroXY[0] + 30 >= botXY[0] && heroXY[0] <= botXY[0] + botForm[0]) {
    //     if (heroXY[1] + 30 >= botXY[1] && heroXY[1] <= botXY[1] + botForm[1]) {
    //         dispatch(gameOverAction(true))
    //     }
    // }

    return <>{bot.returnComponent(botXY)}</>
}
