import { combineEpics } from "redux-observable";

import { addNoteEpic, getNotesEpic } from "./notes";

export default combineEpics(addNoteEpic, getNotesEpic);
