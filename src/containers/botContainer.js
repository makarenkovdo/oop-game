import { useEffect } from "react"
import {
    botMoveAction,
    botSizeInitAction,
    selectBotPosition,
    selectGameOverStatus,
    selectHeroPosition,
} from "../redux/gameSlice"
import { useAppDispatch, useAppSelector } from "../app/hooks"

export default function BotContainer(props) {
    const gameOverStatus = useAppSelector(selectGameOverStatus)
    const pauseStatus = useAppSelector((state) => state.game.pauseStatus)

    const bot = props.bot
    const dispatch = useAppDispatch()

    // const bot = new Mover(new FormLine(16, 16))
    // const [botXY, setBotXY] = useState([100,100])
    const botXY = useAppSelector(selectBotPosition)
    const heroXY = useAppSelector(selectHeroPosition)

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

    return <>{bot.returnComponent(botXY)}</>
}
