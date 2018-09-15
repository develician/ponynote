import React from "react";
import styles from "./DisplayWrapper.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const DisplayWrapper = ({ children }) => (
  <div className={cx("wrapper")}>{children}</div>
);

export default DisplayWrapper;
