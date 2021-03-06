//fetch('https://fakestoreapi.com/products')

import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Chris's Ecommerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Chris's Ecommerce</h1>
      <h3>Check out what we have</h3>
      <button onClick={() => router.push("/products")}>Products</button>
    </div>
  );
}
