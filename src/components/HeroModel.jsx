import React from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import SaveLoad from "../classes/saveLoad"
import { botMoveAction, loadStateAction } from "../redux/gameSlice"
import "./../styles/gameStyles.css"

function HeroModel(props) {
    return (
        <div
            className='heroModelStyle'
            style={{
                top: props.heroXY[1],
                left: props.heroXY[0],
                width: props.heroSize[0],
                height: props.heroSize[1],
            }}
        ></div>
    )
}

export default React.memo(HeroModel)
