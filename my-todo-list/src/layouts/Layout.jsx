import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderComponent } from '../components/header/HeaderComponent'

export const Layout = () => {
  return (
    <div className='Layout'>
        <HeaderComponent/>
        <main className ='Main'>
            <div className='ActionContainer'>
                <button>Ação</button>
            </div>
            <section className='MainContainer'>
                <Outlet/>
            </section>
        </main>
    </div>
  )
}
