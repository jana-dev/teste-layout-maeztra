import React from 'react'
import './Footer.css'
import { FooterEnd } from './FooterEnd'
import { VtexMenu } from './VtexMenu'

export const Footer = () => {
    return (
        <div className='footer'>
            <VtexMenu />
            <FooterEnd />
        </div>
    )
}