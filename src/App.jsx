import React from 'react'
import { Navbar, Features } from './components'
import { HomePage } from './pages'

const App = () => {
  return (
    <div className='bg-gradient-to-b from-[#2d425ce6] to-[#1F2D3D]'>
        <Navbar className='z-50' />
        <HomePage className='z-0' />
        <Features className='z-0' />
    </div>
  )
}

export default App