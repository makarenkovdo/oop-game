import React from "react"
import BaseItem from "../classes/items/baseItem"
import "./../styles/gameStyles.css"

function ItemModel(props) {
    console.log(props.position)
    return (
        <div
            className='itemModelStyle'
            style={{
                top: props.position[1],
                left: props.position[0],
                borderColor: props.color,
                width: props.size[0],
                height: props.size[1],

                // backgroundColor: props.item[2]
            }}
        ></div>
    )
}
export default React.memo(ItemModel)
