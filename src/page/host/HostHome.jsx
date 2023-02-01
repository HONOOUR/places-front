import React, { useState } from 'react'
import HostRegister from './HostRegister'
import RoomRegister from './RoomRegister';

export default function HostHome() {
  const [check, setCheck] = useState(false);

  return (
    <>
      {check ? null : <HostRegister onCheck={setCheck}/>}
      {check ? <RoomRegister /> : null}
    </>
  )
}
