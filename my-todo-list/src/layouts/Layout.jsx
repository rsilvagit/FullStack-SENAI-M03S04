import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='Layout'>
        {/* Substituir por compnonente header */}
        <header>Header da aplicação</header>
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
