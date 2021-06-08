import { AppStateType } from "../redux/redux-store";

export const selectIsAuth = (state: AppStateType) => {
    return state.auth.isAuth;
}

export const selectEmail = (state: AppStateType) => {
    return state.auth.email;
}

export const selectUsername = (state: AppStateType) => {
    return state.auth.username;
}