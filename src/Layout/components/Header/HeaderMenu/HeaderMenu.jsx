import React from 'react'
import './HeaderMenu.css'
import Logo from '../../../../assets/logo.png'
import { ShoppingBagOutlined, FavoriteBorder, Person2Outlined } from '@mui/icons-material';
import { Button } from '../../Buttons/Button';

 export const HeaderMenu = () => {
    return(
        <div className='header-menu'>
           <div className='logo'>
                <img src={Logo} alt="Logo Maeztra" />
           </div>
           <div className='search-bar'>
                <input type="text" placeholder='O Que Você Busca?' />
                <Button text='Buscar' />
           </div>
           <div className='account-menu'>
               <button className='bt-account'>
                    <Person2Outlined sx={{ fontSize: 16 }} />
                    Minha Conta
               </button>
               <button className='bt-account'>
                    <FavoriteBorder sx={{ fontSize: 16 }} />
                    Minha Conta
               </button>
               <button className='bt-cart'>
                    <ShoppingBagOutlined sx={{ fontSize: 16 }} />
                    Meu Carrinho
               </button>
           </div>
        </div>
    )
}

