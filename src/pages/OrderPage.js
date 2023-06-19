import React from "react";
import { useSelector } from "react-redux";

const OrderPage = () => {
  const orderedProducts = useSelector((state) => state.order.orderedProducts);
  return (
    <div>
      <h2>Your order</h2>
      <ul>
        {orderedProducts.map((product) => (
          <li key={product.id}>
            {product.title} <button>Remove</button>
          </li>
        ))}
      </ul>
      <p>Sum: {orderedProducts.reduce((prev, curr) => prev + curr.price, 0)}</p>
    </div>
  );
};

export default OrderPage;
