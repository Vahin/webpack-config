import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import Png from "@/assets/error-image-16-9.png";
import Jpeg from "@/assets/medoed.jpeg";
import Svg from "@/assets/article.svg";

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  if (__PLATFORM__ === "mobile") {
    return <div>MOBILE</div>;
  }

  return (
    <>
      <h1 className={classes.value}>{count}</h1>
      <button
        data-testid="ButtonIncTestId"
        className={classes["button-inc"]}
        onClick={increment}
      >
        INC3
      </button>
      <button className={classes["button-dec"]} onClick={decrement}>
        DEC
      </button>
      <br />
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/shop"}>Shop</Link>

      <Outlet />
    </>
  );
};
