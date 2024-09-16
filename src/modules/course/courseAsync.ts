import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDocs } from 'firebase/firestore';
import { CourseData } from './entity';
import { courseCollection } from './repository';

export const fetchAllCourse = createAsyncThunk('courses/fetchAllCourse', async () => {
    return (await getDocs(courseCollection)).docs.map(
        (doc) => ({ id: doc.id, key: doc.id, ...doc.data() } as CourseData),
    );
});
