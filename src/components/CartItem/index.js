import React from "react";

import styles from "./styles.module.css";

const CartItem = ({ product, handleProductQuantity }) => {
  return (
    <div className={styles.cart_container}>
      <div className={styles.inner_container}>
        <h1>Customer's cart</h1>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <img className={styles.img} src={product.image} alt="" />
        <button onClick={() => handleProductQuantity(product.id, "add")}>
          Add Item
        </button>
        <p>{product.quantity}</p>
        <button onClick={() => handleProductQuantity(product.id, "subtract")}>
          Subtract Item
        </button>
      </div>
    </div>
  );
};

export default CartItem;
