import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '../firebase-config.js'; // Altere o caminho conforme necessário
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Carousel from './Carousel.jsx'
import "./header.css"
import logo from "../images/logo.png"
import SpaceBurguer from "../images/spaceburguer.jpg"
import SpaceIce from "../images/spaceice.jpg"
import MaisVendidos from './MaisVendidos.jsx';
import Jogos from './Jogos.jsx'
import Hamburgueres from './Hamburgueres.jsx'
import Combos from './Combos.jsx'
import AcaiTaca from './AcaiTaca.js';
import AcaiCopo from './Acaicopo.js';
import MonteSeuAcai from './MonteSeuAcai.js';
import CafeGelado from './CafeGelado.js'

const Header = () => {
  const [numeroMesa, setNumeroMesa] = useState('');
  const [pedido, setPedido] = useState('');
  const [modal, setModal] = useState(true)

  const handleEnviarFormulario = async () => {
    if (numeroMesa === '') {
      alert('Preencha os campos obrigatórios.');
      return;
    }

    const formularioRef = collection(db, 'mesas');

    try {
      const novoFormularioRef = await addDoc(formularioRef, {
        mesa: numeroMesa,
        pedido: pedido || null
      });

      alert('Formulário enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar formulário. Por favor, tente novamente mais tarde.');
    }
  }

  const [maisVendidosId, setMaisVendidosId] = useState('');
  const [jogos, setJogos] = useState('');
  const [hamburgueres, setHamburgueres] = useState('')
  const [combos, setCombos] = useState('')
  const [acaitaca, setAcaiTaca] = useState('')
  const [acaicopo, setAcaiCopo] = useState('')
  const [monteSeuAcai, setMonteSeuAcai] = useState('')
  const [cafeGelado, setCafeGelado] = useState('')

  return (
    <div className='header'>
      <div className='apresentacao'>
        <div className='empresas'>
          <img className='logo' src={SpaceBurguer} alt="SpaceBurguer"/>
          <img className='logo' src={logo} alt="Logo"/>
          <img className='logo' src={SpaceIce} alt="SpaceIce"/>
          <h3 className='boas-vindas'>Seja bem-vindo a SPACE GAMER!</h3>
        </div>
      </div>

      <div className='solicitar-atendimento-modal'>
      <input className='test' type="checkbox" id="faq-1"/> 
        <h3 onClick={()=>{setModal(!modal)}}><label for="faq-1" > <ArrowBackIosIcon className={modal ? "rotation" : "no-rotation"}/> Solicitar pedido!</label></h3>
            <div className={modal ? "q" : "p"} >
                <div className='digite'>
                    <p>Por favor digite o número da sua mesa:</p>
                    <input 
                    type='number' 
                    placeholder='Número da mesa' 
                    value={numeroMesa} 
                    onChange={(e) => setNumeroMesa(e.target.value)} 
                    />
                </div>
                <div className='digite1'>
                    <p>Caso queira adiantar o atendimento, digite o que você deseja:</p>
                    <br/>
                    <textarea 
                    placeholder='(Opcional)'
                    value={pedido}
                    onChange={(e) => setPedido(e.target.value)}
                    />
                </div>
                
                <p className='sem-numero'>Caso sua mesa não tenha número, procure um atendente.</p>
                <div className='div-btn'> 
                    <button disabled={numeroMesa > 20 || numeroMesa === ''} onClick={handleEnviarFormulario} className={numeroMesa > 20 || numeroMesa === '' ? 'nao-fazer-pedido' : 'fazer-pedido'}>Solicitar atendimento</button>
                </div>
            </div>
        
        
      </div>
      <Carousel maisVendidosId={maisVendidosId}/>
      <MaisVendidos setMaisVendidosId={setMaisVendidosId}/>
      <Jogos setJogos={setJogos}/>
      <Hamburgueres setHamburgueres={setHamburgueres}/>
      <Combos setCombos={setCombos}/>
      <AcaiTaca setAcaiTaca={setAcaiTaca}/>
      <AcaiCopo setAcaiCopo={setAcaiCopo} />
      <MonteSeuAcai setMonteSeuAcai={setMonteSeuAcai} />
      <CafeGelado setCafeGelado={setCafeGelado} />
    </div>
  );
};

export default Header;
