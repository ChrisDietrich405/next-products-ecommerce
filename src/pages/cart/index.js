import React, { useEffect, useState } from "react";
import CartItem from "../../components/CartItem";

import styles from "./styles.module.css";

const Cart = () => {
  const [products, setProducts] = useState(null);

  const allProducts =
    products &&
    products.reduce(
      (total, currentItem) => {
        const { price, quantity } = currentItem;
        total.totalPrice += quantity * price;
        total.totalQuantity += quantity;
        return total;
      },
      {
        totalPrice: 0,
        totalQuantity: 0,
      }
    );

  const handleProductQuantity = (productId, operation) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          if (operation === "subtract" && product.quantity > 0) {
            product.quantity -= 1;
          } else if (operation === "add") {
            product.quantity += 1;
          }
        }

        return product;
      })
    );
  };

  useEffect(() => {
    const productArray = localStorage.getItem("productItems");
    if (productArray) {
      const productArr = JSON.parse(productArray);
      setProducts(productArr);
    }
  }, []);

  useEffect(() => {
    products?.length > 0 &&
      localStorage.setItem("productItems", JSON.stringify(products));
  }, [products]);
  return (
    <div className={styles.cart_container}>
      <div>
        {products
          ? products.map((product) => (
              <CartItem
                product={product}
                handleProductQuantity={handleProductQuantity}
              />
            ))
          : "there are no products in your cart"}
      </div>
      <div className={styles.totals_container}>
        <h2>Total Cart</h2>
        <p>TOTAL COST: ${allProducts && allProducts.totalPrice.toFixed(2)}</p>
        <p>
          TOTAL NUMBER OF ITEMS: {allProducts && allProducts.totalQuantity}{" "}
        </p>
      </div>
    </div>
  );
};

export default Cart;
