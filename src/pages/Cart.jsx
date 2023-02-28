import React from "react";

export default function Cart({ cart, changeQuantity, removeItem }) {
  const total = () => {
    let price = 0;
    cart.forEach((food) => {
      price += +food.price * food.quantity;
    });
    return price;
  };

  console.log(cart);

  return (
    <div>
      Cart
      <div className="cart__body">
        {cart.map((food) => {
          return (
            <div className="food__wrapper">
              <img src={food.image} />
              {food.title}
              <button onClick={() => removeItem(food)}>Delete lad</button>
              <input
                type="number"
                value={food.quantity}
                onChange={(event) => changeQuantity(food, event.target.value)}
              />
              ${food.price.toFixed(2)}${food.price.toFixed(2) * food.quantity}
            </div>
          );
        })}
        <div className="total">
          <span>subtotal</span>
          <span>${(total() * 0.9).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
