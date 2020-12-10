import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Icon,
  Segment,
  Button,
  Form,
} from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { LOADING, UNSET_USER } from "../store/actions";
import { useStoreContext } from "../store/store";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
//import { listIndexes } from '../../../database/models/user';

const Profile = () => {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();
  const [search, setSearch] = useState({
    username: "",
  });
  const [wishList, setToWishList] = useState([]);
  const [userData, setUserData] = useState([]);
  const logout = (event) => {
    event.preventDefault();
    dispatch({ type: LOADING });
    axios
      .post("/api/users/logout")
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: UNSET_USER });
          history.replace("/");
        }
      })
      .catch((error) => {
        console.log("Logout error");
      });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });
  };
  function handleSubmit(event) {
    // event.preventDefault();
    console.log("searching kids wishlist");
    setToWishList([]);
    axios
      .get("/api/gifts/" + search.username + "/true")
      .then((res) => {
        console.log("setting wish list with kid id");
        setToWishList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getPublic(event) {
    // event.preventDefault();
    console.log("getting public list");
    setToWishList([]);
    axios
      .get("/api/gifts/")
      .then((res) => {
        console.log("setting wish list");
        setToWishList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const handlePurchaseClick = (event) => {
    // event.preventDefault();
    let index = event.target.value;
    console.log("purchased item for kid at index :" + event.target.value);
    console.log("kid ID: " + wishList[event.target.value].kidId);
    console.log("item ID :" + wishList[event.target.value]._id);
    axios
      .post(
        "/api/gifts/" +
          wishList[event.target.value].kidId +
          "/" +
          wishList[event.target.value]._id
      )
      .then((res) => {
        console.log("purchased item for kid!");
        if (search.username === wishList[index].kidId) {
          handleSubmit();
        } else {
          getPublic();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setUserData(state.user);
    console.log(search.username);
    axios
      .get("/api/gifts/" + state.user._id)
      .then((res) => {
        console.log("setting wish list");
        setToWishList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  /*
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  const [search, setSearch] = useState({
    username: ''
  });
  const [wishList, setToWishList] = useState([]);
  const [userData, setUserData] = useState([]);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("searching kids wishlist");
    setToWishList([]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });
  };
  const getPublic = (event) => {
    event.preventDefault();
    console.log("getting public list");
    setToWishList([]);
    axios
      .get("/api/gifts/")
      .then((res) => {
        console.log("setting wish list");
        setToWishList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlePurchaseClick = (event) => {
    event.preventDefault();
    console.log("purchased item for kid at index :" + event.target.value);
  };
  useEffect(() => {
    setUserData(state.user);
    axios
      .get("/api/gifts/" + state.user._id)
      .then((res) => {
        console.log("setting wish list");
        setToWishList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [state.user]);
  */
  return (
    <div>
      <Navigation />
    

      {state.user.usertype === "elf" ? (
        <div>
          <Grid centered>
          <div>
            <Header as="h2" icon textAlign="center">
              <Image
                centered
                circular
                size="large"
                src="./christmas.png"
                style={{ marginBottom: "2em" }}
              />
              <Header.Content>
                Happy Holidays!
              </Header.Content>
            </Header>
          </div>
        
        <Grid.Row>
          <Grid.Column width={4} centered>
            <Form>
              <Form.Field>
                <label>Child's ID</label>
                <input
                  placeholder="Child's ID..."
                  onChange={handleChange}
                  name="username"
                  value={search.name}
                />
              </Form.Field>
              <Button onClick={handleSubmit}>Submit</Button>
              <Button onClick={getPublic}>Or View Public Listings</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
        </Grid> 
        <Grid celled>
        <Card.Group style={{ marginTop: "2em" }} itemsPerRow={3}>
          {wishList.map((wishList, index) => (
            <Card key={index}>
              {wishList.purchased === false ? (
                <div>
                  <Image src={wishList.picture} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header as="h2">{wishList.name}</Card.Header>
                    {wishList.discription ? (
                      <span>
                        {wishList.discription.length > 280 ? (
                          <span>
                            {wishList.discription.substring(0,280)}...
                          </span>
                        ) : (
                          <span>
                            {wishList.discription}
                          </span>
                        )}
                      </span>
                    ) : (
                      <span>
                        No description available.
                      </span>
                    )}
                    <br></br>
                    <br></br><span style={{fontWeight: 'bold'}}>Price:</span> ${wishList.price}
                    <br></br>
                    Link:{" "}
                    <a href={wishList.url} target="_blank">
                      {wishList.url}
                    </a>
                    <br></br>
                    <br></br>
                      <Button
                        value={index}
                        onClick={handlePurchaseClick}
                        color="red"
                      >
                        <Icon name="plus cart" size="large" /> Purchase Gift for
                        Child
                    </Button>
                  </Card.Content>
                </div>
                ) : (
                  <div>
                    <Image src={wishList.picture} style={{ tintColor: 'gray', opacity: 0.5 }} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header as="h2">{wishList.name}</Card.Header>
                      <Card.Header as="h2">{wishList.name}</Card.Header>
                      {wishList.discription ? (
                      <span>
                        {wishList.discription.length > 280 ? (
                          <span>
                            {wishList.discription.substring(0,280)}...
                          </span>
                        ) : (
                          <span>
                            {wishList.discription}
                          </span>
                        )}
                      </span>
                    ) : (
                      <span>
                        No description available.
                      </span>
                    )}
                      <br></br>
                      <br></br>Price: ${wishList.price}
                      <br></br>
                      Link:{" "}
                      <a href={wishList.url} target="_blank">
                        {wishList.url}
                      </a>
                      <br></br>
                      <br></br>
                      <Button color="green">
                        <Icon name="check" size="large" />
                        Already Purchased
                      </Button>
                    </Card.Content>
                  </div>
                )}
            </Card>
          ))}
        </Card.Group>
      </Grid>
      </div>
      ) : (
        <div>
          <Grid centered columns='2' widths='equal'>
            <Grid.Row>
              <Header as="h2" icon textAlign="center">
                <Image
                  centered
                  circular
                  size="large"
                  src="./christmas.png"
                  style={{ marginBottom: "2em" }}
                />
                <Header.Content>
                  Happy Holidays {state.user.childName}. You're a{" "}
                  {state.user.usertype}!
                </Header.Content>
              </Header>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '1em', marginBottom: '2em'}}>
              <Grid.Column textAlign='center'>
                {userData.childAge} years old
              </Grid.Column>
              <Grid.Column textAlign='center'>
                {userData.childLocation}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Container textAlign="center">
            <Segment vertical style={{ minHeight: 500, padding: '1em 0em' }}>
              <Card.Header as="h2">My Wish List</Card.Header>
              <Card.Group style={{ marginTop: "2em" }} itemsPerRow={3}>
                {wishList.map((wishList) => (
                  <Card key={wishList.name}>
                    <Image src={wishList.picture} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header as="h2">{wishList.name}</Card.Header>
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </Segment>
          </Container>
        </div>
      )}
      <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
      >
        <Footer />
      </Segment>
    </div>
  );
};
export default Profile;
