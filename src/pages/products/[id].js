import React from "react";
import { api } from "../../axios";
import { useRouter } from "next/router";

const ProductItem = ({ productItem }) => {
  const router = useRouter();

  const handleAddToCart = () => {
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
