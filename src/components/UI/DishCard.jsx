import React, { useContext, useState } from "react";
import "./DishCard.css";
import CartContext from "../../context/CartContext";

const DishCard = ({ meal }) => {
  const [amount, setAmount] = useState(0);
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    setAmount((prev) => prev + 1);
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      amount: amount,
    });
  };
  return (
    <li>
      <div className="card" key={meal.id}>
        <div className="image">
          <img src={meal.image} alt={meal.name} />
        </div>
        <div className="info">
          <div className="title">
            <h2>{meal.name}</h2>
            <p>{meal.description}</p>
          </div>
          <div className="price">$ {meal.price}</div>
        </div>
        <div className="btn">
          <button className="order" onClick={addToCartHandler}>
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default DishCard;
