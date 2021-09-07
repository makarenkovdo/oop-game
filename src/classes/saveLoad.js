export default class SaveLoad {
    constructor(state) {
        this.state = state
    }
    save(state) {
        localStorage.clear()
        let i = 0
        for (i in state) {
            localStorage.setItem(i, state[i])
        }
        return new SaveLoad(state)
    }
    load() {
        let obj = {}

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)
            let stringValue = localStorage.getItem(key)
            let value = []
            let resValue = stringValue
            if (
                key !== "gameOverStatus" &&
                key !== "pauseStatus" &&
                key !== "saveStatus" &&
                key !== "level"
            ) {
                value = stringValue.split(",")
                resValue = value.map(Number)
            } else if (key === "level") {
                resValue = +resValue[0]
            } else {
                resValue = stringValue === "true"
            }
            obj[key] = resValue
        }
        return obj
    }
}
