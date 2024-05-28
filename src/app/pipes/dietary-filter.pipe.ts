import { Pipe, PipeTransform } from '@angular/core';
import { DietaryOption } from '../types/dietary-option.enum';

@Pipe
({
  name: 'dietaryFilter'
})
export class DietaryFilterPipe implements PipeTransform
{
  transform(products: Array<any>,
            desiredDietaryOptions: Array<DietaryOption | "All">,
            section: "Bakery" | "Store"): Array<any>
  {
    if (!products || products.length == 0 || desiredDietaryOptions[0] === "All")
    {
      return products;
    }

    if (section === "Bakery")
    {
      return products.filter(product => (product.dietaryOptions as Array<DietaryOption | "All">).some(dietaryOption => desiredDietaryOptions.includes(dietaryOption)));
    }
    else
    {
      return products.filter(product => product.dietaryOption && desiredDietaryOptions.includes(product.dietaryOption));
    }
  }
}