import { DietaryOption } from "./dietary-option.enum";

export type StoreProduct =
{
    name: string,
    category: string,
    dietaryOption: DietaryOption | undefined,
    imageFileName: string
}