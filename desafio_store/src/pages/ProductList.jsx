import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { products } from '../products';


import { 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button, 
  Container, 
  AppBar, 
  Toolbar, 
  Badge 
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 

const ProductList = () => {
  const dispatch = useDispatch();
  const cartSize = useSelector(state => state.cart.items.length);

  const handleAdd = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    
    <>
      {/* 1. BARRA DE NAVEGAÇÃO (Topo) */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Desafio Store
          </Typography>
          
          <Link to="/checkout" style={{ color: 'white', textDecoration: 'none' }}>
            <Button color="inherit">
              <Badge badgeContent={cartSize} color="error">
                                <ShoppingCartIcon />
              </Badge>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      {/* 2. ÁREA DOS PRODUTOS */}
      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Produtos
        </Typography>

        {/* Container Grid: A "linha" que segura as colunas */}
        <Grid container spacing={4}>
          {products.map((product) => (
            // Item Grid: Define o tamanho.
            // xs={12}: Celular (ocupa a linha toda)
            // sm={6}: Tablet (ocupa metade)
            // md={3}: PC (ocupa 1/4 da tela, ou seja, 4 produtos por linha)
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Imagem do Card */}
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    R$ {product.price.toFixed(2)}
                  </Typography>
                </CardContent>
                
                {/* Botão de Ação */}
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => handleAdd(product)}
                  style={{ margin: '10px' }}
                >
                  Comprar
                </Button>
              </Card>

            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProductList;