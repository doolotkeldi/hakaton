import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Main/>
      <Footer />
    </div>
  )
}

export default Layout
