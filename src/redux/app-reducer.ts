import { me } from "./auth-reducer";
import { InferActionsTypes } from "./redux-store";


let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'app-reducer/INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}
export const actions = {
  initializedSuccess: () => ({ type: 'app-reducer/INITIALIZED_SUCCESS' } as const)
}

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(me());

  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess());
  })

}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

export default appReducer;