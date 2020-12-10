import axios from "axios";
import React, { useState, useEffect } from "react";
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Button,
  Icon,
  Input,
  Feed,
} from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { LOADING, UNSET_USER } from "../store/actions";
import { useStoreContext } from "../store/store";
import API from "../utils/API";

const Wishbook = () => {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();
  const [gift, setGift] = useState([]);
  const [search, setSearch] = useState("");
  const [userID, setUserID] = useState("");
  const [wishList, setToWishList] = useState([]);
  const targetURL = "https://www.target.com";

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

  useEffect(() => {    
    if (state.user) {
      setUserID(state.user._id);
      console.log("state user id: ", state.user._id)
      axios
        .get("/api/gifts/" + state.user._id)
        .then((res) => {
          console.log(res.data);
          setToWishList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("error loading user id");
    }
  }, [state.user, gift]);

  //handleBtnClick searches API for kids searched gift, brings back 10 results for kid to pick from.
  const handleBtnClick = () => {
    API.getProduct(search)
      .then((res) => {
        setGift(res.data.products);
        console.log(search);
        console.log(gift);
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  //add gift to user database based on index selection
  const addGiftClick = (event) => {
    console.log("added gift!");
    console.log(event.target.value);
    axios
      .post("/api/gifts", {
        kidId: userID,
        name: gift[event.target.value].title,
        discription: gift[event.target.value].description,
        picture:
          gift[event.target.value].images[0].base_url +
          gift[event.target.value].images[0].content_labels[0].image_url,
        price: gift[event.target.value].price.current_retail,
        url: targetURL + gift[event.target.value].url,
        purchased: false,
      })
      .then((res) => {
        //after adding gift can do whatever here....
        setGift([]); //clear gifts here, can also change to diff page if needed.
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navigation />
      {/*/////////////////////////////////////////////code starts here////////////////////////////////*/}
      <Container text style={{ marginTop: "3em" }}>
        <div>
          <Container as="h2" textAlign="center">
            Wishbook
          </Container>
        </div>
      </Container>
      <Container>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as="h3" icon textAlign="center">
                <Header.Content>My Wish List</Header.Content>
                <Icon name="gift" circular />
              </Header>
              <Feed>
                {wishList.map((wishList) => (
                  <Card key={wishList.name}>
                    <Image src={wishList.picture} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{wishList.name}</Card.Header>
                    </Card.Content>
                  </Card>
                ))}
              </Feed>
            </Grid.Column>
            <Grid.Column width={13} textAlign="center">
              <Container centered style={{ marginBottom:  '3em', }}>
                <Input placeholder="Search..." onChange={handleInputChange} />
                <Button icon="search" onClick={handleBtnClick} />
              </Container>
              {gift.length <= 0 && (
                <div>
                  <Card
                    raised
                    //image={
                    //  "https://images.pexels.com/photos/1303084/pexels-photo-1303084.jpeg"
                    //}
                    fluid
                  />
                  <Header as="h2" icon textAlign="center"  >
                    <Header.Content>
                      No Results
                    </Header.Content>
                  </Header>
                </div>
              )}
              <Card.Group style={{ marginTop: "2em" }} itemsPerRow={3}>
                {gift.map((gifts, index) => (
                  <Card key={gifts.title}>
                    <Image
                      src={
                        gifts.images[0].base_url +
                        gifts.images[0].content_labels[0].image_url
                      }
                      wrapped
                      ui={false}
                    />
                    <Card.Content>
                      <Card.Header as="h2">{gifts.title}</Card.Header>
                      <Button
                        color="green"
                        onClick={addGiftClick}
                        value={index}
                      >
                        Add
                      </Button>
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      
      <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
      >
        

      </Segment>
      <Footer />
    </div>
  );
};

export default Wishbook;
