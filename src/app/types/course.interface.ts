import { CourseType } from "./course-type.enum"

export interface Course
{
    type: CourseType,
    name: string,
    description: string | Array<string>,
    bannerImageFileName: string,
    price: number
}