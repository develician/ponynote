import { ajax } from "rxjs/observable/dom/ajax";
import { of } from "rxjs";
// import { Observable } from "rxjs/Observable";
import {
  map,
  mergeMap,
  // switchMap,
  catchError,
  // tap,
  withLatestFrom
} from "rxjs/operators";
import { ofType } from "redux-observable";

const ADD_NOTE = "notes/ADD_NOTE";
const ADD_NOTE_SUCCESS = "notes/ADD_NOTE_SUCCESS";
const ADD_NOTE_FAILURE = "notes/ADD_NOTE_FAILURE";
const GET_NOTES = "notes/GET_NOTES";
const GET_NOTES_SUCCESS = "notes/GET_NOTES_SUCCESS";
const GET_NOTES_FAILURE = "notes/GET_NOTES_FAILURE";
const UPDATE_NOTE = "notes/UPDATE_NOTE";
const DELETE_NOTE = "notes/DELETE_NOTE";
const CHANGE_NOTE_INPUT = "notes/CHANGE_NOTE_INPUT";
const RESET_NOTE = "notes/RESET_NOTE";

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
  payload: {
    noteInput
  }
});

export const resetNote = () => ({ type: RESET_NOTE });

const getNotesEpic = (action$, state$) =>
  action$.pipe(
    ofType(GET_NOTES),
    withLatestFrom(state$),
    mergeMap(([action, state]) =>
      ajax.get(`/api/notes/`).pipe(
        map(response => {
          const notes = response.response;
          return getNotesSuccess(notes);
        }),
        catchError(error =>
          of({
            type: GET_NOTES_FAILURE,
            payload: error,
            error: true
          })
        )
      )
    )
  );
const addNoteEpic = (action$, state$) =>
  action$.pipe(
    ofType(ADD_NOTE),
    withLatestFrom(state$),
    mergeMap(([action, state]) =>
      ajax.post(`/api/notes/`, { text: state.notes.noteInput }).pipe(
        map(response => {
          const note = response.response;
          return addNoteSuccess(note);
        }),
        catchError(error =>
          of({
            type: ADD_NOTE_FAILURE,
            payload: error,
            error: true
          })
        )
      )
    )
  );

const initialState = {
  noteInput: "",
  notes: [],
  error: {
    code: null,
    message: ""
  }
};

export const notes = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES_SUCCESS:
      const { notes } = action.payload;
      return {
        ...state,
        notes
      };
    case GET_NOTES_FAILURE:
      return {
        ...state,
        error: {
          code: action.payload.status,
          message: action.payload.message
        }
      };
    case ADD_NOTE_SUCCESS:
      const { note } = action.payload;
      return {
        ...state,
        notes: [note].concat(state.notes),
        noteInput: ""
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        error: {
          code: action.payload.status,
          message: action.payload.message
        }
      };
    case CHANGE_NOTE_INPUT:
      const { noteInput } = action.payload;
      return {
        ...state,
        noteInput
      };
    case RESET_NOTE:
      return {
        ...state,
        noteInput: ""
      };
    default:
      return state;
  }
};

export const notesEpics = { getNotesEpic, addNoteEpic };
