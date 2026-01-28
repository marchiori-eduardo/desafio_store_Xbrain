// src/pages/ProductList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { useNavigate } from 'react-router-dom'; 
import { products } from '../products';
import ProductCard from '../components/ProductCard';
import CheckoutForm from '../components/CheckoutForm'; 
import { Grid, Container, AppBar, Toolbar, Typography, Box } from '@mui/material';

const ProductList = () => {
  const cartItems = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const handleSubmitOrder = (values) => {
    if (cartItems.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    const orderData = {
      customer: values,
      items: cartItems,
      total: total,
      date: new Date().toISOString()
    };
    
    localStorage.setItem('lastOrder', JSON.stringify(orderData));

    dispatch({ type: 'CLEAR_CART' }); 

    navigate('/success');
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '100px' }}>
      
        <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #eee' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#546e7a' }}>
              Produtos
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg" sx={{ marginTop: '40px', width: '100%', padding: { xs: '0 16px', sm: '0 20px', md: '0 24px' } }}>
        
        
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        
        <Box sx={{ marginTop: '80px', marginBottom: '20px' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#546e7a', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
            Dados do Cliente
          </Typography>
        </Box>

        
        <CheckoutForm onSubmit={handleSubmitOrder} orderTotal={total} />

      </Container>
    </Box>
  );
};

export default ProductList;