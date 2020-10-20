import axios from 'axios';
import React from 'react';
import { Button, } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { LOADING, UNSET_USER } from '../../store/actions';
import { useStoreContext } from '../../store/store';

const LogOutButton = () => {
    const [state, dispatch] = useStoreContext();
    const history = useHistory();
  
    const logout = (event) => {
      event.preventDefault();

      dispatch({ type: LOADING });
  
      axios
        .post('/api/users/logout')
        .then((response) => {
          if (response.status === 200) {
            dispatch({ type: UNSET_USER });
            history.replace('/login');
          }
        })
        .catch((error) => {
          console.log('Logout error');
        });
    };

    return(
        <Button color='red' onClick={logout}>
            Log Out
        </Button>
    );
};

export default LogOutButton;