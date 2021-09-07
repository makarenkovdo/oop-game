import FormBaseClass from "./baseForms"

export default class FormsFactory {
    create(type) {
        switch (type) {
            case "smallSquare":
                return new FormBaseClass([16, 16])
            case "bigSquare":
                return new FormBaseClass([38, 38])
            case "wideLine":
                return new FormBaseClass([16, 78])
            case "highLine":
                return new FormBaseClass([78, 16])
            default:
                return false
        }
    }
}
