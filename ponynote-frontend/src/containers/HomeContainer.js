import React, { Component } from "react";
import { connect } from "react-redux";
import * as noteActions from "store/modules/notes";
import AddForm from "components/note/AddForm";
import DisplayWrapper from "components/note/DisplayWrapper";
import NoteList from "components/note/NoteList";

class HomeContainer extends Component {
  componentDidMount() {
    this.getNotes();
  }

  handleChangeNoteInput = e => {
    const { value } = e.target;
    this.props.changeNoteInput(value);
  };

  addNote = () => {
    this.props.addNote();
  };

  getNotes = () => {
    this.props.getNotes();
  };

  render() {
    const { handleChangeNoteInput, addNote } = this;
    const { noteInput, resetNote, notes } = this.props;
    return (
      <div>
        <DisplayWrapper>
          <AddForm
            onChangeNoteInput={handleChangeNoteInput}
            noteInput={noteInput}
            onReset={resetNote}
            onAdd={addNote}
          />
          <NoteList notes={notes} />
        </DisplayWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    noteInput: state.notes.noteInput,
    notes: state.notes.notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeNoteInput: noteInput => {
      dispatch(noteActions.changeNoteInput(noteInput));
    },
    resetNote: () => {
      dispatch(noteActions.resetNote());
    },
    getNotes: () => {
      dispatch(noteActions.getNotes());
    },
    addNote: () => {
      dispatch(noteActions.addNote());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
