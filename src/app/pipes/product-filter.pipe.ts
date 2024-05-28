import { Pipe, PipeTransform } from '@angular/core';

@Pipe
({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform
{
  transform(elements: Array<any>, filterByField: string, filterByValue: any): Array<any>
  {
    if (!elements || elements.length == 0 || filterByValue === "All")
    {
      return elements;
    }

    return elements.filter(element => element[filterByField] === filterByValue);
  }
}