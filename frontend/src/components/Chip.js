import React from 'react'
import Logo from '../Images/Logo'

import '../App.css'
const Chip = (props) => {
    const onClickCross = props.onClickCross;
    const {image, email, name, id} = props.user;
  return (
    <div>
        <div id='chip'>
            <div id='logo'><img style={{height:'1.5rem',width:'1.5rem',borderRadius:'50%'}} src='/logo192.png'></img></div>
            <div id='name'>{name}</div>
            <div id='cross' onClick={()=>onClickCross(id)}>X</div>
        </div>
    </div>
  )
}

export default Chip