import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StoreProduct } from '../types/store-product.type';
import { DietaryOption } from '../types/dietary-option.enum';

@Component
({
  selector: 'mm-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent implements OnInit
{
  public readonly DietaryOption = DietaryOption;

  storeProducts: Array<StoreProduct>;
  storeProductCategories: Array<string>;
  selectedStoreProductCategory: string;

  dietaryOptions: Array<DietaryOption | "All">;
  selectedDietaryOptions: Array<DietaryOption | "All">;

  constructor(private httpClient: HttpClient)
  {
    this.storeProducts = [];
    this.storeProductCategories = ["All"];
    this.selectedStoreProductCategory = "All";

    this.dietaryOptions = ["All", ...Object.values(DietaryOption)];
    this.selectedDietaryOptions = ["All"];
  }

  ngOnInit(): void
  {
    this.httpClient.get<Array<StoreProduct>>("/assets/data/StoreProducts.json")
                   .subscribe(products =>
                   {
                    this.storeProducts = products;
                    this.storeProductCategories.push(...[...new Set(this.storeProducts.map(product => product.category))].sort());
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