import { addDoc, collection, deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import firestore from '../../config/firestore';
import ICourse from './entity';

export const courseCollection = collection(firestore, 'courses');

// export const getAllCourse = async (): Promise<ICourse[]> => {
//     return (await getDocs(courseCollection)).docs.map((doc) => ({ id: doc.id, ...doc.data() } as ICourse));
// };
export const getCourse = async (id: string) => {
    const document = doc(firestore, `courses/${id}`);
    return getDoc(document);
};
export const addCourse = async (data: ICourse) => {
    const newCourse = await addDoc(courseCollection, { ...data });
    return { success: true, message: `new course:: ${newCourse.path}` };
};
export const editCourse = async (id: string, data: ICourse) => {
    const document = doc(firestore, `courses/${id}`);
    await setDoc(document, data, { merge: true });
    return { success: true, message: 'The value has been written to the database' };
};
export const deleteCourse = async (id: string) => {
    const document = doc(firestore, `courses/${id}`);
    await deleteDoc(document);
    return { success: true, message: 'The course has now been deleted' };
};
