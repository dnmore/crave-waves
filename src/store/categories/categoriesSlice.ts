import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { CategoryItem } from "../../types/definitions";

export type CategoryMap = Record<string, CategoryItem[]>

interface CategoriesState {
categoriesMap: CategoryMap
isLoading:boolean
error: string | null
}


const initialState:CategoriesState  = {
  categoriesMap: {},
  isLoading: false,
  error: null,
};
export const fetchCategoriesAsync = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const categoriesMap = await getCategoriesAndDocuments();
    return categoriesMap;
  }
);



const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCategoriesAsync.fulfilled, (state, action: PayloadAction<CategoryMap>) => {
      state.categoriesMap = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCategoriesAsync.rejected, (state, action) => {
      state.error = action.error.message ?? "Failed to fetch categories";
      state.isLoading = false;
    });
  },
});

export default categoriesSlice.reducer;
