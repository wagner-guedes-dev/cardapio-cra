import React, { useState } from 'react';
import './maisVendidos.css'

import estrela from '../images/estrela.png'
import sensaçao from '../images/tacasensacao.png'
import nebulosa from '../images/nebulosa.png'
import FritasCheddar from '../images/batatacheddar.png'


const MaisVendidos = ({ setMaisVendidosId }) => {
  const handleSetMaisVendidosId = () => {
    // Supondo que o ID seja "mais-vendidos"
    setMaisVendidosId("mais-vendidos");
  };

  const [minimizar, setMinimizar] = useState(true)

  return (
    <div className={`mais-vendidos ${minimizar ? '' : 'mais-vendidos-minimizado'}`} id='mais-vendidos'>
      <h1 onClick={()=>{setMinimizar(!minimizar)}}>Mais vendidos</h1>
      <ul className='ul'>
        <li className='product'>
            <div className='center'>
            <h4>Estrela</h4>
            <p className='info-product'>Pão brioche, burguer artesanal de 90g, cheddar americano, fatias de bacon e molho barbecue.</p>
            <p className='value-product'>R$ 23,00</p>
            </div>
            <div className='image'>
                <img src={estrela}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Taça sensação</h4>
            <p className='info-product'>Açai,mousse de morango, chantilly, morango, leite em pó, gotas de chocolate e nutela.</p>
            <p className='value-product'>300ml - R$ 23,70 <br/> 400ml - R$ 24,50 <br/> 500ml - R$ 26,50</p>
            </div>
            <div className='image'>
                <img src={sensaçao}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Nebulosa</h4>
            <p className='info-product'>Pão brioche, burguer artesanal de 90g, cheddar americano, fatias de bacon, cebola caramelizada e maionese caseira.</p>
            <p className='value-product'>R$ 25,00</p>
            </div>
            <div className='image'>
                <img src={nebulosa}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Fritas com cheddar e bacon</h4>
            <p className='info-product'>400g de batata frita com cheddar e bacon.</p>
            <p className='value-product'>R$ 36,00</p>
            </div>
            <div className='image'>
                <img src={FritasCheddar}/>
            </div>
        </li>
      </ul>

    </div>
  );
};

export default MaisVendidos;
