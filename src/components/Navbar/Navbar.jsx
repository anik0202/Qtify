import React from "react";
import { Routes, Route } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Routes>
        <Route path="/" element={<Logo />} />
      </Routes>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button buttonText = "Give Feedback" />
    </nav>
  );
}

export default Navbar;
