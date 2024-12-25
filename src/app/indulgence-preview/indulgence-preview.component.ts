import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BakeryProduct } from '../types/bakery-product.interface';
import { Router } from '@angular/router';

@Component
({
  selector: 'mm-indulgence-preview',
  templateUrl: './indulgence-preview.component.html',
  styleUrl: './indulgence-preview.component.scss'
})
export class IndulgencePreviewComponent implements OnInit
{
  bakeryProducts: Array<BakeryProduct>;

  constructor(private httpClient: HttpClient, private router: Router)
  {
    this.bakeryProducts = [];
  }

  ngOnInit(): void
  {
    this.httpClient.get<Array<BakeryProduct>>("/assets/data/BakeryProducts.json")
                   .subscribe(products =>
                   {
                     this.bakeryProducts = products?.filter(product => product.showInHomePage);
                   });
  }

  navigateToIndulgences(): void
  {
    this.router.navigateByUrl("indulgence");
  }
}