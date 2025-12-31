import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

import React from 'react'
import Footer from '../components/Footer'

function Layout() {
  return (
    <div className={`min-h-screen flex flex-col`}>
        <Navbar />

        {/* MAIN CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

        <Footer />
    </div>
  )
}

export default Layout