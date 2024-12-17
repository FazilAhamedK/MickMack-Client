import { CourseType } from "./course-type.enum"

export type Course =
{
    type: CourseType,
    name: string,
    description: string,
    bannerImageFileName: string
}