import App from "../App"
import Hero from "../classes/hero"
import Game from "./game"

export default function HeroInit(props) {
    props.secondHero.getPose(500, 500)
    props.change()

    const newHero = new Hero()

    return (
        <>
            {/* <App /> */}
            <Game newHero={newHero} />
        </>
    )
}
