import React from "react";
import Food from "../components/ui/Food";
import { foods } from "../data";

export default function Menu() {
  return (
    <section id="menu">
      <div className="container">
        <div className="row">
          <div className="food__header">
            <h2 className="section__title foods__header--title">All Food</h2>
            <select defaultValue="DEFAULT" id="filter">
              <option value="DEFAULT" disabled>
                Sort
              </option>
              <option value="LOW_TO_HIGH">Price, Low to High</option>
              <option value="HIGH_TO_LOW">Price, High to Low</option>
            </select>
          </div>
            <div className="foods">
              {foods
                .filter((food) => food)
                .map((food) => (
                  <Food food={food} key={food.id} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
