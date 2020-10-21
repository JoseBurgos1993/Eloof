import axios from "axios";
import React, { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import { LOADING, SET_USER, UNSET_USER } from "./store/actions";
import { useStoreContext } from "./store/store";

import Homepage from "./layouts/Homepage";
import LoginForm from "./layouts/LoginForm";
import Profile from "./layouts/Profile";
import Wishbook from "./layouts/Wishbook";

import Register from "./layouts/Register";
import ElfSignUp from "./layouts/ElfSignUp";
import BelieverSignUp from "./layouts/BelieverSignUp";

const App = () => {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: LOADING });

    axios.get("/api/users").then((response) => {
      if (response.data.user) {
        dispatch({ type: SET_USER, user: response.data.user });
        console.log("This is the user", response.data.user);
        history.push("/");
      } else {
        dispatch({ type: UNSET_USER });
        //history.push('/login');
      }
    });
  }, [dispatch, history]);

  return (
    <div>
      {state.user ? (
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/wishbook" component={Wishbook} />
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/believersignup" component={BelieverSignUp} />
          <Route exact path="/elfsignup" component={ElfSignUp} />
          <Redirect to="/" />
        </Switch>
      )}
    </div>
  );
};

export default App;
