import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { changeSearch } = filterSlice.actions;

export default filterSlice.reducer;
