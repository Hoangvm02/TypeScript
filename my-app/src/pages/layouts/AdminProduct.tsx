import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from '../Dashboard'
const AdminProduct = () => {
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

export default AdminProduct