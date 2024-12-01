import React from 'react'
import styles from './Pad.module.css'

const Pad = (props) => {

    const style = {
        backgroundColor:props.color
        
    };

    
    
  return (
    <div className= {styles.container}>
        <button style={style} className={props.on ? styles.on : ""} onClick={()=>{props.handleClick(props.id)}}></button>
    </div>
  )
}

export default Pad
