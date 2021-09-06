import App from "../App"
import Hero from "../classes/hero"
import Game from "./game"

export default function HeroInit(props) {
    console.log(props.secondHero)
    props.secondHero.getPose(500, 500)
    console.log(props.secondHero)
    props.change()

    console.log("hreoInit")
    const newHero = new Hero()

    return (
        <>
            {/* <App /> */}
            <Game newHero={newHero} />
        </>
    )
}
