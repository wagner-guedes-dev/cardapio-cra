import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '../firebase-config.js'; // Altere o caminho conforme necessário
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Carousel2 from './Carousel2.js'
import "./header2.css"
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
  const [acaitaca, setAcaiTaca] = useState('')
  const [acaicopo, setAcaiCopo] = useState('')
  const [monteSeuAcai, setMonteSeuAcai] = useState('')
  const [cafeGelado, setCafeGelado] = useState('')

  return (
    <div className='header'>
      <div className='apresentacao'>
        <div className='empresas'>
          <img className='logo' src={logo} alt="Logo"/>
          <img className='logo' src={SpaceIce} alt="SpaceIce"/>
          <h3 className='boas-vindas'>Seja bem-vindo a SPACE GAMER!</h3>
        </div>
      </div>

   
      <Carousel2 maisVendidosId={maisVendidosId}/>
      <MaisVendidos setMaisVendidosId={setMaisVendidosId}/>
      <AcaiTaca setAcaiTaca={setAcaiTaca}/>
      <AcaiCopo setAcaiCopo={setAcaiCopo} />
      <MonteSeuAcai setMonteSeuAcai={setMonteSeuAcai} />
      <CafeGelado setCafeGelado={setCafeGelado} />
    </div>
  );
};

export default Header;
