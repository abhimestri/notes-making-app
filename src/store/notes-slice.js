import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notesList: [],
  sortedAscending: true,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action) {
      state.notesList = state.notesList.concat(action.payload);
    },
    updateNote(state, action) {
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
    sortManner(state, action) {
      state.sortedAscending = action.payload;
    },
  },
});

export const notesAction = notesSlice.actions;
export default notesSlice;
