import { MenuItemVariant } from "./menu-item-variant.type"

export type MenuItem =
{
    name: string,
    category: string,
    description?: string,
    variants: Array<MenuItemVariant>,
    imageFileName?: string
}