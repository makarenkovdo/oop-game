export default class FormLine {
    constructor(array) {
        this.height = array[0]
        this.width = array[1]
    }

    getForm() {
        return [this.width, this.height]
    }
    // getForm() {
    //     return ([this.height, this.width])
    // }
    // getHeight() {
    //     return (this.height)
    // }
    // getWidth() {
    //     return (this.width)
    // }
}
