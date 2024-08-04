import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BakeryProduct } from '../types/bakery-product.type';
import { DietaryOption } from '../types/dietary-option.enum';

@Component
({
  selector: 'mm-indulgence',
  templateUrl: './indulgence.component.html',
  styleUrl: './indulgence.component.scss'
})
export class IndulgenceComponent implements OnInit
{
  public readonly DietaryOption = DietaryOption;
  
  bakeryProducts: Array<BakeryProduct>;
  bakeryProductCategories: Array<string>;
  selectedBakeryProductCategory: string;
  
  dietaryOptions: Array<DietaryOption | "All">;
  selectedDietaryOptions: Array<DietaryOption | "All">;

  constructor(private httpClient: HttpClient)
  {
    this.bakeryProducts = [];
    this.bakeryProductCategories = ["All"];
    this.selectedBakeryProductCategory = "All";
    
    this.dietaryOptions = ["All", ...Object.values(DietaryOption)];
    this.selectedDietaryOptions = ["All"];
  }

  ngOnInit(): void
  {
    this.httpClient.get<Array<BakeryProduct>>("/assets/data/BakeryProducts.json")
                   .subscribe(products =>
                   {
                     this.bakeryProducts = products;
                     this.bakeryProductCategories.push(...[...new Set(this.bakeryProducts.map(product => product.category))].sort());
                   });
  }
  
  updateSelectedDietaryOptions(selectedDietaryOption: DietaryOption | "All"): void
  {
    let selectedDietaryOptions: Array<DietaryOption | "All"> = this.selectedDietaryOptions;

    if (selectedDietaryOption === "All")
    {
      selectedDietaryOptions = ["All"];
    }
    else
    {
      const indexOfSelectedDietaryOption: number = selectedDietaryOptions.indexOf(selectedDietaryOption);
      if (indexOfSelectedDietaryOption === -1)
      {
        selectedDietaryOptions = [...selectedDietaryOptions, selectedDietaryOption];
      }
      else
      {
        selectedDietaryOptions.splice(indexOfSelectedDietaryOption, 1);
        selectedDietaryOptions = [...selectedDietaryOptions];
      }

      const numberOfSelectedOptions: number = selectedDietaryOptions.length;
      if (numberOfSelectedOptions === 0)
      {
        selectedDietaryOptions = ["All"];
      }
      else if (numberOfSelectedOptions > 1 && selectedDietaryOptions[0] === "All")
      {
        selectedDietaryOptions.splice(0, 1);
        selectedDietaryOptions = [...selectedDietaryOptions];
      }
    }

    this.selectedDietaryOptions = [...selectedDietaryOptions];
  }

  isDietaryOptionSelected(dietaryOption: DietaryOption | "All"): boolean
  {
    return this.selectedDietaryOptions.indexOf(dietaryOption) !== -1;
  }
}