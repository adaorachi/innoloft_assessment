import axios from "axios";

const BASEURL = "https://api-test.innoloft.com";

export const axiosCall = (endpoint, config, method = "GET") => {
  return new Promise(async (resolve, reject) => {
    const option = {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      url: `${BASEURL}${endpoint}`,
      ...config,
    };

    try {
      const res = await axios(option);
      return resolve(res);
    } catch (error) {
      let err = error;
      if (error.response) {
        err = error.response?.data?.error;
      }
      return reject(err);
    }
  });
};
