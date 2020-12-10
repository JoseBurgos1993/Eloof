import axios from "axios";
const apikey = process.env.REACT_APP_API_KEY;
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
        "x-rapidapi-key": apikey,
        useQueryString: true,
      },
      params: {
        sponsored: "1",
        limit: "9",
        offset: "0",
        store_id: "3991",
        keyword: item,
      },
    });
  },
};
