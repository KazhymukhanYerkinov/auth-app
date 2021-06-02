import cls from 'classnames';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../redux/auth-reducer';

const validationSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Минимальная длина 2 символов')
    .max(100, 'Максимальная длина 100 символов')
    .required('Поле, обязательное для заполнения'),
  
  password: Yup.string()
    .min(2, 'Минимальная длина 2 символов')
    .max(100, 'Максимальная длина 100 символов')
    .required('Поле, обязательное для заполнения')
});


const Login:React.FC<PropsType> = () => {

  const dispatch = useDispatch();

  const onSubmit = (formData: LoginFormType) => {
    dispatch(login(formData.login, formData.password));
  }

  return (
    <div className='auth'>

      <div className='auth__inner'>
        <div className='auth__header'>
          Логин
        </div>
        <Formik
          initialValues={{
            login: '',
            password: '',
          }}
          onSubmit={onSubmit}
          validationSchema = { validationSchema }>  

          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Field
                name='login'  
                className={cls('input', {'input--error': errors.login && touched.login })} 
                placeholder='Введите свой email или телефон' 
              />
              { errors.login && touched.login && (<span className = 'auth__error'> { errors.login } </span>) }

              <Field 
                name='password' 
                className={cls('input', {'input--error': errors.password && touched.password })} 
                placeholder='Введите свой пароль' 
              />
              { errors.password && touched.password && (<span className = 'auth__error'> { errors.password } </span>) }

              <div className = 'auth__save-me'>
                <Field id = 'save_me' className = 'checkbox' type = 'checkbox' name = 'save_me' /> 
                <label htmlFor = 'save_me' className = 'checkbox__text'> Запомнить меня </label>
              </div>

              <button className='button button__submit' disabled = { isSubmitting }> Войти </button>
            </Form>
          )}

        </Formik>
      </div>

    </div>
  )
}


type LoginFormType = {
  login: string,
  password: string,
}

type PropsType = {

}

export default Login;


