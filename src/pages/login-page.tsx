import cls from 'classnames';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { login } from '../redux/auth-reducer';
import { selectIsAuth } from '../selectors/auth-selector';
import { LoginFormType } from '../types/types';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Неправильный электронный адрес')
    .required('Поле, обязательное для заполнения'),
  
  password: Yup.string()
    .min(8, 'Минимальная длина 8 символов')
    .max(255, 'Максимальная длина 255 символов')
    .required('Поле, обязательное для заполнения')
});


const Login:React.FC<PropsType> = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onSubmit = (formData: LoginFormType, actions: FormikHelpers<LoginFormType>) => {
    dispatch(login(formData.email, formData.password, actions));
  }

  if (isAuth) {
    return <Redirect to = '/' />
  }

  return (
    <div className='auth'>
      <div className='auth__inner'>
        <div className='auth__header'>
          Логин
        </div>
        <Formik
          initialValues={{
            reason: '',
            email: '',
            password: '',
          }}
          onSubmit={onSubmit}
          validationSchema = { validationSchema }>  

          {({ isSubmitting, errors, touched }) => (
            <Form>
              { errors.reason && touched.reason && (<span className = 'auth__error'> { errors.reason } </span>) }
              <Field
                name='email'
                type = 'email' 
                className={cls('input', {'input--error': errors.email && touched.email })} 
                placeholder='Введите свой email или телефон' 
              />
              { errors.email && touched.email && (<span className = 'auth__error'> { errors.email } </span>) }

              <Field 
                name='password' 
                type = 'password'
                className={cls('input', {'input--error': errors.password && touched.password })} 
                placeholder='Введите свой пароль' 
              />
              { errors.password && touched.password && (<span className = 'auth__error'> { errors.password } </span>) }

              <div className = 'auth__route'>
                <NavLink to = '/register' className = 'auth__link'> Нет аккаунт? </NavLink>
                <NavLink to = '/forgot_password' className = 'auth__link'> Забыли пароль? </NavLink>

              </div>

              <button className='button button__submit' disabled = { isSubmitting }> { isSubmitting ? 'Загрузка...':'Войти' } </button>
            </Form>
          )}

        </Formik>
      </div>

    </div>
  )
}



type PropsType = {

}

export default Login;


