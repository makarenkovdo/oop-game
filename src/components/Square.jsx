/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { squareStyle } from '../styles/gameStyles'
import '../styles/gameStyles.css'
// import { css, jsx } from '@emotion/css'

export default function Square(props) {
    return <span
        key={props.i}
        // css={squareStyle('grey')}
        className='squareStyle'
        

    ></span >


}