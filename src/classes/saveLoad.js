export default class SaveLoad {
    constructor(state) {
        this.state = state
    }
    save(state) {
        localStorage.clear()
        console.log(state)
        let i = 0
        for (i in state) {
            console.log(i, state[i])
            localStorage.setItem(i, state[i])
        }
        console.log(localStorage)
        return new SaveLoad(state)
    }
    load() {
        let i = 0
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
                console.log(resValue)
                resValue = +resValue[0]
            } else {
                resValue = stringValue === "true"
            }
            obj[key] = resValue
            console.log(key, stringValue, value, obj)
        }
        console.log(obj)
        return obj
    }
}
