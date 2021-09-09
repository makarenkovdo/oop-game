import React from 'react'
import './App.css'
import ItemInit from './containers/itemInit'
import Level1BotWrapper from './containers/botInit'
import { useAppSelector } from './app/hooks'
import Header from './components/Header'
import GameArea from './components/GameArea'
import HeroInit from './containers/heroInit'
import CollisionCheckerContainer from './containers/collisionCheckerContainer'
import MainMenu from './components/MainMenu'

function App() {
    const startStatus = useAppSelector((state) => state.game.startStatus)

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
    return (
        // !startStatus ? (
        //     <>
        //         <MainMenu />
        //         <GameArea />
        //     </>
        // ) :

        <>
            <Header />
            <GameArea />
            <HeroInit />
            <ItemInit />
            <Level1BotWrapper />
            <CollisionCheckerContainer />
            {/* {renderSwitch(levelState)} */}
        </>
    )
}

export default App
