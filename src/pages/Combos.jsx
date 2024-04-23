import React, { useState } from 'react';

import './maisVendidos.css'; // Adjust the filename casing if needed


import kids from '../images/combokids.png'
import via from '../images/combovialactea.png'
import combogalaxia from '../images/combogalaxia.png'



const Combos = ({ setCombos }) => {
  const handleSetMaisVendidosId = () => {
    // Supondo que o ID seja "mais-vendidos"
    setCombos("combos");
  };

  const [minimizar, setMinimizar] = useState(true)

  return (
    <div className={`mais-vendidos ${minimizar ? '' : 'mais-vendidos-minimizado'}`} id='combos'>
      <h1 onClick={()=>{setMinimizar(!minimizar)}}>Combos</h1>
      <ul className='ul'>
        <li className='product'>
            <div className='center'>
            <h4>Combo Kids</h4>
            <p className='info-product'>
            1x Júpiter<br/>
            1x Fritas 100g<br/>
            1x Refrigerante 200ml<br/>
            1x Brinquedo miniatura</p>
            <p className='value-product'>R$ 37,90</p>
            </div>
            <div className='image'>
                <img src={kids}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Combo via láctea</h4>
            <p className='info-product'>
            2x Júpiter's<br/>
            1x Refrigerante 600ml<br/>
            2x Brinquedo miniatura<br/>
        </p>
            <p className='value-product'>R$ 63,90</p>
            </div>
            <div className='image'>
                <img src={via}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Combo galáxia</h4>
            <p className='info-product'>
            2x Estrelas<br/>
            1x Refrigerante 1l<br/>
            2x Brinquedo miniatura
       </p>
            <p className='value-product'>R$ 79,90</p>
            </div>
            <div className='image'>
                <img src={combogalaxia}/>
            </div>
        </li>

       
      </ul>

    </div>
  );
};

export default Combos;
