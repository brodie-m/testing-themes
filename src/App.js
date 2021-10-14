import React, { useState, useEffect } from "react";
import "./App.css";
import dummyData from "./data";

//components
import CustomNavbar from "./components/CustomNavbar";
import CardList from "./components/CardList";
import NotFound from './components/NotFound'
//start theme stuff
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
//end theme stuff

//router
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//bootstrap
import { Button } from "react-bootstrap";
import TitleHighlight from "./components/TitleHighlight";

const App = () => {
  const [videos, setVideos] = useState([]);

  //theme stuff
  const [theme, setTheme] = useState("dark");
  function themeToggler() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideos(dummyData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        
        <Route path="/home" exact>
          
        <CustomNavbar />

        <div className="App">
          {videos.map((list, index) => {
            return (
              <section key={index}>
                <TitleHighlight title={list.section}></TitleHighlight>

                <CardList list={list} />
                <hr />
              </section>
            );
          })}
        </div>
        <footer className="d-flex justify-content-center">
          <Button onClick={themeToggler} className="btn btn-dark">
            Switch theme
          </Button>
        </footer>
          </Route>
          <Route path="*">
          <CustomNavbar />
          <NotFound/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
