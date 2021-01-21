import React from 'react'

import Header from 'components/Header'
import Hero from 'components/Hero'
import Clients from 'components/Clients'


export const MainPage = () => {
    return (
        <div className="body-wrap">
            <Header></Header>
            <main className="site-content">
                <Hero></Hero>
                <Clients></Clients>
            </main>
        </div>
    )
}
