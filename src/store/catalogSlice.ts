import { createSlice } from '@reduxjs/toolkit';
import { Animal } from '../interfaces/catalog.interface.ts';

interface CatalogState {
  loading: boolean;
  error: any;
  animal: Animal[];
}

const initialState: CatalogState = {
  loading: false,
  error: false,
  animal: [],
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    fetchCatalog: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchCatalogSuccess: (state, action) => {
      state.animal = action.payload;
      state.loading = false;
      state.error = false;
    },
    fetchCatalogError: (state) => {
      state.loading = false;
      state.error = true;
    },
    deleteCatalog: (state) => {
      state.loading = true;
      state.error = false;
    },
    deleteCatalogSuccess: (state) => {
      state.loading = false;
      state.error = false;
    },
    deleteCatalogError: (state, action) => {
      state.loading = false;
      state.error = action;
    },
    createOrUpdateAnimal: (state) => {
      state.loading = true;
      state.error = false;
    },
    createOrUpdateAnimalSuccess: (state) => {
      state.loading = false;
      state.error = false;
    },
    createOrUpdateAnimalError: (state, action) => {
      state.loading = false;
      state.error = action;
    },
  },
});

export const {
  fetchCatalog,
  fetchCatalogSuccess,
  fetchCatalogError,
  deleteCatalog,
  deleteCatalogSuccess,
  deleteCatalogError,
  createOrUpdateAnimal,
  createOrUpdateAnimalSuccess,
  createOrUpdateAnimalError,
} = catalogSlice.actions;

export default catalogSlice.reducer;
