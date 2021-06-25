import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notesList: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action) {
      console.log(action.payload);
      state.notesList = state.notesList.concat(action.payload);
      console.log(state.notesList);
    },
    updateNote(state, action) {
      console.log(action.payload.id);
      let foundValue = state.notesList.findIndex(
        (el) => el.id === action.payload.id
      );
      state.notesList[foundValue].note = action.payload.updatedValue;
    },
    deleteNote(state, action) {
      state.notesList = state.notesList.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const notesAction = notesSlice.actions;
export default notesSlice;
