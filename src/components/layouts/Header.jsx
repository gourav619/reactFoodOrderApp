import React from "react";
import HeaderImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>FoodHub</h1>
        <HeaderCartButton onclick={props.onShow}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={HeaderImage} alt="headerImage" />
      </div>
    </div>
  );
};

export default Header;
