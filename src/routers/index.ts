import { createBrowserRouter } from 'react-router-dom';

import addCourseRouter from '../views/Course/Add/router';
import editCourseRouter from '../views/Course/Edit/router';
import homeRouter from '../views/Home/router';

const router = createBrowserRouter([homeRouter, addCourseRouter, editCourseRouter]);
export default router;
