import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Food from "../components/ui/Food";

export default function FoodInfo({ addToCart, cart, foods }) {
  const location = useLocation().pathname.slice(1);
  console.log(location);

  const { id } = useParams();
  const food = foods.find((food) => +food.id === +id);

  function addFoodToCart(food) {
    const foodExists = cart.find((item) => item.id === food.id);
    if (foodExists) {
      return;
    }
    addToCart(food);
  }

  return (
    <section id="food__info">
      <div className="container">
        <div className="row">
          <div className="foods__wrapper">
            {foods
              .filter((food) => food.category === location)
              .map((food) => (
                <div className="food__container" key={food.id}>
                  <Food food={food} key={food.id} />
                  ${food.price.toFixed(2)}
                  {cart.find((item) => item.id === food.id) ? (
                    <Link to={`/cart`} className="book__Link">
                      <button className="food__button--checkout">Checkout</button>
                    </Link>
                  ) : (
                    <button className="food__button" onClick={() => addFoodToCart(food)}>
                      Add to cart
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
