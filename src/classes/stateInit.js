export function stateInit (newHero, dog) {
    let gameAreaGrid = Array(20).fill(Array(30).fill(null));
    gameAreaGrid=gameAreaGrid.map((val,i)=>val.map((val,i)=>i))
    for (let i=0; i++; i<=20) {
        for (let i=0; i++; i<=30) {
            gameAreaGrid[i]=i
        }
    }
    // gameAreaGrid[0[0]] = newHero
    // gameAreaGrid[29[29]] = dog
    return gameAreaGrid

}