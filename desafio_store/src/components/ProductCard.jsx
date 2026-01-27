// src/components/ProductCard.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardMedia, CardContent, Typography, Button, Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
    alert(`${quantity}x ${product.name} adicionado(s)!`);
    setQuantity(1);
  };

  const priceInstallment = (product.price / 12).toFixed(2);
  const priceDiscount = (product.price * 0.9).toFixed(2);

  return (
    <Card 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      elevation={0}
      sx={{ 
        
        width: '270px',
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.3s ease',
        border: hover ? '1px solid #ddd' : '1px solid transparent', 
        boxShadow: hover ? '0px 10px 20px rgba(0,0,0,0.1)' : 'none',
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '16px'
      }}
    >
      
      <Box sx={{ 
        height: '180px', 
        width: '225px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: '15px'
      }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{ 
            maxHeight: '100%', 
            maxWidth: '200px', 
            objectFit: 'contain' 
          }}
        />
      </Box>

      
      <CardContent sx={{ padding: 0, textAlign: 'left', flexGrow: 1 }}>
        
       
        <Typography 
          variant="body2" 
          sx={{ 
            height: '40px', 
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            color: '#666',
            marginBottom: '8px',
            fontSize: '14px',
            lineHeight: '1.4'
          }}
        >
          {product.name}
        </Typography>
        
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          R$ {product.price.toFixed(2)}
        </Typography>
        
        <Typography variant="caption" display="block" color="text.secondary" sx={{ fontSize: '11px' }}>
          Em até 12x de R$ {priceInstallment}
        </Typography>
        
        <Typography variant="caption" display="block" color="text.secondary" sx={{ fontSize: '11px' }}>
          R$ {priceDiscount} à vista (10% de desconto)
        </Typography>
      </CardContent>

     
      <Box sx={{ 
        marginTop: 'auto', 
        opacity: hover ? 1 : 0,
        transition: 'opacity 0.2s',
        visibility: hover ? 'visible' : 'hidden'
      }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" gap={1}>
            
            
            <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: '#f0f0f0', 
                borderRadius: '4px',
                height: '40px',
                padding: '0 5px'
            }}>
                <IconButton size="small" onClick={handleDecrement} sx={{ padding: '5px' }}>
                    <RemoveIcon sx={{ fontSize: '16px', color: '#888' }} />
                </IconButton>
                
                <Typography sx={{ minWidth: '20px', textAlign: 'center', fontWeight: 'bold', color: '#555', fontSize: '14px' }}>
                  {quantity}
                </Typography>
                
                <IconButton size="small" onClick={handleIncrement} sx={{ padding: '5px' }}>
                    <AddIcon sx={{ fontSize: '16px', color: '#888' }} />
                </IconButton>
            </Box>

            <Button 
                variant="contained" 
                fullWidth
                onClick={handleAddToCart}
                disableElevation
                sx={{ 
                    backgroundColor: '#00A8E8', 
                    fontWeight: 'bold',
                    fontSize: '12px',
                    height: '40px',
                    borderRadius: '4px',
                    '&:hover': { backgroundColor: '#008ebf' }
                }}
            >
                ADICIONAR
            </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;