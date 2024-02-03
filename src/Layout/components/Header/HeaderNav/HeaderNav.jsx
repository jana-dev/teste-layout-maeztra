import React from 'react'
import './HeaderNav.css'
import Dress from '../../../../assets/dress-svg.svg'

 export const HeaderNav = () => {
    return(
        <div className='header-nav'>
           <ul>
                <li>
                    <img src={Dress} alt="ícone de vestido" />
                    <a href="#novidades">Novidades</a>
                </li>
                <li>
                    <a href="#vestidos">Vestidos</a>
                </li>
                <li>
                    <a href="#roupas">Roupas</a>
                </li>
                <li>
                    <a href="#sapatos">Sapatos</a>
                </li>
                <li>
                    <a href="#lingerie">Lingerie</a>
                </li>
                <li>
                    <a href="#acessorios">Acessórios</a>
                </li>
                <li>
                    <a href="#outlet">OUTLET</a>
                </li>
           </ul>
        </div>
    )
}

