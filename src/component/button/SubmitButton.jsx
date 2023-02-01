import React from 'react'
import './button.css'

export default function SubmitButton({name, onSubmit}) {
  return (
    <button className='next-button' type='submit' onClick={onSubmit}>{name}</button>
  )
}