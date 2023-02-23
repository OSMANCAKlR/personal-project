import React from "react";
import Food from "../components/ui/Food";
import { food } from "../data";


export default function Menu() {
  return (
    <div className="container">
      <div className="row">
      <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Food
                </h2>
                <select defaultValue="DEFAULT" id="filter">
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                </select>
              </div>
              <div className="books">
              {food
              .filter((food) => food)
              .map((food) => (
                <Food
                  food={food}
                  key={food.id}
                
                />
              ))}
              </div>
      </div>
    </div>
  );
}
