import React, { useState } from 'react'

import InputBox from '../../component/inputBox/InputBox'
import SubmitButton from '../../component/button/SubmitButton'
import './host.css'

export default function HostRegister({ onCheck }) {
  const [id, setId] = useState(null)
  const [password, setPassword] = useState(null)

  const handleIdInputChange = (e) => {
    setId(e.target.value)
  }

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmitChange = (e) => {
    e.preventDefault()
    console.log(id)
    console.log(password)
    onCheck(true)
  }

  
  return (
    <>
      <h1 className='title'>Host Register</h1>
      <div className='box-align'>
        <InputBox inputValue={id} onChange={handleIdInputChange} />
        <InputBox inputValue={password} onChange={handlePasswordInputChange}/>
        <SubmitButton name='NEXT' onSubmit={handleSubmitChange} />
      </div>
    </>
  )
}
