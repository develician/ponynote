import React from "react";
import styles from "./MenuBar.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const MenuBar = () => (
  <div className={cx("menu-bar")}>
    <div className={cx("logo")}>PonyNote</div>
    {/* <div className={cx("right")}>
      <div className={cx("menu")}>Add Note</div>
    </div> */}
  </div>
);

export default MenuBar;
