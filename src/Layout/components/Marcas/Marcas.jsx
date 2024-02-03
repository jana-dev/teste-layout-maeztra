import React from 'react'
import './Marcas.css'
import Comma from '../../../assets/comma.png'
import Melissa from '../../../assets/melissa.png'
import Forever from '../../../assets/forever.png'
import Zara from '../../../assets/zara.png'
import Anntaylor from '../../../assets/anntaylor.png'

export const Marcas = () => {
    return (
        <div className='tipmarcas'>
            <div className='tipmarcas-title'>
                <h4>Marcas Parceiras</h4>
            </div>
            <div className='tipmarcas-items'>
                <img src={Comma} alt="Marca parceira Comma" />
                <img src={Melissa} alt="Marca parceira Melissa" />
                <img src={Forever} alt="Marca parceira Forever" />
                <img src={Zara} alt="Marca parceira Zara" />
                <img src={Anntaylor} alt="Marca Parceira Ann Taylor" />
            </div>
        </div>
    )
}