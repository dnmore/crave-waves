import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesAsync = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const categoriesMap = await getCategoriesAndDocuments("categories");
    return categoriesMap;
  }
);

const initialState = {
  categoriesMap: {},
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
      state.categoriesMap = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCategoriesAsync.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default categoriesSlice.reducer;
