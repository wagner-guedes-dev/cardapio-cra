import React, { useState } from 'react';

import './maisVendidos.css'; // Adjust the filename casing if needed


import tradicional from '../images/tradicional.jpeg'
import space from '../images/spaceacai.jpeg'
import creme from '../images/cremeacai.jpeg'
import kitkat from '../images/kitkat .png'
import triplokindle from '../images/triplokindle.png'



const MonteSeuAcai = ({ setMonteSeuAcai }) => {
  const handleSetMaisVendidosId = () => {
    // Supondo que o ID seja "mais-vendidos"
    setMonteSeuAcai("monte-acai");
  };

  const [minimizar, setMinimizar] = useState(true)

  return (
    <div className={`mais-vendidos ${minimizar ? '' : 'mais-vendidos-minimizado'}`} id='monte-acai'>
      <h1 onClick={()=>{setMinimizar(!minimizar)}}>Monte Seu Açai</h1>
      <ul className='ul'>
        <li className='product no-border'>
            <div className='center'>
            <h4>Açai</h4>    
            <p className='value-product'>
                300ml - R$ 13,50 <br/> 500ml - R$ 18,50
            </p>
            
            </div>
           
        </li>

        <li className='product no-border'>
            <div className='adicionais'>
            <h4>Adicionais</h4>
            <div className='center'>
                    <div className='divisaoadd'>
                        <div>
                            <p className='info-product info-product1'>
                                    Leite condensado R$ 3,00<br/>
                                    Creme de ninho R$ 4,50<br/>
                                    Mousse de maracujá R$ 4,00<br/>
                                    Mousse de morango R$ 4,00<br/>
                                    Ouro branco R$ 1,50<br/>
                                    Gotas de chocolate R$ 3,00<br/>
                                    Ferreiro rocher R$ 4,00<br/>
                                    Kinde bueno R$ 4,00 <br/>
                                </p>
                        </div>
                           
                        <div>
                            <p className='info-product info-product2'>
                                    R$ 2,50 Leite em pó<br/>
                                    R$ 3,50 Ovomaltine<br/>
                                    R$ 3,50 Chantilly <br/>
                                    R$ 4,00 Raffaello <br/>
                                    R$ 0,50 Granola <br/>
                                    R$ 5,00 Nutela <br/>
                                    R$ 2,00 Paçoca <br/>
                                    R$ 2,50 kitkat <br/>

                                </p>
                        </div>               
                    </div>          
                </div>          
            </div>     
        </li>
      </ul>

    </div>
  );
};

export default MonteSeuAcai;
