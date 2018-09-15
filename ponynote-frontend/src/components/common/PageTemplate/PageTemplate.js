import React from "react";
import styles from "./PageTemplate.scss";
import classNames from "classnames/bind";
import MenuBar from "components/common/MenuBar";

const cx = classNames.bind(styles);

const PageTemplate = ({ children }) => (
  <div>
    <MenuBar />
    <main>{children}</main>
  </div>
);

export default PageTemplate;
