import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './store/catalogSlice.ts';

const appStore = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
});
export default appStore;
