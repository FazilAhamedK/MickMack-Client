type HexColor = `#${string}`;

export type BakeryProduct =
{
    name: string,
    category: string,
    imageFileName: string,
    textDisplayColour: HexColor,
    showInHomePage: boolean
}