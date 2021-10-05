import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Cadastro de novo usuário.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Usuário:</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Informe um nome de usuário'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email:</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Informe um e-mail'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Senha: </label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Informe sua senha'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirmar Senha: </label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirme sua senha'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Criar Conta
        </button>
        <span className='form-input-login'>
          Já possui conta? clique <a href='#'>aqui</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
