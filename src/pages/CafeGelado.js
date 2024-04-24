import React, { useState } from 'react';

import './maisVendidos.css'; // Adjust the filename casing if needed


import tradicional from '../images/tradicional.jpeg'
import space from '../images/spaceacai.jpeg'
import cafegeladonutela from '../images/cafegeladonutela.jpeg'
import nutela from '../images/nutela.jpeg'
import maltine from '../images/maltine.jpeg'
import kids from '../images/kids.jpeg'



const CafeGelado = ({ setCafeGelado }) => {
  const handleSetMaisVendidosId = () => {
    // Supondo que o ID seja "mais-vendidos"
    setCafeGelado("cafe-gelado");
  };

  const [minimizar, setMinimizar] = useState(true)

  return (
    <div className={`mais-vendidos ${minimizar ? '' : 'mais-vendidos-minimizado'}`} id='cafe-gelado'>
      <h1 onClick={()=>{setMinimizar(!minimizar)}}>Café gelado</h1>
      <ul className='ul'>
        <li className='product'>
            <div className='center'>
            <h4>Café tradicional</h4>
            <p className='info-product'> 
           Café gelado cremoso com chantily.
            </p>
           
            <p className='value-product'>
                300ml - R$ 15,00 
            </p>
            </div>
            <div className='image'>
                <img src={tradicional}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Café de nutella</h4>
            <p className='info-product'>
            Café gelado de nutella com chantily.
       </p>
            <p className='value-product'>
                300ml - R$ 20,00 
            </p>
            </div>
            <div className='image'>
                <img src={cafegeladonutela}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Café maltine</h4>
            <p className='info-product'>
            Café gelado de ovomaltine com chantily.
       </p>
            <p className='value-product'>
            300ml - R$ 20,00
            </p>
            </div>
            <div className='image'>
                <img src={maltine}/>
            </div>
        </li>
       
      </ul>

    </div>
  );
};

export default CafeGelado;
