import React from 'react'
import './../styles/gameStyles.css'

function BotModel(props) {
    return (
        <div
            className='botModelStyle'
            style={{
                top: props.botXY[1],
                left: props.botXY[0],
                width: props.form[0],
                height: props.form[1],
                borderInlineWidth: 4,
                backgroundColor: props.color,
            }}
        ></div>
    )
}

export default React.memo(BotModel)
