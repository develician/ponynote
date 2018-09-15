import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addNote,
  changeNoteInput,
  resetNote,
  getNotes
} from "store/actions/notes";
import AddForm from "components/note/AddForm";
import DisplayWrapper from "components/note/DisplayWrapper";

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
    const { noteInput, resetNote } = this.props;
    return (
      <div>
        <DisplayWrapper>
          <AddForm
            onChangeNoteInput={handleChangeNoteInput}
            noteInput={noteInput}
            onReset={resetNote}
            onAdd={addNote}
          />
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
      dispatch(changeNoteInput(noteInput));
    },
    resetNote: () => {
      dispatch(resetNote());
    },
    getNotes: () => {
      dispatch(getNotes());
    },
    addNote: () => {
      dispatch(addNote());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
