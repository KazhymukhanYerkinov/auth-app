import { AppStateType } from "../redux/redux-store";

export const selectInitialize = (state: AppStateType) => {
    return state.app.initialized;
}