import React from 'react';
import BaseItem from '../classes/items/baseItem';
import './../styles/gameStyles.css'

export const newItem = new BaseItem()

const ExitModel = (props) => {
    console.log('props.exitXY', props);
    return <div
    className='exitModelStyle'
    style={{top: props.exitXY[1],
        left: props.exitXY[0]}}

    ></div>
}
export default React.memo(ExitModel)
