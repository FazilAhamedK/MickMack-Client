export interface MenuItemVariant
{
    skuID: number;
    name: string;
    price: number;
    minimumOrderQuantity?: number;
    maximumOrderQuantity: number;
    isSoldOut?: boolean;
}