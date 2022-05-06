import style from "./index.module.scss";
import React, {
  useState,
  useEffect,
  createRef,
  useReducer,
  useRef,
  useCallback,
} from "react";
import Navigation from "../navigation";
import { Switch, Route, Redirect } from "react-router-dom";

import { Textfit } from "react-textfit";

import phpSVG from "../../assets/g4.svg";

const php = () => {
  return [
    phpSVG,
    <>
      <span className={style.title}>
        <Textfit mode="single" max={40}>
          Meine Begeisterung zum Programmieren<br></br>
          entdeckte ich durch das Spiel Minecraft.<br></br>
          <br></br>
        </Textfit>{" "}
      </span>
      <span>
        <Textfit mode="multi">
          Hier entstand mein erster eigener Server und eine kleine Community
          <br></br>
          <br></br>
        </Textfit>
      </span>
      <span>
        <Textfit mode="multi">
          Sehr schnell kam der Wunsch auf eigene Inhalte auf den Server zu
          Implementieren.<br></br>
          Da der Minecraft Client sowie der Server in Java programmiert sind,
          <br></br>
          habe ich angefangen mir Java beizubringen,<br></br>
          und nach einiger Zeit,<br></br>
          hatte ich einen Server der ausschließlich mit eigenen Plugins lief.
          <br></br>
        </Textfit>
      </span>
    </>,
  ];
};

const Anschreiben = () => {
  const [dimensions, setDimensions] = useState([
    { width: 0, height: 0, top: 0 },
    { width: 0, height: 0, top: 0 },
    { mediaMatchSmaal: false },
  ]);
  
  const onresize = () => {
    if (eRef.current && aRef.current) {
      const currentE = eRef.current;
      const currentA = aRef.current;
      const boundingRectE = currentE.getBoundingClientRect();
      const boundingRectA = currentA.getBoundingClientRect();

      console.log();

      setDimensions([
        {
          width: boundingRectE.width,
          height: boundingRectE.height,
          top: boundingRectE.top,
        },
        {
          width: boundingRectA.width,
          height: boundingRectA.height,
          top: boundingRectA.top,
        },
        { mediaMatchSmaal: window.matchMedia("(max-width: 1279)") },
      ]);
    }
  };
  useEffect(() => {
    window.onresize = onresize;

    // You can also use:
    // window.addEventListener('resize', myHandlerFunction);
  }, []);

  useEffect(() => {
    onresize();
  }, []);

  const eRef = useRef();
  const aRef = useRef();

  return (
    <div className={style.background}>
      <div className={style.nav} id="__nav">
        <div>
          <Navigation />
        </div>
      </div>

      <div
        className={style.codeBackground}
        style={
          dimensions[2].mediaMatchSmaal
            ? {
                top:
                  document.getElementById("__content").getBoundingClientRect()
                    .height +
                  document.getElementById("__nav").getBoundingClientRect()
                    .height, //"calc("+ dimensions[0].top+ ")",
                height: dimensions[0].height,
                width: "100%",
                position: "absolute",
              }
            : {}
        }
      >
        <img
          alt="Code Background"
          style={{
            position: "absolute",
            height: "calc(100%)",
            clipPath:
              "polygon(0px -100px, 0px 100%, " +
              (dimensions[0].height + 100) +
              "px 100%)",
            width: dimensions[0].height + 100 + "px",
            objectFit: "cover",
          }}
          src="https://img.freepik.com/vektoren-kostenlos/digitaler-java-code-text_53562-7014.jpg"
        />
      </div>
      <div className={style.b_content}>
        <div
          id="be"
          ref={
            eRef /*el => {
          if (!el)
            return;

setW(el.getBoundingClientRect().height);
//setWidth(el.getBoundingClientRect().width);
setTop(el.getBoundingClientRect().top + el.getBoundingClientRect().y);
setA(el.getBoundingClientRect().height);
        }*/
          }
          className={style.verticalBlue}
        >
          <div
            className={style.after}
            style={{ width: dimensions[0].height / 2 }}
          >
            <Switch>
              <Route exact path="/anschreiben">
                <Redirect to="/anschreiben/1" />
              </Route>
              <Route exact path="/anschreiben/1">
                <img src={php()[0]} alt="g4" />
              </Route>
            </Switch>
          </div>
        </div>
        <div
          ref={
            /*el => {
          if (!el) return;
          aRef.current.getBoundingClientRect().width
          setS(el.getBoundingClientRect().width);
        }*/ aRef
          }
          id="ba"
          className={style.secondBlue}
          style={{
            borderTopWidth: dimensions[0].height,
            borderLeftWidth: dimensions[0].height,
          }}
        ></div>
        <div
          className={style.contentBase}
          style={{
            gridTemplateColumns:
              "calc(10% + " +
              (dimensions[0].height / 2 + 50) +
              "px) calc(100% - calc(10% + " +
              (dimensions[0].height / 2 + 50) +
              "px))",
          }}
        >
          <div></div>
          <div id="__content" className={style.content}>
            <div className={style.container}>
              <Switch>
                <Route exact path="/anschreiben/1">
                  {php()[1]}
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anschreiben;
