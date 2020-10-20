import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LOADING, SET_USER, UNSET_USER } from '../../store/actions';
import { useStoreContext } from '../../store/store';
import ListOfBelievers from "../ListOfBelievers";
import { Form, Image, Button, Grid } from "semantic-ui-react"

const ElfHome = (props) => {
    const history = useHistory();
    const [state, dispatch] = useStoreContext();
    const [user, setUser] = useState(props.user);
    const [search, setSearch] = useState({
        name: ""
    });
    const [resultList, setResultList] = useState([]);
  
    /*
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
    */
    const handleChange = (event) => {
        const { name, value } = event.target;
        setSearch({ ...search, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({ type: LOADING });

        console.log("user.username ", user.username);
        console.log("search.name ", search.name);


        /*
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
        */
    };
    
    const publicSearch = (event) => {
        event.preventDefault();
        console.log("HERERERERERE");
        axios.get("/api/users/all").then((response) => {
            setResultList(response.data);
            if(response.status === 200){
                console.log("Query Successful!");
            }
        }).catch((error) => {
            console.log("Find Error: ", error);
        });
    }

    return(
        <div style={{/*height: "800px"*/}}>
            <Image src={"paper2.png"} style={{marginLeft:"auto", marginRight:"auto"}}/>
            <div style={{position:"absolute", top: "20%", left: "50%"}}>
                <Form>
                    <Form.Field>
                        <label>Child's Last Name</label>
                        <input onChange={handleChange} placeholder="Last Name" />
                    </Form.Field>
                    <Button type="submit" onClick={handleSubmit}>Search</Button>
                    <Button onClick={publicSearch}>Or View Public Lists</Button>
                </Form>
                
                <Grid>
                        
                    {resultList.map(res => (
                        <Grid.Row><h3>{res}</h3></Grid.Row>
                    ))}

                    
                </Grid>


                
            </div>
        </div>
    );
};
//<ListOfBelievers>{resultList}</ListOfBelievers>
export default ElfHome;