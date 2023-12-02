import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authenticationSlice";
import searchReducer from "../auth/searchSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
  },
});

export default store;
