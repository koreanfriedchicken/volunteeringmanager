import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'


const Body = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/signin' element={<SignIn />}/>
        </Routes>
    </div>
  )
}

export default Body