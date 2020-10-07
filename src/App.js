import React, { useState, useEffect } from "react";
import axios from "axios";
import ApodNav from "./ApodNav";
import ApodImage from "./ApodImage";
import ApodDetails from "./ApodDetails";
import "./App.css";
import { API_KEY, getCurrentDate } from "./resource";

function App() {
  const [apod, setApod] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((response) => {
        setApod(response.data);
      })
      .catch((err) => {
        console.log("There was an error fetching the data:", err);
      });
  }, []);
  return (
    <div className="App">
      <ApodNav />
      <h1>Nasa Photo of the Day</h1>
      <p className="date">{getCurrentDate()}</p>
      <ApodImage
        apodImg={apod.hdurl}
        title={apod.title}
        author={apod.copyright}
      />

      <ApodDetails apodData={apod} />
    </div>
  );
}

export default App;
