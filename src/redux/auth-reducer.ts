import { FormikHelpers } from "formik";
import Cookies from "js-cookie";
import { ResultCodeEnum } from "../api/api";
import { authAPI } from "../api/auth-api";
import { LoginFormType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";


let initialState = {
  isAuth: false,

  email: null as string | null,
  username: null as string | null,
  access: Cookies.get('access') as string | null,
  refresh: Cookies.get('refresh') as string | null,
}

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'auth-reducer/LOGIN_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      }
    case 'auth-reducer/ME_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      }
    case 'auth-reducer/ME_FAIL':
    case 'auth-reducer/LOGOUT_SUCCESS':
      Cookies.remove('access');
      Cookies.remove('refresh');
      return {
        ...state,
        email: null,
        username: null,
        access: null,
        refresh: null,
        isAuth: false,
      }
    
    default:
      return state;
  }
}

export const auth_actions = {
  loginSuccess: ( email: string, username: string, access: string, refresh: string ) => ({ 
    type: 'auth-reducer/LOGIN_SUCCESS', payload: { email, username, access, refresh } } as const),
  meSuccess: (email: string, username: string, last_login: string | null) => ({
    type: 'auth-reducer/ME_SUCCESS', payload: { email, username, last_login } } as const),
  meFail: () => ({
    type: 'auth-reducer/ME_FAIL'} as const),
  logoutSuccess: () => ({
    type: 'auth-reducer/LOGOUT_SUCCESS'} as const)
}


export const login = (email: string, password: string, actions: FormikHelpers<LoginFormType>): ThunkType => async (dispatch) => {
  try {
    let response = await authAPI.login(email, password);

    if (response.status === ResultCodeEnum.Success) {
      let { email, username, tokens: { access_token, refresh_token } } = response.data;

      Cookies.set('access', access_token);
      Cookies.set('refresh', refresh_token);
      
      actions.setSubmitting(false);
      dispatch(auth_actions.loginSuccess(email, username, access_token, refresh_token));
    }

  } catch (error: any) {

    if (error.response.status === ResultCodeEnum.Unauthorized) {
      actions.setFieldError('reason', 'Введен неправильный email или пароль, попробуйте еще раз')
      actions.setSubmitting(false);
    }
  }
}

export const me = (): ThunkType => async (dispatch) => {
  try {
    let response = await authAPI.me();
    if (response.status === ResultCodeEnum.Success) {
      let { email, username, last_login } = response.data;
      dispatch(auth_actions.meSuccess(email, username, last_login));
    }
  } catch (error) {
    dispatch(auth_actions.meFail());
  }
  
}

export const logout = ():ThunkType => async (dispatch, getState) => {
  try {
    let refresh = getState().auth.refresh;
    console.log(refresh);
    let response = await authAPI.logout(refresh!);
    if (response.status === ResultCodeEnum.SuccessLogout) {
      dispatch(auth_actions.logoutSuccess());
    } 
  }
  catch (error) {
    
  }
}




export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof auth_actions>
type ThunkType = BaseThunkType<ActionsType>

export default authReducer;