export interface BakeryProduct
{
    name: string,
    category: string,
    imageFileName: string,
    showInHomePage: boolean,
    showInSlider: boolean,
    displayOrderInSlider?: number
    isNewArrival?: boolean
}