import React, { useState, useEffect } from "react";
import "./App.css";
import dummyData from "./data";
import { AuthProvider } from "./components/contexts/Auth";

//components
import CustomNavbar from "./components/CustomNavbar";
import Login from "./components/Login";
import CardList from "./components/CardList";
import NotFound from "./components/NotFound";
import Register from './components/Register'
import PrivateRoute from "./components/PrivateRoute";
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
import NoTokenRoute from "./components/NoTokenRoute";

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
      <AuthProvider>
        <GlobalStyles />
        <Router>
          <Switch>
            {/* <Route path='/login' exact>
          <CustomNavbar/>
          <Login/>
        </Route> */}
            <NoTokenRoute path="/login">
              <CustomNavbar loggedIn={false}/>
              <Login />
            </NoTokenRoute>
            <Route path='/register'>
              <CustomNavbar loggedIn={false}/>
              <Register/>
            </Route>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>

            <PrivateRoute path="/home" exact>
              <CustomNavbar loggedIn={true}/>

              <div className="App">
              {
                videos.map((list, index) => {
                  
                  return (
                      <section key={index}>
                        <TitleHighlight title={list.section}></TitleHighlight>
  
                        <CardList list={list} />
                        <hr />
                      </section>
                    )})}

              </div>
              <footer className="d-flex justify-content-center">
                <Button onClick={themeToggler} className="btn btn-dark">
                  Switch theme
                </Button>
              </footer>
            </PrivateRoute>
            <PrivateRoute path="/breaking-news">
                <CustomNavbar loggedIn={true}/>
                <div className = 'App'>
                {
                videos.map((list, index) => {
                  console.log(list)
                  if (list.section !== 'Breaking News') {
                    return ;
                    }
                    else return (
                      <section key={index}>
                        <TitleHighlight title={list.section}></TitleHighlight>
  
                        <CardList list={list} />
                        <hr />
                      </section>
                    )})}
                </div>
            </PrivateRoute>
            <PrivateRoute path="/entertainment">
                <CustomNavbar loggedIn={true}/>
                <div className = 'App'>
                {
                videos.map((list, index) => {
                  console.log(list)
                  if (list.section !== 'Entertainment') {
                    return ;
                    }
                    else return (
                      <section key={index}>
                        <TitleHighlight title={list.section}></TitleHighlight>
  
                        <CardList list={list} />
                        <hr />
                      </section>
                    )})}
                </div>
            </PrivateRoute>
            <PrivateRoute path="/recommended">
                <CustomNavbar loggedIn={true}/>
                <div className = 'App'>
                {
                videos.map((list, index) => {
                  console.log(list)
                  if (list.section !== 'Recommended') {
                    return ;
                    }
                    else return (
                      <section key={index}>
                        <TitleHighlight title={list.section}></TitleHighlight>
  
                        <CardList list={list} />
                        <hr />
                      </section>
                    )})}
                </div>
            </PrivateRoute>
            <Route path="*">
              <CustomNavbar />
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
