import BotModel from "../../components/BotModel"

export default class BaseBot {
    constructor(position, interval, form, type) {
        this.position = position
        this.health = 0 //TODO
        this.interval = interval
        this.form = form //the bridge realisation
        this.type = type
    }

    returnComponent(botXY) {
        return <BotModel botXY={[...botXY]} form={this.form} />
    }
}
