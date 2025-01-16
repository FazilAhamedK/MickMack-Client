import { MenuItemVariant } from "./menu-item-variant.interface"

export interface MenuItem
{
    id: number;
    name: string;
    category: string;
    description?: string;
    variants: Array<MenuItemVariant>;
    imageFileName?: string;
    isAvailableNow?: boolean;
    readyAvailabilityFrom?: Date;
    readyAvailabilityTill?: Date;
    isSoldOut?: boolean;
}