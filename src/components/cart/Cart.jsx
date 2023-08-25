import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "./cartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemAddHandler = (item) => {};
  const cartItemRemoveHandler = (id) => {};
  return (
    <Modal>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={cartItemRemoveHandler.bind(null,item.id)}
            onAdd={cartItemAddHandler.bind(null,item)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>TotalAmount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.hide}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
