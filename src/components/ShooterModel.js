import BotModel from "./BotModel"

export default function ShooterModel(props) {
    return (
        <>
            <BotModel
                botXY={props.shooterPosition}
                form={props.shooterSize}
                color={props.shooterColor}
            />
            <BotModel
                botXY={props.bulletPosition}
                form={props.bulletSize}
                color={props.bulletColor}
            />
        </>
    )
}
