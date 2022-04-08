import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from '../Dashboard'

const AdminCategory = () => {
  return (
    <div>
        <header>
            <Dashboard/>
        </header>
        <main>
            <Outlet/>
        </main>

    </div>
  )
}

export default AdminCategory