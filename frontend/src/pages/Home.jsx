import { useEffect } from "react";
import axios from "../utils/axios.js";

const Home = () => {
  const getProduct = async () => {
    try {
      // const strData = await fetch("https://fakestoreapi.com/products")
      // const jsonData = await strData.json()
      // console.log(jsonData)

      const response = await axios.get("/products");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Home.jsx Mounted");

    getProduct();

    return () => {
      console.log("Home.jsx Unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getProduct}>Get Product</button>
    </div>
  );
};

export default Home;
