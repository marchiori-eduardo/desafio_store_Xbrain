
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { Paper, Typography, Button, Box } from '@mui/material';

const Success = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
    
  }, [dispatch]);

  const handleNewPurchase = () => {
    navigate('/');
  };

  if (!order) return <p>Carregando...</p>;

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh" 
      bgcolor="#f4f6f8"
    >
      <Paper 
        elevation={0} 
        sx={{ 
          padding: '40px', 
          textAlign: 'center', 
          maxWidth: '400px',
          borderRadius: '4px',
          backgroundColor: '#fff'
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#546e7a' }}>
          {order.customer.name},
        </Typography>

        <Typography variant="body1" sx={{ color: '#546e7a', marginBottom: '30px' }}>
          Sua compra no valor <strong style={{ color: '#00A8E8' }}>R$ {order.total.toFixed(2)}</strong><br/>
          foi finalizada com sucesso
        </Typography>

        
        <Box my={4}>
          <img 
            src="/public/assets/purchase.png" 
            alt="Sucesso" 
            style={{ width: '120px', height: 'auto' }} 
          />
        </Box>

        <Button 
          variant="contained" 
          onClick={handleNewPurchase}
          sx={{ 
            backgroundColor: '#FF9900',
            fontWeight: 'bold',
            padding: '12px 30px',
            boxShadow: 'none',
            '&:hover': { backgroundColor: '#e68a00', boxShadow: 'none' }
          }}
        >
          INICIAR NOVA COMPRA
        </Button>
      </Paper>
    </Box>
  );
};

export default Success;