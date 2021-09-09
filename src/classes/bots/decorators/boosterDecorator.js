export default class BoosterDecorator {
    constructor(bot) {
        this.bot = bot
        this.bot.interval -= 10
    }
}
