import { createSlice } from "@reduxjs/toolkit";

const initialState = { favBooks: [] };

const favoriteSlice = createSlice({
  name: "favorite-slice",
  initialState,
  reducers: {
    addToFavorite(state, action) {
      const newBook = action.payload;
      const isExist = state.favBooks.find((item) => item.id === newBook.id);

      if (!isExist) {
        state.favBooks.push({
          id: newBook.id,
          image: newBook.image,
          title: newBook.image,
          author: newBook.author, //aray
          categories: newBook.categories, //aray
          language: newBook.language,
          pages: newBook.pages,
          description: newBook.description,
        });
      } else {
        state.favBooks.filter((item) => item.id !== newBook.id);
      }
    },
  },
});

export const favActions = favoriteSlice.actions;
export default favoriteSlice;
