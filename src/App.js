import React, { useState, useEffect } from "react";
import "./App.css";
import dummyData from "./data";
import CardList from "./components/CardList";

//start theme stuff
import {ThemeProvider} from 'styled-components'
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
//end theme stuff

//bootstrap
import {Button} from 'react-bootstrap'

const App = () => {
  const [videos, setVideos] = useState([]);

  //theme stuff
  const [theme,setTheme]=useState('light');
  function themeToggler() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }



  useEffect(() => {
    const timer = setTimeout(() => {
      setVideos(dummyData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <ThemeProvider theme = {theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
        <div className="App">     
          <Button onClick={themeToggler}>Switch theme</Button>
          {
            videos.map((list, index) => {
              return (
                <section key={index}>
                  <h2 className="section-title">{list.section}</h2>
                  <CardList list={list} />
                  <hr />
                </section>
              );
            })}
        </div>
        </ThemeProvider>
      
    
  );
};

export default App;
