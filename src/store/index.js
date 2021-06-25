import { configureStore } from "@reduxjs/toolkit";
import noteslice from "./notes-slice";
const store = configureStore({ reducer: noteslice.reducer });

export default store;
