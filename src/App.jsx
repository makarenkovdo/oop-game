import React from "react"
import "./App.css"
import ItemContainer from "./containers/itemContainer"
import Game from "./containers/game"
import Level1BotWrapper from "./containers/botInit"
import { useAppSelector } from "./app/hooks"
import Header from "./components/Header"
import GameArea from "./components/GameArea"

function App() {
    const startStatus = useAppSelector((state) => state.game.startStatus)
    console.log("before Level")
    // const levelState = useAppSelector(selectLevel)
    // function renderSwitch(levelState) {
    //     console.log("here")
    //     switch (levelState) {
    //         case 1:
    //             return <Level1BotWrapper />
    //         case 2:
    //             return <Level2BotWrapper />
    //         default:
    //             return false
    //     }
    // }
    return startStatus ? (
        <Level1BotWrapper />
    ) : (
        <>
            <GameArea />
            <Header />
            <Game />
            <ItemContainer />
            <Level1BotWrapper />
            {/* {renderSwitch(levelState)} */}
        </>
    )
}

export default App
