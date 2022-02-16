import React from 'react'
import '../style/base.sass'

const Emoji = props => {
    return(
        <>
          <img className={props.classname} style={{width: '1.5vw', height: '1.5vw', marginLeft: '0.4vw', marginRight:'0.4vw' , marginBottom:'-0.365vw'}} src={props.src} alt="" />  
        </>
    )
}

export default Emoji