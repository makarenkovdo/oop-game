export default class FormBaseClass {
    constructor(array, color) {
        this.height = array[0]
        this.width = array[1]
        this.color = color
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
