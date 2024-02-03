import React from 'react'
import './Layout.css'
import Header from './components/Header/Header'
import { FullBanner } from './components/FullBanner/FullBanner'
import { Tipbar } from './components/Tipbar/Tipbar'
import { Marcas } from './components/Marcas/Marcas'
import { Vitrine } from './components/Vitrine/Vitrine'
import { Banner } from './components/Banner/Banner'
import { Newsletter } from './components/Newsletter/Newsletter'
import { Footer } from './components/Footer/Footer'


const Layout = () => {
    return (
        <>
            <Header />
            <FullBanner />
            <div className="container">
                <Tipbar />
                <Marcas />
                <Vitrine />
                <Banner />
            </div>
            <Newsletter />
            <Footer />
        </>
    )
}

export default Layout