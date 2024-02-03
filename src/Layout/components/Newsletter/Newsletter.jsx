import React from 'react'
import './Newsletter.css'
import { Button } from '../Buttons/Button'

export const Newsletter = () => {
    return (
        <div className='newsletter'>
            <div className='newsletter-title'>
                <h4>Recebe Nossa Newsletter</h4>
            </div>
            <div className='newsletter-search-bar'>
                <div className="newsletter-search-bar-content">
                    <input type="text" placeholder='Digite seu e-mail' />
                    <Button text='Enviar' />
                </div>
            </div>
        </div>
    )
}