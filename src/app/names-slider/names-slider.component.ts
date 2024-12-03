import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BakeryProduct } from '../types/bakery-product.type';
import { interval, Subscription } from 'rxjs';
import { DeviceService } from '../services/device.service';

@Component
({
  selector: 'mm-names-slider',
  templateUrl: './names-slider.component.html',
  styleUrl: './names-slider.component.scss'
})
export class NamesSliderComponent implements OnInit, OnDestroy
{
  private deviceIsMobileSubscription!: Subscription;
  private animationSubscription!: Subscription;
  
  public isMobileDevice: boolean = false;
  public bakeryProducts: Array<BakeryProduct> = [];
  public currentOffsetPercentage: number;
  public visibleCount!: number;
  public slidePercentage!: number;
  public elementWidth!: string;

  constructor(private httpClient: HttpClient, private deviceService: DeviceService)
  {
    this.currentOffsetPercentage = 0;
  }

  ngOnInit(): void
  {
    this.httpClient.get<Array<BakeryProduct>>("/assets/data/BakeryProducts.json")
                   .subscribe(bakeryProducts =>
                   {
                     this.bakeryProducts = bakeryProducts?.filter(product => product.showInSlider);
                   });

    this.deviceIsMobileSubscription = this.deviceService
                                          .isMobile
                                          .subscribe(isMobile =>
                                          {
                                            this.isMobileDevice = isMobile;
                                            this.updateAnimationMetrics();
                                          });
  }

  ngOnDestroy(): void
  {
    if (this.deviceIsMobileSubscription)
    {
      this.deviceIsMobileSubscription.unsubscribe();
    }

    this.stopAnimation();
  }

  updateAnimationMetrics(): void
  {
    this.visibleCount = this.isMobileDevice ? 1 : 3;
    this.slidePercentage = 100 * this.visibleCount;
    this.startAnimation();
  }

  startAnimation(): void
  {
    this.stopAnimation();

    let intervalDuration: number = this.isMobileDevice ? 3000 : 5000;
    this.animationSubscription = interval(intervalDuration)
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

  stopAnimation(): void
  {
    if (this.animationSubscription)
    {
      this.animationSubscription.unsubscribe();
    }
  }
}