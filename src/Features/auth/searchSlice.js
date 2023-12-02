import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchPost: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchPost: (state, action) => {
      state.searchPost = action.payload;
    },
  },
});

export const { setSearchPost } = searchSlice.actions;

export default searchSlice.reducer;
