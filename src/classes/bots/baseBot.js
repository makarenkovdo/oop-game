import BotModel from "../../components/BotModel"

export default class BaseBot {
    constructor(position, interval, form) {
        this.position = position
        this.health = 0
        this.interval = interval
        this.form = form //the bridge realisation
    }

    returnComponent(botXY) {
        return <BotModel botXY={[...botXY]} form={this.form} />
    }
}
