import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'

const App = () => {
  return (
    <div>
    App page hush kelibsiz

<Header/>

    <Link to={"/About"}>About pageg otisgh</Link>
    </div>
  )
}

export default App