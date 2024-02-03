import React from 'react'
import './Vitrine.css'
import FotoProduto from '../../../assets/produto.png'
import FotoProduto2 from '../../../assets/Produto2.png'
import { Produto } from './Produto'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

export const Vitrine = () => {

  const produtos = [
    {
      image: FotoProduto,
      colors: ['#DEAC71', '#D37164', '#6497D3', '#3C3B79'],
      price: '500,00',
      title: 'Faux Suede Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
    },
    {
      image: FotoProduto2,
      colors: ['#1C1A19', '#D84E4B', '#CFC9B0', '#EAE9E5'],
      price: '320,00',
      title: 'Ruched Rose Print Mini Skirt',
      description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
    },
    {
      image: FotoProduto,
      colors: ['#DEAC71', '#D37164', '#6497D3', '#3C3B79'],
      price: '500,00',
      title: 'Faux Suede Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
    },
    {
      image: FotoProduto2,
      colors: ['#1C1A19', '#D84E4B', '#CFC9B0', '#EAE9E5'],
      price: '320,00',
      title: 'Ruched Rose Print Mini Skirt',
      description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
    },
    {
      image: FotoProduto,
      colors: ['#DEAC71', '#D37164', '#6497D3', '#3C3B79'],
      price: '500,00',
      title: 'Faux Suede Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
    },
  ];

  return (
    <div className='vitrine'>
      <div className='arrows'>
        <ArrowBackIos sx={{ fontSize: 32 }} />
        <ArrowForwardIos sx={{ fontSize: 32 }} />
      </div>
      <h4>As Mais Pedidas</h4>
      <div className='vitrine-items'>
        {produtos.map((produto, index) => (
          <Produto key={index} {...produto} />
        ))}
      </div>
    </div>
  )
}