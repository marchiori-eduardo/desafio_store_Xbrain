import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { 
  TextField, 
  Button, 
  Grid, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  FormHelperText,
  Typography,
  Box
} from '@mui/material';

const validate = values => {
  const errors = {};
  if (!values.name) errors.name = 'Campo obrigatório';
  if (!values.email) errors.email = 'Campo obrigatório';
  if (!values.sex) errors.sex = 'Selecione uma opção';
  return errors;
}


const renderTextField = ({ input, label, placeholder, meta: { touched, error }, ...custom }) => (
  <TextField
    label={label}
    placeholder={placeholder}
    error={touched && Boolean(error)} 
    helperText={touched && error}
    {...input}
    {...custom}
    variant="outlined"
    fullWidth
    InputLabelProps={{ shrink: true }}
  />
)


const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <FormControl error={touched && Boolean(error)} fullWidth variant="outlined">
    <InputLabel id="sex-select-label" shrink>{label}</InputLabel>
    <Select
      {...input}
      {...custom}
      labelId="sex-select-label"
      label={label}
      displayEmpty 
      onChange={(event) => input.onChange(event.target.value)}
      
      renderValue={(selected) => {
        if (!selected) {
          return <span style={{ color: '#aaa' }}>Selecione</span>;
        }
        return selected === 'masculino' ? 'Masculino' : 
               selected === 'feminino' ? 'Feminino' : 'Outro';
      }}
    >
      {children}
    </Select>
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
)

const CheckoutForm = props => {
  const { handleSubmit, submitting, orderTotal } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        
        
        <Grid item xs={12}>
          <Field 
            name="name" 
            component={renderTextField} 
            label="Nome" 
            placeholder="Nome do cliente aqui"
          />
        </Grid>
        
        
        <Grid item xs={12} sm={8}>
          <Field 
            name="email" 
            component={renderTextField} 
            label="Email"
            placeholder="Digite seu email aqui"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Field
            name="sex"
            component={renderSelectField}
            label="Sexo"
          >
           
            <MenuItem value="" disabled>
              <em>Selecione</em>
            </MenuItem>
            <MenuItem value="masculino">Masculino</MenuItem>
            <MenuItem value="feminino">Feminino</MenuItem>
            <MenuItem value="outro">Outro</MenuItem>
          </Field>
        </Grid>

      </Grid>

      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-end', 
        marginTop: '40px' 
      }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#546e7a', marginBottom: '10px' }}>
          Total: R$ {orderTotal ? orderTotal.toFixed(2) : '0.00'}
        </Typography>

        <Button 
          type="submit" 
          variant="contained" 
          disabled={submitting}
          sx={{ 
            backgroundColor: '#FF9900',
            fontWeight: 'bold',
            fontSize: '16px',
            padding: '12px 40px',
            boxShadow: 'none',
            '&:hover': { backgroundColor: '#e68a00', boxShadow: 'none' }
          }}
        >
          FINALIZAR COMPRA
        </Button>
      </Box>
    </form>
  )
}

export default reduxForm({
  form: 'checkout',
  validate
})(CheckoutForm);