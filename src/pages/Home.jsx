import React, { useState } from "react";
import Contact from "../components/Contact";
import Featured from "../components/Featured";
import FoodTypes from "../components/FoodTypes";
import Landing from "../components/Landing";

export default function Home() {
  const [showFoodTypes, setShowFoodTypes] = useState(false);
  const [foodType, setFoodType] = useState("");

  return (
    <div>
      <Landing />
      <Featured type="savoury" setShowFoodTypes={setShowFoodTypes} />
      {showFoodTypes && <FoodTypes />}
      <Featured type="sweet" setShowFoodTypes={setShowFoodTypes} />
      <Contact />
    </div>
  );
}
