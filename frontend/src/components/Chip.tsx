import React from 'react'
import '../App.css'
import { IUser } from '../interfaces';

interface IChipProps {
  onClickCross: Function;
  user: IUser
}

const Chip = (props: IChipProps) => {
  const onClickCross = props.onClickCross;
  const { name, id } = props.user;
  return (
    <div>
      <div id='chip'>
        <div id='logo'><img alt='Icon' style={{ height: '1.5rem', width: '1.5rem', borderRadius: '50%' }} src='/logo192.png'></img></div>
        <div id='name'>{name}</div>
        <div id='cross' onClick={() => onClickCross(id)}>X</div>
      </div>
    </div>
  )
}

export default Chip