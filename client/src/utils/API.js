import axios from "axios";

export default {
  getProduct: function (item) {
    return axios({
      method: "GET",
      url:
        "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "target-com-store-product-reviews-locations-data.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        useQueryString: true,
      },
      params: {
        sponsored: "1",
        limit: "10",
        offset: "0",
        store_id: "3991",
        keyword: item,
      },
    });
  },
};
