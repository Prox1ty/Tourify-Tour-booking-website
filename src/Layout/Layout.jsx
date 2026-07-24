import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

function Layout() {
  return (
    <>
        <div className="min-h-screen flex flex-col bg-[var(--bg)]">
            <Navbar />
                <main className='flex-1'>
                    <Outlet />
                </main>
            <Footer />
        </div>
    </>

  )
}

export default Layout