function one() {
    let i = 2
    return function two(g) {
        console.log(i + g)
    }
}

const a = one()

a(6)
