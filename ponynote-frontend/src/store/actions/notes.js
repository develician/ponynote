export const ADD_NOTE = "notes/ADD_NOTE";
export const ADD_NOTE_SUCCESS = "notes/ADD_NOTE_SUCCESS";
export const ADD_NOTE_FAILURE = "notes/ADD_NOTE_FAILURE";

export const GET_NOTES = "notes/GET_NOTES";
export const GET_NOTES_SUCCESS = "notes/GET_NOTES_SUCCESS";
export const GET_NOTES_FAILURE = "notes/GET_NOTES_FAILURE";

export const UPDATE_NOTE = "notes/UPDATE_NOTE";

export const DELETE_NOTE = "notes/DELETE_NOTE";

export const CHANGE_NOTE_INPUT = "notes/CHANGE_NOTE_INPUT";
export const RESET_NOTE = "notes/RESET_NOTE";

export const addNote = () => ({
  type: ADD_NOTE
});
export const addNoteSuccess = note => ({
  type: ADD_NOTE_SUCCESS,
  payload: {
    note
  }
});
export const addNoteFailure = error => ({
  type: ADD_NOTE_FAILURE,
  payload: {
    error
  }
});

export const getNotes = () => ({
  type: GET_NOTES
});
export const getNotesSuccess = notes => ({
  type: GET_NOTES_SUCCESS,
  payload: {
    notes
  }
});
export const getNotesFailure = error => ({
  type: GET_NOTES_FAILURE,
  payload: {
    error
  }
});

export const changeNoteInput = noteInput => ({
  type: CHANGE_NOTE_INPUT,
  payload: noteInput
});

export const resetNote = () => ({ type: RESET_NOTE });

// export const fetchPosts = () => ({ type: FETCH_POSTS });
// export const fetchPostsSuccess = posts => ({
//   type: FETCH_POSTS_SUCCESS,
//   payload: {
//     posts
//   }
// });
// export const fetchPostsFailure = () => ({ type: FETCH_POSTS_FAILURE });
