import React from "react";
import { api } from "../../axios";

const ProductItem = ({ productItem }) => {
  return <div>{productItem.price}</div>;
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
