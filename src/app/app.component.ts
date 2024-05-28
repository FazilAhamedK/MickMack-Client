import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { BakeryProduct } from './types/bakery-product.type';
import { DietaryOption } from './types/dietary-option.enum';
import { StoreProduct } from './types/store-product.type';

@Component
({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit
{
  public readonly DietaryOption = DietaryOption;

  isMobileDevice: boolean = false;
  isNavBarCollapsed: boolean = true;

  bakeryProducts: Array<BakeryProduct>;
  bakeryProductCategories: Array<string>;
  selectedBakeryProductCategory: string;
  dietaryOptions: Array<DietaryOption | "All">;
  selectedBakeryProductDietaryOptions: Array<DietaryOption | "All">;
  selectedStoreProductedDietaryOptions: Array<DietaryOption | "All">;
  storeProducts: Array<StoreProduct>;
  storeProductCategories: Array<string>;
  selectedStoreProductCategory: string;

  constructor(private httpClient: HttpClient)
  {
    this.isMobileDevice = window.innerWidth < 768;

    this.bakeryProducts = [];
    this.bakeryProductCategories = ["All"];
    this.selectedBakeryProductCategory = "All";
    this.dietaryOptions = ["All", ...Object.values(DietaryOption)];
    this.selectedBakeryProductDietaryOptions = ["All"];
    this.selectedStoreProductedDietaryOptions = ["All"];
    this.storeProducts = [];
    this.storeProductCategories = ["All"];
    this.selectedStoreProductCategory = "All";
  }

  ngOnInit(): void
  {
    this.httpClient.get<Array<BakeryProduct>>("/assets/data/BakeryProducts.json")
                  .subscribe(products =>
                  {
                    this.bakeryProducts = products;
                    this.bakeryProductCategories.push(...[...new Set(this.bakeryProducts.map(product => product.category))].sort());
                  });

    this.httpClient.get<Array<StoreProduct>>("/assets/data/StoreProducts.json")
                  .subscribe(products =>
                  {
                    this.storeProducts = products;
                    this.storeProductCategories.push(...[...new Set(this.storeProducts.map(product => product.category))].sort());
                  });
  }

  isDietaryOptionSelected(dietaryOption: DietaryOption | "All", section: "Bakery" | "Store"): boolean
  {
    const selectedDietaryOptions: Array<DietaryOption | "All"> = section === "Bakery"
                                                                  ? this.selectedBakeryProductDietaryOptions
                                                                  : this.selectedStoreProductedDietaryOptions;

    return selectedDietaryOptions.indexOf(dietaryOption) !== -1;
  }

  updateSelectedDietaryOptions(selectedDietaryOption: DietaryOption | "All", section: "Bakery" | "Store"): void
  {
    let selectedDietaryOptions: Array<DietaryOption | "All"> = section === "Bakery"
                                                                ? this.selectedBakeryProductDietaryOptions
                                                                : this.selectedStoreProductedDietaryOptions;

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

    section === "Bakery" ? this.selectedBakeryProductDietaryOptions = [...selectedDietaryOptions]
                          : this.selectedStoreProductedDietaryOptions = [...selectedDietaryOptions];
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize()
  {
    this.isMobileDevice = window.innerWidth < 768;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll()
  {
    this.isNavBarCollapsed = true;
  }
}