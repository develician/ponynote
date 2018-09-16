import React from "react";
import styles from "./NoteList.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NoteItem = ({ note }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("mask")}>
        <div className={cx("menu", "edit")}>Edit</div>
        <div className={cx("menu", "delete")}>Delete</div>
      </div>
      <div className={cx("note-item")}>
        <div className={cx("text")}>{note.text}</div>
      </div>
    </div>
  );
};

const NoteList = ({ notes }) => {
  const noteList = notes.map((note, i) => {
    return <NoteItem note={note} key={note.id} />;
  });
  return (
    <div className={cx("note-list")}>
      <div className={cx("title")}>My Notes</div>
      <div className={cx("list")}>{noteList}</div>
    </div>
  );
};

export default NoteList;
