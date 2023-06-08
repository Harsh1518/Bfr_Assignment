import React from "react";
import { Link } from "react-router-dom";
import styles from "./Topbar.module.css";

const Topbar = () => {
  return (
    <div>
      <div className={styles.parent}>
        <Link to="/" className={styles.child}>
          SpaceX
        </Link>
        <Link to="/" className={styles.child}>
          Capsule
        </Link>
        <Link to="/" className={styles.child}>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
