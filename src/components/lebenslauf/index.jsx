import style from "./index.module.scss";
import Navigation from "../navigation";

import scoolSVG from "../../assets/scool.svg";
import workSVG from "../../assets/work.svg";
import personal_data from "../../assets/personal_data.svg";

import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const Lebenslauf = ({ type }) => {
  return (
    <div className={style.background}>
      <div className={style.nav}>
        <Navigation />
      </div>
      <div className={style.btn_group}>
        <Link className={style.btn} to="/lebenslauf/scool">
          Scool
        </Link>
        <Link className={style.btn} to="/lebenslauf/work">
          Work
        </Link>
      </div>
      <hr></hr>
      <div className={style.content}>
        <Switch>
          <Route exact path="/lebenslauf">
            {scool}
          </Route>
          <Route exact path="/lebenslauf/scool">
            {scool}
          </Route>
          <Route exact path="/lebenslauf/work">
            {work}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const scool = () => {
  return <img src={scoolSVG} className={style.fit} />;
};

const work = () => {
  return <img src={workSVG} className={style.fit} />;
};

export default Lebenslauf;
