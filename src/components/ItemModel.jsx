import React from "react"
import BaseItem from "../classes/items/baseItem"
import "./../styles/gameStyles.css"

export const newItem = new BaseItem()

export default function ItemModel(props) {
    console.log(props.color)
    return (
        <div
            className='itemModelStyle'
            style={{
                top: props.item[1],
                left: props.item[0],
                borderColor: props.color,

                // backgroundColor: props.item[2]
            }}
        ></div>
    )
}
// export default React.memo(ItemModel)
