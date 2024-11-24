import { Component, OnInit } from '@angular/core';
import { BakeryProduct } from '../types/bakery-product.type';
import { HttpClient } from '@angular/common/http';

@Component
({
  selector: 'mm-text-slider',
  templateUrl: './text-slider.component.html',
  styleUrl: './text-slider.component.scss'
})
export class TextSliderComponent implements OnInit
{
  bakeryProducts: Array<BakeryProduct> = [];

  constructor(private httpClient: HttpClient)
  { }

  ngOnInit(): void
  {
    this.httpClient.get<Array<BakeryProduct>>("/assets/data/BakeryProducts.json")
                   .subscribe(bakeryProducts =>
                   {
                     this.bakeryProducts = bakeryProducts;
                   });  
  }
}