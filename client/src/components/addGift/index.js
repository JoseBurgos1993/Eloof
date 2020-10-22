import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Container,
  Divider,
  Grid,
  Image,
  Segment,
  Header,
  Card,
  Icon,
} from "semantic-ui-react";

const AddGift = () => {
  const [gift, setGift] = useState([]);
  const [search, setSearch] = useState("");
  const [userID, setUserID] = useState("");
  const [wishList, setToWishList] = useState([]);
  const targetURL = "https://www.target.com";
  const history = useHistory();

  useEffect(() => {
    axios.get("/api/users").then((res) => {
      if (res.data.user) {
        setUserID(res.data.user._id);
        axios
          .get("/api/gifts/" + res.data.user._id)
          .then((res) => {
            setToWishList(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("error loading user id");
      }
    });
  }, [gift]);

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

  const handleSecondBtnClick = () => {
    history.replace("/");
  };

  return (
    <Segment>
      <Container textAlign="center">
        <div className="searchBar">
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Search Gift"
          />
          <button onClick={handleBtnClick}> Search for Gift</button>
          <button onClick={handleSecondBtnClick}> Done with Wish List</button>
        </div>
      </Container>
      <Container fluid>
        <Grid columns={2} relaxed="very">
          <Grid.Row>
            <Grid.Column width={4}>
              <Header as="h2" textAlign="center">
                My Wish List
              </Header>
              <div>
                {wishList.map((wishList) => (
                  // <Container
                  //   key={wishList.name}
                  //   textAlign="center"
                  //   className="wishlist"
                  // >
                  //   <Header as="h3">{wishList.name}</Header>
                  //   <div>
                  //     <Image
                  //       src={wishList.picture}
                  //       alt={wishList.picture}
                  //       size="large"
                  //       circular
                  //       fluid
                  //     />
                  //   </div>
                  // </Container>
                  <Card>
                    <Image src={wishList.picture} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{wishList.name}</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="user" />
                        22 Friends
                      </a>
                    </Card.Content>
                  </Card>
                ))}
              </div>
            </Grid.Column>
            <Grid.Column width={12}>
              <div>
                {gift.map((gifts, index) => (
                  <Container key={gifts.title} className="giftsearch">
                    <Header as="h2">{gifts.title}</Header>
                    <div>{gifts.description}</div>
                    <br></br>

                    <div>
                      <Image
                        src={
                          gifts.images[0].base_url +
                          gifts.images[0].content_labels[0].image_url
                        }
                        alt={gifts.title}
                        size="large"
                        rounded
                        fluid
                      />
                    </div>
                    <div>Price: {gifts.price.current_retail}</div>
                    <div>
                      <a
                        href={targetURL + gifts.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.target.com{gifts.url}
                      </a>
                      <button onClick={addGiftClick} value={index}>
                        Add Gift
                      </button>
                    </div>
                  </Container>
                ))}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default AddGift;
