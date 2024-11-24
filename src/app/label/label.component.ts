import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Label } from '../types/label.type';
import { BakeryProduct } from '../types/bakery-product.type';

@Component
({
  selector: 'mm-label',
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent implements OnInit
{
  labels: Array<BakeryProduct> = [];

  constructor(private httpClient: HttpClient)
  { }

  ngOnInit(): void
  {
    this.httpClient.get<Array<BakeryProduct>>("/assets/data/BakeryProducts.json")
                   .subscribe(labels =>
                   {
                     this.labels = labels;
                   });  
  }
}