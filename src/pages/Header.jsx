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
      
      toast.success('Formulário enviado com sucesso!' , {
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
      <ToastContainer /> {/* Renderiza o container para as notificações */}
      <div className='apresentacao'>
        <div className='empresas'>
          <img className='logo' src={SpaceBurguer} alt="SpaceBurguer"/>
          <img className='logo' src={logo} alt="Logo"/>
          <img className='logo' src={SpaceIce} alt="SpaceIce"/>
          <h3 className='boas-vindas'>Seja bem-vindo a SPACE GAMER!</h3>
        </div>
      </div>

      <div className='solicitar-atendimento-modal'>
        
        <h3> Solicitar seu atendimento!</h3>
        <div className="p">
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
            <p>Caso queira fazer o pedido, digite o que você deseja:</p>
            <br/>
            <textarea 
              placeholder='(Opcional)'
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
      
    </div>
  );
};

export default Header;
