import React from 'react'
import './FullBanner.css'
import { Button } from '../Buttons/Button'
import { ArrowBackIos, ArrowForwardIos, Circle, CircleOutlined } from '@mui/icons-material';

export const FullBanner = () => {
    return (
        <div className='full-banner'>
            <div className='arrows'>
                <ArrowBackIos sx={{ fontSize: 32 }} />
                <ArrowForwardIos sx={{ fontSize: 32 }} />
            </div>
            <div className="nav-dots">
                <Circle />
                <CircleOutlined />
                <CircleOutlined />
                <CircleOutlined />
                <CircleOutlined />
            </div>
            <div className='text-banner'>
                <h3>Promoções de Outono</h3>
                <span>Confiras os melhores looks para combinar com você nesse Outono</span>
                <Button text='Conferir' />
            </div>
        </div>
    )
}
