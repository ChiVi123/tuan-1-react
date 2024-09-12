import { configureStore } from '@reduxjs/toolkit';
import bankSlice from './features';

export const store = configureStore({
    reducer: {
        bank: bankSlice.reducer,
    },
});
