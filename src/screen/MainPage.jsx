import React from 'react'

import Header from 'components/Header'
import Hero from 'components/Hero'


export const MainPage = () => {
    return (
        <div className="body-wrap">
            <Header></Header>
            <main className="site-content">
                <Hero></Hero>
            </main>
        </div>
    )
}
