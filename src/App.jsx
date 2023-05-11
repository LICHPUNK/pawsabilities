import React from 'react'
import { Navbar } from './components'
import { HomePage } from './pages'

const App = () => {
  return (
    <div>
        <Navbar className='z-50' />
        <HomePage className='z-0' />
    </div>
  )
}

export default App