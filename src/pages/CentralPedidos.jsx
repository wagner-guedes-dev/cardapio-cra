import React, { useEffect, useState } from 'react';

import {
  getFirestore, collection, onSnapshot, deleteDoc, doc
} from 'firebase/firestore';
 import './centralPedidos.css'

const CentralPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const carregarPedidos = async () => {
      const db = getFirestore();
      const pedidosRef = collection(db, 'mesas');
      
      // Configura um ouvinte em tempo real para os pedidos
      const unsubscribe = onSnapshot(pedidosRef, (snapshot) => {
        const pedidosData = [];
        snapshot.forEach((doc) => {
          pedidosData.push({ id: doc.id, ...doc.data() });
        });
        setPedidos(pedidosData);
      });

      // Retorna uma função de limpeza para desligar o ouvinte quando o componente for desmontado
      return () => unsubscribe();
    };

    // Chama a função para carregar os pedidos
    carregarPedidos();
  }, []); // Executa apenas uma vez, quando o componente é montado

  const excluirPedido = async (id) => {
    const db = getFirestore();
    await deleteDoc(doc(db, 'mesas', id));
  };
  

  return (
    <div>
      
      <h2>Pedidos:</h2>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id} className='item-pedidos'>
            <p className='pedido'>Mesa: {pedido.mesa}</p>
            {pedido.pedido && <p>Pedido:<br/> {pedido.pedido}</p>}
            <button onClick={() => excluirPedido(pedido.id)}>Excluir</button>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default CentralPedidos;
