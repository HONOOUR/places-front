import React from 'react'
import { useLocation } from 'react-router-dom';

import './host.css'
import EnterButton from '../../component/button/EnterButton';

export default function Main() {
  const location = useLocation()
  const hostId = location.pathname.split('/')[2]
  console.log(hostId)
  return (
    <main className='main-view'>
      <h1 className='title'>{hostId}</h1>
      <p className='code'>HOST CODE : LONDON</p>
      <EnterButton name='CHAT ROOM' />
    </main>
  )
}
