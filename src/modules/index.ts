import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { courseStore } from './course';

const store = configureStore({
    reducer: { courses: courseStore.reducer },
});
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export default store;
