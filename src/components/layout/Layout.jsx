import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import Banner from '../BannerSec/Banner'
import BannerYell from '../BannerYel/BannerYell'

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Banner/>
      <BannerYell/> 
      <Footer />
    </div>
  )
}

export default Layout
