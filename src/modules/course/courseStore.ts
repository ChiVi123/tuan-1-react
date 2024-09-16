import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllCourse } from './courseAsync';
import { CourseData } from './entity';

interface ICoursesState {
    data: CourseData[];
    status: 'pending' | 'fulfilled' | 'rejected';
}

const initialState: ICoursesState = { data: [], status: 'pending' };
const courseStore = createSlice({
    name: 'courses',
    initialState,
    reducers: (creators) => ({
        removeAllCourse: creators.reducer((state, { payload }: PayloadAction<string[]>) => {
            state.data = state.data.filter((item) => !payload.includes(item.id || ' '));
        }),
    }),
    extraReducers: (builder) => {
        builder.addCase(fetchAllCourse.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(fetchAllCourse.fulfilled, (state, { payload }) => {
            state.data = payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchAllCourse.rejected, (state) => {
            state.data = [];
            state.status = 'rejected';
        });
    },
    selectors: {
        courseSelector: (state) => state,
    },
});

export default courseStore;
