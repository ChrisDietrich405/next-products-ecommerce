import React from "react";

import Link from "next/link";

import styles from "./styles.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar_container}>
      <div className={styles.navbar_inner_container}>
        <div className={styles.logo_container}>
          <Image src="/logo.png" width={66} height={66} />
        </div>
        <ul className={styles.list_container}>
          <li className={styles.list_item}>
            {" "}
            <Link href={`/`}>Home</Link>
          </li>
          <li className={styles.list_item}>About</li>
          <li className={styles.list_item}>
            {" "}
            <Link href={"/products"}>Products</Link>
          </li>
          <li className={styles.list_item}>
            <Link href={"/products"}>Contact us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
