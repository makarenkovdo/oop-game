export default class Command {
    constructor(
        abstractBotFactory,
        strategyFactory,
        smallSquareForm,
        bigSquareForm,
        highLineForm
    ) {
        this.abstractBotFactory = abstractBotFactory
        this.strategyFactory = strategyFactory
        this.form1 = smallSquareForm
        this.form2 = bigSquareForm
        this.form3 = highLineForm
    }
    execute(command) {
        switch (command) {
            case 1:
                return this.abstractBotFactory.create(
                    this.abstractBotFactory.case1,
                    this.abstractBotFactory.botLevel1,
                    this.form1.getForm(),
                    this.strategyFactory.create(
                        this.strategyFactory.case1,
                        this.strategyFactory.strategyType1
                    )
                )
            case 2:
                return this.abstractBotFactory.create(
                    this.abstractBotFactory.case1,
                    this.abstractBotFactory.botLevel2,
                    this.form2.getForm(),
                    this.strategyFactory.create(
                        this.strategyFactory.case2,
                        this.strategyFactory.strategyType2
                    )
                )
            case 3:
                return this.abstractBotFactory.create(
                    this.abstractBotFactory.case1,
                    this.abstractBotFactory.botLevel3,
                    this.form3.getForm(),
                    this.strategyFactory.create(
                        this.strategyFactory.case3,
                        this.strategyFactory.strategyType3
                    )
                )
            case 4:
                return this.abstractBotFactory.create(
                    this.abstractBotFactory.case2,
                    this.abstractBotFactory.botLevel1,
                    this.form1.getForm(),
                    this.strategyFactory.create(
                        this.strategyFactory.case1,
                        this.strategyFactory.strategyType1
                    )
                )
            case 5:
                return this.abstractBotFactory.create(
                    this.abstractBotFactory.case2,
                    this.abstractBotFactory.botLevel2,
                    this.form1.getForm(),
                    this.strategyFactory.create(
                        this.strategyFactory.case2,
                        this.strategyFactory.strategyType2
                    )
                )
            case 6:
                return this.abstractBotFactory.create(
                    this.abstractBotFactory.case2,
                    this.abstractBotFactory.botLevel3,
                    this.form1.getForm(),
                    this.strategyFactory.create(
                        this.strategyFactory.case3,
                        this.strategyFactory.strategyType3
                    )
                )
            case 7:
                return this.abstractBotFactory.create(
                    this.abstractBotFactory.case3,
                    this.abstractBotFactory.botLevel1,
                    this.form1.getForm(),
                    this.strategyFactory.create(
                        this.strategyFactory.case1,
                        this.strategyFactory.strategyType1
                    )
                )
            case 8:
                return this.abstractBotFactory.create(
                    this.abstractBotFactory.case3,
                    this.abstractBotFactory.botLevel2,
                    this.form1.getForm(),
                    this.strategyFactory.create(
                        this.strategyFactory.case2,
                        this.strategyFactory.strategyType2
                    )
                )
            case 9:
                return this.abstractBotFactory.create(
                    this.abstractBotFactory.case3,
                    this.abstractBotFactory.botLevel3,
                    this.form1.getForm(),
                    this.strategyFactory.create(
                        this.strategyFactory.case3,
                        this.strategyFactory.strategyType3
                    )
                )
            default:
                return false
        }
    }
}
