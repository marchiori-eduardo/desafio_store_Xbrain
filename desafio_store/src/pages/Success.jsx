import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Paper, Typography, Button, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
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
        elevation={3} 
        sx={{ 
          padding: '40px', 
          textAlign: 'center', 
          maxWidth: '400px',
          borderRadius: '8px'
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#555' }}>
          {order.customer.name},
        </Typography>

        <Typography variant="body1" color="textSecondary" paragraph>
          Sua compra no valor <strong style={{ color: '#00A8E8' }}>R$ {order.total.toFixed(2)}</strong><br/>
          foi finalizada com sucesso
        </Typography>

       
        <Box my={4}>
          <CheckCircleIcon sx={{ fontSize: 80, color: '#00A8E8' }} />
         
        </Box>

        <Button 
          variant="contained" 
          onClick={handleNewPurchase}
          sx={{ 
            backgroundColor: '#FF9900', 
            fontWeight: 'bold',
            padding: '10px 30px',
            '&:hover': { backgroundColor: '#e68a00' }
          }}
        >
          INICIAR NOVA COMPRA
        </Button>
      </Paper>
    </Box>
  );
};

export default Success;