import React, { useState } from 'react';

import './maisVendidos.css'; // Adjust the filename casing if needed


import ferreiro from '../images/ferreiro.png'
import raffaelo from '../images/raffaello.png'
import sensacao from '../images/tacasensacao.png'
import kitkat from '../images/kitkat .png'
import triplokindle from '../images/triplokindle.png'



const AcaiTaca = ({ setAcaiTaca }) => {
  const handleSetMaisVendidosId = () => {
    // Supondo que o ID seja "mais-vendidos"
    setAcaiTaca("acai-taca");
  };

  const [minimizar, setMinimizar] = useState(true)

  return (
    <div className={`mais-vendidos ${minimizar ? '' : 'mais-vendidos-minimizado'}`} id='acai-taca'>
      <h1 onClick={()=>{setMinimizar(!minimizar)}}>Açai na taça</h1>
      <ul className='ul'>
        <li className='product'>
            <div className='center'>
            <h4>Taça ferreiro</h4>
            <p className='info-product'> 
            Açai, leite em pó, paçoca, castanha, banana, ferreiro rocher e nutella.
            </p>
           
            <p className='value-product'>
                300ml - R$ 23,50 <br/> 400ml - R$ 25,50<br/> 500ml - R$ 26,50
            </p>
            </div>
            <div className='image'>
                <img src={ferreiro}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Taça raffaello</h4>
            <p className='info-product'>
            Açai, leite em pó, paçoca, castanha, banana, ferreiro rocher e nutella.
        </p>
            <p className='value-product'>
            300ml - R$ 23,50 <br/> 400ml - R$ 25,50<br/> 500ml - R$ 26,50
            </p>
            </div>
            <div className='image'>
                <img src={raffaelo}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Taça sensação</h4>
            <p className='info-product'>
           Açai,mousse de morango, chantilly, morango, leite em pó, gotas de chocolate e nutela.
       </p>
            <p className='value-product'>
            300ml - R$ 23,50 <br/> 400ml - R$ 25,50<br/> 500ml - R$ 26,50
                </p>
            </div>
            <div className='image'>
                <img src={sensacao}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Taça kitkat</h4>
            <p className='info-product'>
            Açai, leite em pó, mousse ninho, morango e kitkat em pedaços.
       </p>
            <p className='value-product'>
            300ml - R$ 23,50 <br/> 400ml - R$ 25,50<br/> 500ml - R$ 26,50
            </p>
            </div>
            <div className='image'>
                <img src={kitkat}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Super taça TRIPLO KINDER</h4>
            <p className='info-product'>
            Açai, leite em pó, mousse de ninho, ovomaltine, castanha, kinder, kinder bueno, kinder ovo com brinquedo, nutella, morango e banana.
       </p>
            <p className='value-product'>600ml - R$ 40,90</p>
            </div>
            <div className='image'>
                <img src={triplokindle}/>
            </div>
        </li>

       
      </ul>

    </div>
  );
};

export default AcaiTaca;
