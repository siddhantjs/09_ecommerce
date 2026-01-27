import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

import React, { useState } from 'react'
import Footer from '../components/Footer'

function Layout() {
  const [search, setSearch] = useState("");
  return (
    <div className={`min-h-screen flex flex-col`}>
        <Navbar search={search} setSearch={setSearch}/>

        {/* MAIN CONTENT */}
      <main className="flex-1">
        <Outlet context={{ search }} />
      </main>

        <Footer />
    </div>
  )
}

export default Layout