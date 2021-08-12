import {Route, Switch, BrowserRouter} from "react-router-dom"
import {createContext, useState, useEffect, useContext} from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Favorite from "./view/Favorite";
import Home from "./view/Home";
import '../src/App.css';



// export const UserContext = createContext();

function App() {

  return (
    <div>
      {/* <UserContext> */}
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Home />
              <Route path="/" exact component={Home} />
              <Route path="/Favorite" exact component={Favorite} />
            </Switch>
            <Footer />
          </BrowserRouter>
      {/* </UserContext> */}
    </div>
  );
}

export default App;
