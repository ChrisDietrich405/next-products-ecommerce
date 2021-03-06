import React from "react";
import { api } from "../../axios";
import styles from "./styles.module.css";
import Link from "next/link";

const products = ({ productList }) => {
  return (
    <div className={styles.product_container}>
      {productList.map((product) => (
        <>
          <div className={styles.product_wrapper}>
            <h5>{product.title}</h5>
            <img className={styles.product_image} src={product.image} alt="" />
            <p>${product.price}</p>
            <Link href={`products/${product.id}`}>
              <button className={styles.product_btn}>Details</button>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await api.get("/products");

  return {
    props: {
      productList: response.data,
    },
  };
};

export default products;
