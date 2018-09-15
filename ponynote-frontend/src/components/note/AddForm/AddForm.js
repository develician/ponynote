import React from "react";
import styles from "./AddForm.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AddForm = ({ onChangeNoteInput, noteInput, onReset, onAdd }) => (
  <div className={cx("form")}>
    <div className={cx("title")}>Add Notes</div>
    <input
      type="text"
      name="note"
      onChange={onChangeNoteInput}
      value={noteInput}
    />
    <div className={cx("options")}>
      <div className={cx("option")} onClick={onReset}>
        Reset Note
      </div>
      <div className={cx("option")} onClick={onAdd}>
        Add Note
      </div>
    </div>
  </div>
);

export default AddForm;
