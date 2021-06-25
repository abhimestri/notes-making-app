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

//sortNewest(state, action) {
//   // state.notesList.map((el, i) => {
//   //   console.log(a.dateCreated.toString().split(",")[0].split("/"));
//   // });
//   state.notesList = state.notesList.sort((a, b) => {
//     return state.notesList.indexOf(a) - state.notesList.indexOf(b);
//   });

//   // state.notesList = state.notesList.sort((a, b) => {
//   //   return (
//   //     Number(a.dateCreated.toString().split(",")[0].split("/")[0]) -
//   //       Number(b.dateCreated.toString().split(",")[0].split("/")[0]) &&
//   //     Number(a.dateCreated.toString().split(",")[0].split("/")[1]) -
//   //       Number(b.dateCreated.toString().split(",")[0].split("/")[1]) &&
//   //     Number(a.dateCreated.toString().split(",")[0].split("/")[2]) &&
//   //     Number(b.dateCreated.toString().split(",")[0].split("/")[2])
//   //   );
//   // });
// },
// sortNotes(state, action) {
//   state.sortedAscending = !state.sortedAscending;
//   state.notesList = state.notesList.sort((a, b) => {
//     return state.notesList.indexOf(b) - state.notesList.indexOf(a);
//   });
// },
