import React, { useState } from 'react';

import './maisVendidos.css'; // Adjust the filename casing if needed


import tradicional from '../images/tradicional.jpeg'
import space from '../images/spaceacai.jpeg'
import creme from '../images/cremeacai.jpeg'
import nutela from '../images/nutela.jpeg'
import natural from '../images/natural.jpeg'
import kids from '../images/kids.jpeg'



const AcaiCopo = ({ setAcaiCopo }) => {
  const handleSetMaisVendidosId = () => {
    // Supondo que o ID seja "mais-vendidos"
    setAcaiCopo("acai-copo");
  };

  const [minimizar, setMinimizar] = useState(true)

  return (
    <div className={`mais-vendidos ${minimizar ? '' : 'mais-vendidos-minimizado'}`} id='acai-copo'>
      <h1 onClick={()=>{setMinimizar(!minimizar)}}>Açai</h1>
      <ul className='ul'>
        <li className='product'>
            <div className='center'>
            <h4>Açai tradicional</h4>
            <p className='info-product'> 
            Açai, leite em pó, granola, banana e leite condensado.
            </p>
           
            <p className='value-product'>
                300ml - R$ 13,50 <br/> 500ml - R$ 18,50
            </p>
            </div>
            <div className='image'>
                <img src={tradicional}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Açai de creme</h4>
            <p className='info-product'>
            Açai, creme de ninho e mousse de morango.
       </p>
            <p className='value-product'>
                300ml - R$ 14,50 <br/> 500ml - R$ 20,50
            </p>
            </div>
            <div className='image'>
                <img src={creme}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Açai Natural</h4>
            <p className='info-product'>
            Açai, morango, banana, uva(sem semente) e granola.
       </p>
            <p className='value-product'>
            300ml - R$ 14,50 <br/> 500ml - R$ 20,50
            </p>
            </div>
            <div className='image'>
                <img src={natural}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Açai kids</h4>
            <p className='info-product'>
           Açai, ovomaltine, leite em pó, confete e ouro branco.
       </p>
            <p className='value-product'>
            300ml - R$ 14,50 <br/>  500ml - R$ 20,50
                </p>
            </div>
            <div className='image'>
                <img src={kids}/>
            </div>
        </li>


        <li className='product'>
            <div className='center'>
            <h4>Açai com nutella</h4>
            <p className='info-product'>
            Açai, leite em pó, morango, creme de ninho e nutella.
        </p>
            <p className='value-product'>
            300ml - R$ 18,00 <br/> 500ml - R$ 25,50
            </p>
            </div>
            <div className='image'>
                <img src={nutela}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Açai Space</h4>
            <p className='info-product'>
            Açai, bis, nutella e morango.
       </p>
            <p className='value-product'>
                300ml - R$ 18,00 <br/> 500ml - R$ 25,50
            </p>
            </div>
            <div className='image'>
                <img src={space}/>
            </div>
        </li>

        
       

       
      </ul>

    </div>
  );
};

export default AcaiCopo;
