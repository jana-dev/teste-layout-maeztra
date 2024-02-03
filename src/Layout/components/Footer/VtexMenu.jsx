import React from 'react'
import './VtexMenu.css'

export const VtexMenu = () => {
    return (
        <div className='vtex-menu'>
            <div className="info">
                <h4>Informações</h4>
                <ul>
                    <li>Quem somos</li>
                    <li>Prazo de Envio</li>
                    <li>Trocas e Devoluções</li>
                    <li>Promoções e Cupons</li>
                </ul>
            </div>
            <div className="account">
                <h4>Minha Conta</h4>
                <ul>
                    <li>Minha Conta</li>
                    <li>Meus Pedidos</li>
                    <li>Cadastre-se</li>
                </ul>
            </div>
            <div className="lojas">
                <h4>Onde nos encontrar</h4>
                <ul>
                    <li>Lojas</li>
                    <li>Endereço</li>
                </ul>
            </div>
        </div>
    )
}