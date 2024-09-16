export default interface ICourse {
    id?: string;
    name: string;
    description: string;
    level: string;
    image: string;
    videoId: string;
}
export type CourseData = ICourse & { key: string };
