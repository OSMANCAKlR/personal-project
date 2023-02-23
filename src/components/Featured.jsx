import React, { useState } from "react";
import { food } from "../data";
import FoodTypes from "./FoodTypes";
import Food from "./ui/Food";

export default function Featured({ type }) {
  const [selectedFood, setSelectedFood] = useState(null);

  const handleFoodButtonClick = (food) => {
    if (selectedFood === food) {
      setSelectedFood(null);
    } else {
      setSelectedFood(food);
    }
  };

  return (
    <section id="menu">
      <div className="container">
        <div className="row">
          <div className="title__column">
            <h2 className="column__title">{type} categories</h2>
          </div>
          <div className="food__wrapper">
            {food
              .filter((food) => food.type === type)
              .slice(0, 4)
              .map((food) => (
                <Food
                  food={food}
                  key={food.id}
                  onClick={handleFoodButtonClick}
                />
              ))}
              
          </div>
        </div>
      </div>
      {selectedFood && (
        <FoodTypes
          foodT={selectedFood}
          onClose={() => setSelectedFood(null)}
        />
      )}
    </section>
  );
}
