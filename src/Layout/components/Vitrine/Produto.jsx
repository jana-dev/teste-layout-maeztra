import React from 'react'
import './Produto.css'

export const Produto = (props) => {
    return (
        <div className='produto'>
            <div className="img-produto">
                <img src={props.image} alt="Produto" />
            </div>
            <div className="colors-produto">
                {props.colors.map((color, index) => (
                    <div
                        key={index}
                        className="color-square"
                        style={{ backgroundColor: color }}
                    ></div>
                ))}
            </div>
            <div className="produto-content">
                <p className='price'>R$ {props.price}</p>
                <p className='title-product'>{props.title}</p>
                <p className='description-product'>{props.description}</p>
                <button>Adicionar</button>
            </div>
        </div>
    )
}