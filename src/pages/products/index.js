import React from "react";
import { api } from "../../axios";
import productItems from "../../components/productItems";
import styles from "./styles.module.css";

const products = ({ productList }) => {
  return (
    <div className={styles.product_container}>
      {productList.map((product) => (
        <>
          <div className={styles.product_wrapper}>
            <h4>{product.title}</h4>
            <img src={product.image} alt="" />
          </div>
        </>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await api.get("/products");
  console.log(response);

  return {
    props: {
      productList: response.data,
    },
  };
};

export default products;
