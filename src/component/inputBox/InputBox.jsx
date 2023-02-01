import React, { useRef } from 'react'

import './inputBox.css'

export default function InputBox({onChange}) {

  return (
    <>
      <input className='input-box' onChange={onChange}/>        
    </>
  )
}
