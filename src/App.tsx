import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ArticleTeasers from "./components/ArticleTeasers/ArticleTeasers";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [number, setNumber] = useState(0);
  const [image, setImage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resultNumbers = await axios.get(
        "http://www.randomnumberapi.com/api/v1.0/random",
        {
          params: {
            min: 0,
            max: 20,
            count: 1,
          },
        }
      );
      setNumber(resultNumbers.data[0]);
      const resultImages = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setImage(resultImages.data["message"]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <ArticleTeasers number={number} image={image} isLoading={isLoading} />
    </div>
  );
}

export default App;
