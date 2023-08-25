import React from "react";
import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  // const numberOfCartItem = cartCtx.items.reduce((curNum, item) => {
  //   return curNum + item.amount;
  // }, 0);
  const numberOfCartItem = cartCtx.items.length

  return (
    <button className={classes.button} onClick={props.onclick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{+numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
