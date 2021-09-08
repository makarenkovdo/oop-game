export default class Command {
    constructor(
        factory,
        simpleMover,
        jumper,
        smallSquareForm,
        bigSquareForm,
        highLineForm,
        moveEasy,
        moveNormal,
        moveHard
    ) {
        this.factory = factory
        this.botType1 = simpleMover
        this.botType2 = jumper
        this.form1 = smallSquareForm
        this.form2 = bigSquareForm
        this.form3 = highLineForm
        this.strategy1 = moveEasy
        this.strategy2 = moveNormal
        this.strategy3 = moveHard
    }
    execute(command) {
        switch (command) {
            case 1:
                return this.factory.create(
                    this.botType1,
                    this.form1.getForm(),
                    this.strategy1
                )
            case 2:
                return this.factory.create(
                    this.botType2,
                    this.form2.getForm(),
                    this.strategy3
                )
            case 3:
                return this.factory.create(
                    this.botType2,
                    this.form3.getForm(),
                    this.strategy3
                )
            default:
                return false
        }
    }
}
