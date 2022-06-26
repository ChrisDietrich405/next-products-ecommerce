import React from "react";
import { api } from "../../axios";
import { useRouter } from "next/router";

const ProductItem = ({ productItem }) => {
  const router = useRouter();

  const handleAddToCart = () => {
    const localStorageItems = localStorage.getItem("productItems");
    if (localStorageItems) {
      //for when a previous item was added (line 12 - 33)
      const productItemsArray = JSON.parse(localStorageItems);
      let foundItem = false;
      const findProductItem = productItemsArray.map((product) => {
        if (product.id === productItem.id) {
          foundItem = true;
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
      if (foundItem) {
        localStorage.setItem("productItems", JSON.stringify(findProductItem));
      } else {
        localStorage.setItem(
          // not the first time the user has been to the website
          "productItems", //so there are objects in the cart, but not this specific object
          JSON.stringify([
            ...productItemsArray,
            { ...productItem, quantity: 1 },
          ])
        );
      }
    } else {
      localStorage.setItem(
        //very first interaction with website
        "productItems",
        JSON.stringify([{ ...productItem, quantity: 1 }])
      );
    }
    router.push("/cart");
  };

  return (
    <div>
      <h3>{productItem.title}</h3>
      <img src={productItem.image} width={65} alt={productItem.title} />
      <p>{productItem.price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductItem;

export const getStaticPaths = async () => {
  return {
    paths: [], // default products
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const response = await api.get(`/products/${id}`);

  return {
    props: {
      productItem: response.data,
    },
  };
};
