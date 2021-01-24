import * as axios from "axios";

export default class Api {
  constructor() {
    this.client = null;
    this.api_url = 'http://localhost:3000';
  }

  init = () => {
    let headers = {
      Accept: "application/json",
    };

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  getProducts = (query) => {
    return this.init().get(`/products?q=${query}`);
  };
  
}