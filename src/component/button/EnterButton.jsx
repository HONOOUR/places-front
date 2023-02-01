import React from 'react'
import './button.css'

export default function EnterButton({name, onSubmit}) {
  return (
    <button className='enter-button' type='submit' onClick={onSubmit}>{name}</button>
  )
}
