import React, { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";
import Header from "./components/Header/Header.js"
import Photo from "./components/Photo/Photo.js"




export default function App() {
  const[photoData, setPhotoData] = useState([]);

  
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        setPhotoData(res.data)
      })
      .catch(err => {
        console.log(err);
      })
    }, []);


  return (
    <div className="App">
      <Header />
      <Photo photoData={photoData}/>
    </div>
  );
};





