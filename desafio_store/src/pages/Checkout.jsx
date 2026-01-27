import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'; 
import CheckoutForm from '../components/CheckoutForm';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const navigate = useNavigate();

  const submit = (values) => {
    const orderData = {
      customer: values,
      items: cartItems,
      total: total,
      date: new Date().toISOString()
    };
    
    localStorage.setItem('lastOrder', JSON.stringify(orderData));
    
    
    navigate('/success'); 
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Finalizar Compra</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        
        
        <div>
          <h3>Resumo do Pedido</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                {item.name} - <strong>R$ {item.price.toFixed(2)}</strong>
              </li>
            ))}
          </ul>
          <hr />
          <h2>Total: R$ {total.toFixed(2)}</h2>

          
          <Link to="/">
            <button style={{ 
              marginTop: '10px', 
              backgroundColor: '#ccc', 
              color: 'black', 
              padding: '10px', 
              border: 'none', 
              cursor: 'pointer' 
            }}>
              ← Voltar e Comprar Mais
            </button>
          </Link>
          
        </div>

        
        <div>
           <CheckoutForm onSubmit={submit} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;