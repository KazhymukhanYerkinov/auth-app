import thunkMiddlewere from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';


let rootReducer = combineReducers({
  
});

// @ts-ignore
let store = createStore(rootReducer, applyMiddleware(thunkMiddlewere));

export default store;