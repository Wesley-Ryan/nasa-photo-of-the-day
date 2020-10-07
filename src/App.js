import Axios from "axios";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ApodNav from "./ApodNav";
import ApodImage from "./ApodImage";
import "./App.css";

function App() {
  const [apod, setApod] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then((response) => {
        setApod(response.data);
      })
      .catch((err) => {
        console.log("There was an error fetching the data:", err);
      });
  }, []);
  return (
    <div className="App">
      {console.log("This is my apod:", apod)}
      <ApodNav />
      <h1>Nasa Photo of the Day</h1>

      <ApodImage apodImg={apod.hdurl} />
    </div>
  );
}

export default App;
