import React from "react";

const CartItem = ({ product }) => {
  return (
    <div>
      <h3>{product.title}</h3>
    </div>
  );
};

export default CartItem;
