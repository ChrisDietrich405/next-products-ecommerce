import React, { useEffect, useState } from "react";
import CartItem from "../../components/CartItem";

const Cart = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const productArray = localStorage.getItem("productItems");
    if (productArray) {
      const productArr = JSON.parse(productArray);
      setProducts(productArr);
    }
  }, []);

  return (
    <div>
      {products
        ? products.map((product) => <CartItem product={product} />)
        : "there are no products in your cart"}
    </div>
  );
};

export default Cart;
