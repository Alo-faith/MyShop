import { decorate, observable } from "mobx";
import axios from "axios";
import instance from "./instance";
import decode from "jwt-decode";

class AuthStore {
  signup = async (userData) => {
    try {
      await instance.post("http://localhost:8000/signup", userData);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };
  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      console.log("authStore -> signin -> res.data", res.data);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };
}

const authStore = new AuthStore();
decorate(AuthStore, {});
export default authStore;
