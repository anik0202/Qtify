import React from "react";
import LogoImage from "../../assets/logo.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return <img className={styles.img} src={LogoImage} alt="logo" width={67} />;
}
