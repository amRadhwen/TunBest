import React from "react";
import Slider from "./components/Slider";
import series from "./data";
import Serie from "./components/Serie";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Watch from "./components/Watch";
import Series from "./components/Series";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <div className="logo"><Link to="/">TunBest</Link></div>
        </div>
        {/*
        <div className="series">
            <Serie serie={series[0]} />
            <Serie serie={series[1]} />
        </div>
        */}
        <Switch>
          <Route exact path="/" component={Series} />
          <Route path="/watch/:name/:id" component={Watch} />
        </Switch>

        <div className="footer">All Rights Reserved To TunBest<sup>&copy;</sup></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
