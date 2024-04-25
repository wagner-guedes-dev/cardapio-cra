import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '../firebase-config.js'; 
import { useLocation } from 'react-router-dom';
import "./header.css"
import logo from "../images/logo.png"
import SpaceBurguer from "../images/spaceburguer.jpg"
import SpaceIce from "../images/spaceice.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [numeroMesa, setNumeroMesa] = useState('');
  const [pedido, setPedido] = useState('');


  const location = useLocation();

  useEffect(() => {
    const numeroMesaDaURL = location.pathname.replace('/', '');
    const numeroMesaInt = parseInt(numeroMesaDaURL);
    if (!isNaN(numeroMesaInt)) {
      setNumeroMesa(numeroMesaInt.toString());
    }
  }, [location]);

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
      
      toast.success('Sua solicitação foi enviada com sucesso!' , {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'toast-border',
        theme: "dark"}); // Exibe a notificação de sucesso
        setPedido('')
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar formulário. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <div className='header'>

      <ToastContainer /> 
      <div className='principal'>
      <a href="https://www.instagram.com/spacegamerwr">
        <img className='logo' src={logo} alt="Logo"></img>

      </a>
      </div>
      <div className='apresentacao'>
        <div className='empresas'>
          <a href="https://www.instagram.com/spaceburguerwr">
            <img className='logo ' src={SpaceBurguer} alt="SpaceBurguer"/>   
          </a>
          <a href="https://www.instagram.com/spaceicewr"> 
          <img className='logo' src={SpaceIce} alt="SpaceIce"/>

          </a>
        </div>
        <h3 className='boas-vindas'>Seja bem-vindo a SPACE GAMER!</h3>
      </div>

      <div className='solicitar-atendimento-modal'>
        
        <h3> Solicitar seu atendimento!</h3>
        <div className="p">
          <div className='digite'>
            <p>Por favor digite o número da sua mesa:</p>
            <input 
              type='number' 
              placeholder='Número:' 
              value={numeroMesa} 
              onChange={(e) => setNumeroMesa(e.target.value)} 
              disabled={true}
            />
          </div>
          <div className='digite1'>
            <p>Caso queira fazer o pedido, digite o que você deseja:</p>
            <br/>
            <textarea 
              placeholder='Digite seu pedido'
              value={pedido}
              onChange={(e) => setPedido(e.target.value)}
            />
          </div>
          <p className='sem-numero'>Caso sua mesa não tenha número, procure um atendente.</p>
          <div className='container-btn'>
            <div className='div-btn'> 
              <button disabled={numeroMesa > 20 || numeroMesa === ''} onClick={handleEnviarFormulario} className={numeroMesa > 20 || numeroMesa === '' ? 'nao-fazer-pedido' : 'fazer-pedido'}>Solicitar atendimento</button>
              
              <button disabled={numeroMesa > 20 || numeroMesa === '' || pedido.length <= 0} onClick={handleEnviarFormulario} className={numeroMesa > 20 || numeroMesa === '' || pedido.length <= 0 ? 'nao-fazer-pedido' : 'fazer-pedido'}>Solicitar pedido</button>
            </div>
          </div>
          
        </div>
      </div>
      <footer>Desenvolvido por Wagner Guedes</footer>
    </div>
  );
};

export default Header;