import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BakeryProduct } from '../types/bakery-product.type';
import { interval, Subscription } from 'rxjs';

@Component
({
  selector: 'mm-names-slider',
  templateUrl: './names-slider.component.html',
  styleUrl: './names-slider.component.scss'
})
export class NamesSliderComponent implements OnInit, OnDestroy
{
  bakeryProducts: Array<BakeryProduct> = [];

  public currentOffsetPercentage: number;
  public visibleCount: number;
  public slidePercentage: number;
  private animationSubscription!: Subscription;

  constructor(private httpClient: HttpClient)
  {
    this.currentOffsetPercentage = 0;
    this.visibleCount = 4;
    this.slidePercentage = 100 * this.visibleCount;
  }

  ngOnInit(): void
  {
    this.httpClient.get<Array<BakeryProduct>>("/assets/data/BakeryProducts.json")
                   .subscribe(bakeryProducts =>
                   {
                     this.bakeryProducts = bakeryProducts;
                   });

    this.animationSubscription = interval(5000)
                                  .subscribe(() =>
                                  {
                                    let newOffsetPercentage: number = this.currentOffsetPercentage + this.slidePercentage;
                                    if (newOffsetPercentage >= this.bakeryProducts.length * 100)
                                    {
                                      this.currentOffsetPercentage = 0;
                                    }
                                    else
                                    {
                                      this.currentOffsetPercentage = newOffsetPercentage;
                                    }
                                  });
              
  }

  ngOnDestroy(): void
  {
    if (this.animationSubscription)
    {
      this.animationSubscription.unsubscribe();
    }  
  }
}