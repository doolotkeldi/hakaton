import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { Contact, Home } from './page'
import Main from './components/Main/Main'
// import "./assets/css/App"

function App() {
  return (
    <div>
      <Routes>


        <Route path='/' element={<Layout />}>
          <Route index element={<Home  />}/>
          <Route path='/contact' element={<Contact />}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App

