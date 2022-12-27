import React from 'react'
import '../style/base.sass'

const Emoji = props => {
    return(
        <>
          <img className={props.style} style={{width: '1.4vw', height: '1.4vw', marginLeft: '0.4vw', marginRight:'0.4vw' , marginBottom:'-0.365vw'}} src={props.src} alt="" />  
        </>
    )
}

export default Emoji