import React from "react";
import Food from "./ui/Food";
import { food } from "../data";

export default function FoodTypes({ foodT }) {
  return (
    <section id="hidden-section">
      <div className="container">
        <div className="row">
              <div className="catalogue">
                {food
                  .filter((food) => food.food === foodT.title)
                  .slice(0, 4)
                  .map((food) => (
                    <Food food={food} key={food.id} hideButton={true} />
                  ))}
              </div>
            </div>
      </div>
    </section>
  );
}
