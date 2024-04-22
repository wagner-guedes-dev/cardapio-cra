import React, { useState } from 'react';
import './maisVendidos.css'

import jupter from '../images/jupter.png'
import estrela from '../images/estrela.png'
import planet from '../images/planet.png'
import astro from '../images/astro.png'
import nebulosa from '../images/nebulosa.png'
import bigbang from '../images/bigbang.png'
import cheddar from '../images/piscina.png'


const Hamburgueres = ({ setHamburgueres }) => {
  const handleSetMaisVendidosId = () => {
    // Supondo que o ID seja "mais-vendidos"
    setHamburgueres("hamburgueres");
  };

  const [minimizar, setMinimizar] = useState(true)

  return (
    <div className={`mais-vendidos ${minimizar ? '' : 'mais-vendidos-minimizado'}`} id='hamburgueres'>
      <h1 onClick={()=>{setMinimizar(!minimizar)}}>Hamburgueres</h1>
      <ul className='ul'>
        <li className='product'>
            <div className='center'>
            <h4>Júpiter</h4>
            <p className='info-product'>Pão com gergelim, burguer artesanal de 90g e cheddar americano.</p>
            <p className='value-product'>R$ 14,00</p>
            </div>
            <div className='image'>
                <img src={jupter}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Planet</h4>
            <p className='info-product'>Pão com gergelim, burger artesanal de 90g, mussarela, alface e tomate.</p>
            <p className='value-product'>R$ 16,00</p>
            </div>
            <div className='image'>
                <img src={planet}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Astro</h4>
            <p className='info-product'>Pão brioche, burger artesanal de 90g, catupiry e bacon em cubos.</p>
            <p className='value-product'>R$ 19,00</p>
            </div>
            <div className='image'>
                <img src={astro}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Estrela</h4>
            <p className='info-product'>Pão brioche, burguer artesanal de 90g, cheddar americano, fatias de bacon e molho barbucue.</p>
            <p className='value-product'>R$ 23,00</p>
            </div>
            <div className='image'>
                <img src={estrela}/>
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
            <h4>Big bang</h4>
            <p className='info-product'>Pão com gergelim, 2 burguer artesanais de 90g,duplo cheddar, ovo, fatias de bacon, cebola crispy e maionese artesanal.</p>
            <p className='value-product'>R$ 29,00</p>
            </div>
            <div className='image'>
                <img src={bigbang}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Big bang</h4>
            <p className='info-product'>Pão com gergelim, 2 burguer artesanais de 90g,duplo cheddar, ovo, fatias de bacon, cebola crispy e maionese artesanal.</p>
            <p className='value-product'>R$ 29,00</p>
            </div>
            <div className='image'>
                <img src={bigbang}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Piscina de cheddar</h4>
            <p className='info-product'>Selecione um hamburguer, ele será servido em um prato recheado de cheddar e bacon ralado.</p>
            <p className='value-product'>R$ 8,00</p>
            </div>
            <div className='image'>
                <img src={cheddar}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Turbine seu burguer!</h4>
            <p className='info-product'>
            Ovo _____________________R$2,00<br/>
            Salada___________________R$2,00.<br/>
            Cebola crispy _____________R$3,00.<br/>
            Cheddar 2 fatias___________R$2,00.<br/>
            Muçarela 2 fatias __________R$2,00.<br/>
            Cebola caramelizada_______R$3,50.<br/>
            Cheddar cremoso__________R$4,00.<br/>
            Requeijão cremoso ________R$4,00.<br/>
            Fatias de bacon ___________R$5,00.<br/>
            Bife Artesanal ____________R$5,50.<br/>
            <br/>
            Troque seu bife por bife vegetariano sem custos adicionais!
        </p>
            </div>
            
        </li>
      </ul>

    </div>
  );
};

export default Hamburgueres;
