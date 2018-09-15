import {
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  CHANGE_NOTE_INPUT,
  RESET_NOTE,
  GET_NOTES_SUCCESS,
  GET_NOTES_FAILURE
} from "../actions/notes";

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
      //   const {  }
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
        notes: state.notes.concat(note)
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
      return {
        ...state,
        noteInput: action.payload
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
