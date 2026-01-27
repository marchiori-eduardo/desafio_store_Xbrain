
import React from 'react';
import { Field, reduxForm } from 'redux-form'; 


const validate = values => {
  const errors = {};
 
  if (!values.name) {
    errors.name = 'O nome é obrigatório';
  }
  if (!values.email) {
    errors.email = 'O e-mail é obrigatório';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Endereço de e-mail inválido';
  }
  if (!values.address) {
    errors.address = 'O endereço é obrigatório';
  }
  return errors;
}


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div style={{ marginBottom: '15px' }}>
    <label>{label}</label>
    <div>
      {}
      <input {...input} type={type} placeholder={label} style={{ width: '100%', padding: '8px' }} />
      {}
      {touched && error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>}
    </div>
  </div>
)


const CheckoutForm = props => {
  
  const { handleSubmit, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Dados de Entrega</h3>
      
      {}
      <Field name="name" type="text" component={renderField} label="Nome Completo" />
      <Field name="email" type="email" component={renderField} label="E-mail" />
      <Field name="address" type="text" component={renderField} label="Endereço de Entrega" />

      <button type="submit" disabled={submitting} style={{ marginTop: '10px', backgroundColor: 'blue', color: 'white', padding: '10px' }}>
        Finalizar Pedido
      </button>
    </form>
  )
}


export default reduxForm({form: 'checkout', 
  validate 
})(CheckoutForm);