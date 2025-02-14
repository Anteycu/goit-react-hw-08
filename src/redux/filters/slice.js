import { createAction } from "@reduxjs/toolkit";

export const changeFilter = createAction("filters/changeFilter");

const initialState = {
  filters: { name: "" },
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filters/changeFilter": {
      return {
        ...state,
        filters: { name: action.payload },
      };
    }

    default:
      return state;
  }
};
