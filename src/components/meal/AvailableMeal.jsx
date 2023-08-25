import React from "react";
import classes from "./AvailableMeal.module.css";
import Sushi from "../../assets/sushi.jpg";
import Fries from "../../assets/fries.jpg";
import Green from "../../assets/green.jpg";
import Burger from "../../assets/burger.jpg";
import DishCard from "../UI/DishCard";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    image: Sushi,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    image: Fries,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    image: Burger,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    image: Green,
  },
];

const AvailableMeal = () => {
  return (
    <>
      <section className={classes.meals}>
        <ul className={classes.meal}>
          {DUMMY_MEALS.map((meal) => (
            <DishCard key={meal.id} meal={meal} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default AvailableMeal;
