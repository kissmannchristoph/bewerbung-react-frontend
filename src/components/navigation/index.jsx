import style from "./index.module.scss";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={style.list}>
      <div>
        <Link to="/">Anfang</Link>
      </div>
      <div>
        <Link to="/anschreiben">Anschreiben</Link>
      </div>
      <div>
        <Link to="/lebenslauf">Lebenslauf</Link>
      </div>
      <div>
        <Link to="/">Anhänge</Link>
      </div>
      <div>
        <Link to="/">Projekte</Link>
      </div>
    </div>
  );
};

export default Navigation;
