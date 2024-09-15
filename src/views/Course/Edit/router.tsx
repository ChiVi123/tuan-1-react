import { RouteObject } from 'react-router-dom';
import EditCourse from '.';

const editCourseRouter: RouteObject = {
    path: '/course/edit/:id',
    Component: EditCourse,
};

export default editCourseRouter;
