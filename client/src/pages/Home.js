import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LOADING, SET_USER, UNSET_USER } from '../store/actions';
import { useStoreContext } from '../store/store';
import WishList from "../components/WishList";
import Item from "../components/Item";

const Home = () => {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState({
    name: ""
  });
  const [user, setUser] = useState();

  useEffect(() => {

    dispatch({ type: LOADING });

    axios.get('/api/users/profile').then((response) => {
      const user = response.data.user;
      if (response.data.user) {
        setUser({...user});
      } else {
        console.log("NOTHING HERE BOSS")
      }
    });
  }, [dispatch, history]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    console.log("newItem.name ", newItem.name);
    console.log("user.username ", user.username);

    axios.post('/api/users/additem', {
        item: newItem,
        user: user,
      }).then((response) => {
        console.log("WHAT");
        if (response.status === 200) {
          console.log("Successfully Updated");
        }
      }).catch((error) => {
        console.log('update error: ');
        console.log(error);
      });
  };

  return(
    <div style={{height: "800px"}}>
      <form className="form-additem">
        <label htmlFor="inputitem" className="sr-only"> Add new item </label>
      <input
        type="item"
        id="inputitem"
        className="form-control"
        name="name"
        placeholder="Money"
        value={newItem.name}
        onChange={handleChange}
      />
      <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleSubmit}> Add </button>
    </form>

      {list ? (
        <WishList>
          {list.map(res=>{
            return(
              {res}
            );
          })}
        </WishList>
      ) : (
        <span>No results</span>
      )}
      <Item />
    </div>
  );
};

//Home.propTypes = {};

export default Home;