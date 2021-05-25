import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login, MainPage } from './pages';
import store from './redux/redux-store';




const App = () => {
  return (
    <BrowserRouter>
      <Provider store = { store }>
        <Switch>
          <Route exact path = '/' render = { () => <MainPage /> } />
          <Route exact path = '/login' render = { () => <Login /> } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
