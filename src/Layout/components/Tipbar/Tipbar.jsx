import React from 'react'
import './Tipbar.css'
import { Tip } from './Tip'

import { PublicOutlined, WarehouseOutlined, LoopOutlined, LocalOfferOutlined, LocalShippingOutlined } from '@mui/icons-material';

export const Tipbar = () => {
    return (
        <div className='tipbar'>
            <div className='tipbar-title'>
                <h4>Por que comprar na Maeztra?</h4>
            </div>
            <div className='tipbar-items'>
                <Tip materialIcon={<PublicOutlined />} title='Produtos importados' text='Produto de Alta Qualidade' />
                <Tip materialIcon={<WarehouseOutlined />} title='Estoque no Brazil' text='Produtos mais perto de você!' />
                <Tip materialIcon={<LoopOutlined />} title='Trocas Garantidas' text='Trocas em até 48 horas, vejas as regras' />
                <Tip materialIcon={<LocalOfferOutlined />} title='Ganhe 5% off' text='Pagando à vista no Cartão' />
                <Tip materialIcon={<LocalShippingOutlined />} title='Frete Grátis' text='Em compras acima de R$ 499,00' />
            </div>
        </div>
    )
}