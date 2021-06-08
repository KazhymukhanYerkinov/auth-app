import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Login, MainPage, Register } from './pages';
import { initializeApp } from './redux/app-reducer';
import { selectInitialize } from './selectors/app-selector';
import {TransitionGroup,CSSTransition} from 'react-transition-group';



const App = () => {
  return (
    <div className = 'app-wrapper'>
      <Route exact path = '/' render = { () => <MainPage /> } />
    </div>
  );
}


const Auth = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const initialize = useSelector(selectInitialize);

  React.useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch])

  if (!initialize) {
    return <div></div>
  }

  return (
    <TransitionGroup>
      <CSSTransition key = { location.key } timeout = { 300 } classNames = 'fade'>
        <Switch location = { location }>
          <Route exact path = '/login' render = { () => <Login /> }/>
          <Route exact path = '/register' render = { () => <Register /> } />
          <Route path = '/' render = { () => <App /> } />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Auth;
