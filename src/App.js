import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Content from "./components/Content";
import axios from "axios";
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then((res) => {
          // setNasaData(res.data);
          setNasaData(res.data);
          console.log(nasaData);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
    // remove fuc=nction

    return () => {
      console.log(`fetch data cleanup`);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      {/* </Title titles={nasaData} date={nasaData} author={nasaData} />*/}
      <Content />
    </div>
  );
}

export default App;
