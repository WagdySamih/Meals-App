import { createSlice } from "@reduxjs/toolkit";

type State = {
  ids: string[];
};

type Action = {
  payload: { id: string };
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state: State, action: Action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state: State, action: Action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id, 1));
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
