import React, { useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Content from "./components/Content";
import axios from "axios";
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState(null);

  // useState(() => {
  //   const fetchData = () => {
  //     axios
  //       .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
  //       .then((res) => {
  //         // console.log(res);
  //         setNasaData(res.data)
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   fetchData();

  //   return () => {
  //     console.log(`fetch data cleanup`);
  //   };
  // }, []);

  return (
    <div className="App">
      <Header />
      <Title />
      <Content />
    </div>
  );
}

export default App;
