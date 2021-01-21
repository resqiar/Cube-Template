import React from 'react'

import Header from 'components/Header'
import Hero from 'components/Hero'
import Clients from 'components/Clients'
import Features from 'components/Features'
import Prices from 'components/Prices'


export const MainPage = () => {
    return (
        <div className="body-wrap">
            <Header></Header>
            <main className="site-content">
                <Hero></Hero>
                <Clients></Clients>
                <Features></Features>
                <Prices></Prices>
            </main>
        </div>
    )
}
