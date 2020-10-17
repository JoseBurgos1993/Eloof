import axios from 'axios';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
//import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/login';
import ElfSignUp from './pages/elfSignUp';
import SignUp from './pages/signUp';
import ChildSignUp from './pages/childSignUp';
import { LOADING, SET_USER, UNSET_USER } from './store/actions';
import { useStoreContext } from './store/store';

const App = () => {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: LOADING });

    axios.get('/api/users').then((response) => {
      if (response.data.user) {
        dispatch({ type: SET_USER, user: response.data.user });
        history.push('/');
      } else {
        dispatch({ type: UNSET_USER });
        history.push('/login');
      }
    });
  }, [dispatch, history]);

  return (
    <div>
      <Header />
      {state.user ? (
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/elfsignup" component={ElfSignUp} />
          <Route exact path="/childsignup" component={ChildSignUp} />
          <Route exact path="/signup" component={SignUp} />
          <Redirect to="/login" />
        </Switch>
      )}
      <Footer />
    </div>
  );
};

export default App;