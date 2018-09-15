import { ajax } from "rxjs/observable/dom/ajax";
import { Observable } from "rxjs/Observable";
import {
  map,
  mergeMap,
  // switchMap,
  catchError,
  // tap,
  withLatestFrom
} from "rxjs/operators";
import { ofType } from "redux-observable";

import {
  ADD_NOTE,
  addNoteSuccess,
  ADD_NOTE_FAILURE,
  GET_NOTES,
  getNotesSuccess,
  GET_NOTES_FAILURE
} from "../actions/notes";
import { of } from "rxjs";

export const addNoteEpic = (action$, state$) =>
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

export const getNotesEpic = (action$, state$) =>
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
