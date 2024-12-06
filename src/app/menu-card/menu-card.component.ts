import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../types/menu-item.type';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component
({
  selector: 'mm-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss',
  animations:
  [
    trigger('accordionState',
    [
      state('collapsed', style({height: '0', overflow: 'hidden', opacity: 0})),
      state('expanded', style({height: '100%', overflow: 'hidden', opacity: 1})),
      transition('collapsed <=> expanded', [animate('300ms ease-in-out')])
    ])
  ]
})
export class MenuCardComponent implements OnInit
{
  menuItems: Array<MenuItem>;
  menuItemCategories: Array<string>;
  accordionStates: Array<"expanded" | "collapsed">;

  constructor(private httpClient: HttpClient)
  {
    this.menuItems = [];
    this.menuItemCategories = [];
    this.accordionStates = [];
  }

  ngOnInit(): void
  {
    this.httpClient.get<Array<MenuItem>>("/assets/data/MenuItems.json")
                   .subscribe(products =>
                   {
                      this.menuItems = products;
                      this.menuItemCategories.push(...[...new Set(this.menuItems.map(product => product.category))].sort());

                      if (this.menuItemCategories.length > 0)
                      {
                        this.accordionStates.length = this.menuItemCategories.length;
                        this.accordionStates.fill("collapsed");
                      }
                   });
  }

  public toggleAccordion(index: number): void
  {
    this.accordionStates[index] = this.accordionStates[index] === "expanded" ? "collapsed" : "expanded";
  }
}