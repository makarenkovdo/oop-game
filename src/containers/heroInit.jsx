import App from "../App"
import Hero from "../classes/hero"
import Game from "./game"

export default function HeroInit(props) {
    const newHero = new Hero()
    return (
        <>
            {/* <App /> */}
            <Game newHero={newHero} />
        </>
    )
}
