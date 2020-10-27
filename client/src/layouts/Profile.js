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

  const [publicList, setPublicList] = useState([]);
  const [kidsList, setKidsList] = useState([]);
  const [pageState, setPageState] = useState("elf");
  const [search, setSearch] = useState({
    username: ''
  });
  const [wishList, setToWishList] = useState([]);
  const [userData, setUserData] = useState([]);

  /*
  useEffect(() => {
    dispatch({ type: LOADING });

    axios.get('/api/users').then((response) => {
      if (response.data.user) {
        dispatch({ type: SET_USER, user: response.data.user });
        history.push('/');
      } else {
        dispatch({ type: UNSET_USER });
        //history.push('/login');
      }
    });
  }, [dispatch, history]);
  */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("searching kids wishlist");
    setToWishList([]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });
  };

  /*
  const handleSubmit = () => {
    setPageState("elf");
    axios
      .get("/api/users/all")
      .then((response) => {
        setPublicList(response.data.filter(user => user.usertype === 'believer' && user.username === search.username));
      })
      .catch((error) => {
        console.log("submit error: ", error);
      })

  };
  */
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
  /*
  const handleProfile = (index) => {
    console.log("index = ", index);
    console.log("publicList[" + index + "] = ", publicList[index]);

    setPageState("kids")
    setKidsList(...publicList[index].wishlist)
    console.log("kidslist = ", kidsList);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });

  }
  */
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
                Happy Holidays {state.user.username}. You're an{" "}
                {state.user.usertype} !
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
              <Image src={wishList.picture} wrapped ui={false} />
              <Card.Content>
                <Card.Header as="h2">{wishList.name}</Card.Header>
                {wishList.discription}
                <br></br>
                <br></br>Price: ${wishList.price}
                <br></br>
                Link:{" "}
                <a href={wishList.url} target="_blank">
                  {wishList.url}
                </a>
                <br></br>
                <br></br>
                {wishList.purchased === false ? (
                  <Button
                    value={index}
                    onClick={handlePurchaseClick}
                    color="red"
                  >
                    <Icon name="plus cart" size="large" /> Purchase Gift for
                    Kid
                  </Button>
                ) : (
                  <Button color="green">
                    <Icon name="check" size="large" />
                    Already Purchased
                  </Button>
                )}
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Grid>
      </div>




      ) : (




        <div>
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
            Happy Holidays {state.user.username}. You're a{" "}
            {state.user.usertype} !
          </Header.Content>
        </Header>
      </div>

          <div>
            <Grid.Row>Age: {userData.childAge}</Grid.Row>
            <Grid.Row>Grade: {userData.childGrade}</Grid.Row>
            <Grid.Row>Language: {userData.childLanguage}</Grid.Row>
            <Grid.Row color="red" style={{ marginTop: "1em" }}>
              <Grid.Column width={4} centered>
                <p>Naughty</p>
              </Grid.Column>
            </Grid.Row>
            <Container textAlign="center">
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
            </Container>
          </div>

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
