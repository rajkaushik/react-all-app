import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    },
    removeFavorite: (state, action) => {
      let filterData = state.favorites.filter((x) => x.id !== action.payload);
      return {
        ...state,
        favorites: filterData,
      };
    },
  },
});

export const { addFavorite, removeFavorite } = favSlice.actions;
export default favSlice.reducer;
