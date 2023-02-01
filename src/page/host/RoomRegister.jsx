import React from 'react'
import InputBox from '../../component/inputBox/InputBox'
import SubmitButton from '../../component/button/SubmitButton'

export default function RoomRegister() {
  const handleInputChange = (e) => {
    console.log(e.target.value);
  } 
  const handleSubmitChange = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <h1 className='title'>Add Room</h1>
      <div className='box-align'>
        <InputBox onChange={handleInputChange} />
        <SubmitButton name='NEXT' onSubmit={handleSubmitChange}/>
      </div>
    </>
  )
}
