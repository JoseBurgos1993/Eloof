import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LOADING, SET_USER, UNSET_USER } from '../store/actions';
import { useStoreContext } from '../store/store';
import ElfHome from "../components/ElfHome";
import BelieverHome from "../components/BelieverHome";

const Home = () => {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState({
    name: ""
  });
  const [user, setUser] = useState({
    usertype: ""
  });

  useEffect(() => {

    dispatch({ type: LOADING });

    axios.get('/api/users/profile').then((response) => {
      const user = response.data.user;
      console.log(response.data.user);
      if (response.data.user) {
        setUser({...user});
      } else {
        console.log("NOTHING HERE BOSS")
      }
    });
  }, [dispatch, history]);

  /*
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
  
  function getUser(){
    
    if(user){
      if(user.usertype === "believer"){
      return(
        <div>
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
    } else if(user.usertype === "elf"){
      return(
        <div>
            <Image src={"paper2.png"} style={{marginLeft:"auto", marginRight:"auto"}}/>
            <div style={{position:"absolute", top: "20%", left: "50%"}}>
              <ListOfBelievers />
            </div>
            
        </div>
      );
    } else{
      return(<h1>ERROR LOADING USER</h1>);
    }
  } else{
    return(<div>TEMP</div>)
  }
};
  */

  return(
    <div>
      {user.usertype === "elf" ? <ElfHome props={user} /> : <ElfHome props={user}/> }
    </div>
  );
};

export default Home;