const axios = require("axios");

function axiosTest() {
  return axios.get("https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Money").then((response) => {
    console.log(response.data.remaining);
  });
}
