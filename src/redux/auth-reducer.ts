import { authAPI } from "../api/auth-api";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

let initialState = {
  isAuth: false
}





const authReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const actions = {
  loginSuccess: () => ({ type: 'auth-reducer/LOGIN_SUCCESS' } as const)
}



export const login = (email: string, password: string) => async (dispatch: any) => {
  try {
    let data = await authAPI.login(email, password);
    console.log(data);
  } catch (error) {

  }
}


export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

export default authReducer;