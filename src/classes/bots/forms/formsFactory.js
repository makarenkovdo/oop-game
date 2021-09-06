import FormLine from "./baseForms"

export default class FormsFactory {
    create(type) {
        switch (type) {
            case "smallSquare":
                return new FormLine([16, 16])
            case "bigSquare":
                return new FormLine([38, 38])
            case "wideLine":
                return new FormLine([16, 78])
            case "highLine":
                return new FormLine([78, 16])
            default:
                return false
        }
    }
}
