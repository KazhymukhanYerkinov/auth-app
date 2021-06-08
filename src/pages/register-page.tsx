import { Formik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';


const Register = () => {
  const onSubmit = () => {

  }

  return (
    <div className = 'auth'>
      <div className = 'auth__inner'>
        <div className='auth__header'>
          Регистрация
        </div>

        <Formik
          initialValues = {{
            email: '',
            username: '',
            password: '',
            password_confirm: ''
          }}
          onSubmit = { onSubmit }>

        </Formik>

        <div className = 'auth__route'>
          <div></div>
          <NavLink to = '/login' className = 'auth__link'> Есть аккаунт? </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Register;