export interface CartItem
{
    skuID: number;
    name: string;
    category: string;
    variantName: string;
    variantCost: number;
    orderQuantity: number;
    orderCost: number;
}