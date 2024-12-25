import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BakeryProduct } from '../types/bakery-product.interface';

@Component
({
  selector: 'mm-indulgence',
  templateUrl: './indulgence.component.html',
  styleUrl: './indulgence.component.scss'
})
export class IndulgenceComponent implements OnInit
{
  bakeryProducts: Array<BakeryProduct>;
  bakeryProductCategories: Array<string>;
  selectedBakeryProductCategory: string;
  
  constructor(private httpClient: HttpClient)
  {
    this.bakeryProducts = [];
    this.bakeryProductCategories = ["All"];
    this.selectedBakeryProductCategory = "All";
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
}