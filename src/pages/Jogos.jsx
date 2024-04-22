import React, { useState } from 'react';
import './jogos.css'

import ps5 from '../images/ps5.png'
import corrida from '../images/corrida.png'
import xbox from '../images/xbox.png'
import arcade from '../images/arcade.png'
import tabuleiro from '../images/tabuleiro.png'
import toto from '../images/toto.png'
import sinuca from '../images/sinuca.png'



const Jogos = ({ setJogos }) => {
  const handleSetMaisVendidosId = () => {
    // Supondo que o ID seja "mais-vendidos"
    setJogos("jogos");
  };

  const [minimizar, setMinimizar] = useState(true)

  return (
    <div className={`mais-vendidos ${minimizar ? '' : 'mais-vendidos-minimizado'}`} id='jogos'>
      <h1 onClick={()=>{setMinimizar(!minimizar)}}>Jogos</h1>
      <ul className='ul'>
        <li className='product'>
            <div className='center'>
            <h4>Playstation 5</h4>
            <br/>
            <p className='value-product'>30min - R$ 15,00  <br/> 1hora - R$ 25,00</p>
          
            </div>
            <div className='image'>
                <img src={ps5}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Simulador de corrida</h4>
            <br/>
            <p className='value-product'>30min - R$ 20,00  <br/> 1hora - R$ 30,00</p>
          
            </div>
            <div className='image'>
                <img src={corrida}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Xbox series s</h4>
            <br/>
            <p className='value-product'>30min - R$ 15,00  <br/> 1hora - R$ 25,00</p>
          
            </div>
            <div className='image'>
                <img src={xbox}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Arcade</h4>
            <br/>
            <p className='value-product'>30min - R$ 10,00  <br/> 1hora - R$ 15,00</p>
          
            </div>
            <div className='image'>
                <img src={arcade}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Jogos de mesa</h4>
            
            <p className='info-product'>
        acesso ilimitado a nossa coleção de jogos de mesa durante o periodo em que estiver no estabelecimento. Sinta-se à vontade para trocar de jogo sempre que desejar! Pedimos gentilmente que tenha cuidado com os jogos. Pagamento único por grupo.</p>
            <p className='value-product'>R$ 5,00</p>
          
            </div>
            <div className='image'>
                <img  src={tabuleiro}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Mesa de pebolim</h4>
        <br/>
            <p className='value-product'>Contém 7 bolinhas <br/> Ficha - R$ 2,00</p>
          
            </div>
            <div className='image'>
                <img src={toto}/>
            </div>
        </li>

        <li className='product'>
            <div className='center'>
            <h4>Sinuca</h4>
            <br/>
            <p className='value-product'>Fichar - R$ 2,00</p>
          
            </div>
            <div className='image'>
                <img src={sinuca}/>
            </div>
        </li>
      </ul>

    </div>
  );
};

export default Jogos;
