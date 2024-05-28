import { DietaryOption } from "./dietary-option.enum"

export type BakeryProduct =
{
    name: string,
    category: string,
    dietaryOptions: Array<DietaryOption>,
    imageFileName: string
}