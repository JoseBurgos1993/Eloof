import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import axios from "axios";

const AddGift = () => {
  const [gift, setGift] = useState([]);
  const [search, setSearch] = useState("");
  const [userID, setUserID] = useState("");
  const targetURL = "https://www.target.com";

  //handleBtnClick searches API for kids searched gift, brings back 10 results for kid to pick from.
  const handleBtnClick = () => {
    axios.get("/api/users").then((res) => {
      if (res.data.user) {
        setUserID(res.data.user._id);
      } else {
        console.log("error loading user id");
      }
    });

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
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Search Gift"
      />
      <button onClick={handleBtnClick}> Search for Gift</button>
      {gift.map((gifts, index) => (
        <div key={gifts.title}>
          <div>Title: {gifts.title}</div>
          <div>Description: {gifts.description}</div>
          <div>Price: {gifts.price.current_retail}</div>
          <div>
            <img
              src={
                gifts.images[0].base_url +
                gifts.images[0].content_labels[0].image_url
              }
              alt={gifts.ttle}
            />
          </div>
          <div>
            <a
              href={targetURL + gifts.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.target.com{gifts.url}
            </a>
          </div>
          <button onClick={addGiftClick} value={index}>
            Add Gift
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddGift;
