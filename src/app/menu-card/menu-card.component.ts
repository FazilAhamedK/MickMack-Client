import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../types/menu-item.interface';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItemVariant } from '../types/menu-item-variant.interface';
import { CartItem } from '../types/cart-item.interface';
import { WhatsAppOrderConstants } from './whatsapp-order-constants.utility';

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
  readonly cartLocalStorageKey: string = "mick-mack-cart-indulgence";

  emptyCartModalState: "visible" | "hidden";
  menuItems: Array<MenuItem>;
  menuItemCategories: Array<string>;
  accordionStates: Array<"expanded" | "collapsed">;
  cart: Map<number, CartItem>;
  cartItems: Array<CartItem>;

  constructor(private httpClient: HttpClient)
  {
    this.emptyCartModalState = "hidden";
    this.menuItems = [];
    this.menuItemCategories = [];
    this.accordionStates = [];
    this.cart = new Map<number, CartItem>();
    this.cartItems = [];
  }

  ngOnInit(): void
  {
    const cartFromMemory: string | null = localStorage.getItem(this.cartLocalStorageKey);
    if (cartFromMemory !== null)
    {
      this.cart = new Map<number, CartItem>(JSON.parse(cartFromMemory));
      this.cartItems = [...Array.from(this.cart.values())];
    }
    
    this.httpClient.get<Array<MenuItem>>("/assets/data/MenuItems.json")
                   .subscribe(products =>
                   {
                      this.menuItems = products.map((product, productIndex) =>
                                                    {
                                                      product.id = productIndex + 1;
                                                      product.variants.map((variant, variantIndex) =>
                                                                            {
                                                                              variant.skuID = product.id + (0.1 * (variantIndex + 1));
                                                                              return variant;
                                                                            }
                                                                          );
                                                      return product;
                                                    }
                                                  );
                      this.sortMenuItems();

                      this.menuItemCategories.push(...[...new Set(this.menuItems.map(product => product.category))].sort());
                      if (this.menuItemCategories.length > 0)
                      {
                        this.accordionStates.length = this.menuItemCategories.length;
                        this.accordionStates.fill("collapsed");
                      }
                   });
  }

  public getQuantity(skuID: number): number
  {
    return this.cart.get(skuID)?.orderQuantity || 0;
  }

  public increaseQuantity(item: MenuItem, variant: MenuItemVariant): void
  {
    let cartItem: CartItem;

    if (this.cart.has(variant.skuID))
    {
      cartItem = this.cart.get(variant.skuID)!;
    }
    else
    {
      cartItem =
      {
        skuID: variant.skuID,
        name: item.name,
        category: item.category,
        variantName: variant.name,
        variantCost: variant.price,
        orderQuantity: 0,
        orderCost: 0
      };
    }

    cartItem.orderQuantity = Math.min(cartItem.orderQuantity + 1, variant.maximumOrderQuantity);
    cartItem.orderCost = cartItem.orderQuantity * cartItem.variantCost;
    
    this.cart.set(variant.skuID, cartItem);
    this.cartItems = Array.from(this.cart.values());
    localStorage.setItem(this.cartLocalStorageKey, JSON.stringify(Array.from(this.cart)));
  }

  public decreaseQuantity(skuID: number): void
  {
    let cartItem: CartItem | undefined = this.cart.get(skuID);
    
    if (cartItem !== undefined)
    {
      cartItem.orderQuantity = Math.max(cartItem.orderQuantity - 1, 0);
      cartItem.orderCost = cartItem.orderQuantity * cartItem.variantCost;
    
      if (cartItem.orderQuantity === 0)
      {
        this.cart.delete(skuID);
      }
      else
      {
        this.cart.set(skuID, cartItem);
      }

      this.cartItems = Array.from(this.cart.values());
      localStorage.setItem(this.cartLocalStorageKey, JSON.stringify(Array.from(this.cart)));
    }
  }

  public isQuantityMinimum(skuID: number): boolean
  {
    return !(this.cart.has(skuID));
  }

  public isQuantityMaximum(variant: MenuItemVariant): boolean
  {
    return this.cart.has(variant.skuID) && this.cart.get(variant.skuID)!.orderQuantity >= variant.maximumOrderQuantity;
  }

  public getCartValue(): number
  {
    return Array.from(this.cart.values()).reduce((totalCost, current) => totalCost + current.orderCost, 0);
  }

  public toggleAccordion(index: number): void
  {
    this.accordionStates[index] = this.accordionStates[index] === "expanded" ? "collapsed" : "expanded";
  }

  public placeOrder(): void
  {
    if (this.cartItems.length > 0)
    {
      let message: string = this.generateWhatsAppOrderMessage();
      message = encodeURIComponent(message);
      let url: string = `https://wa.me/${WhatsAppOrderConstants.contactNumber}?text=${message}`;
      window.open(url, "newWindow");
    }
  }


  public hideEmptyCartModal($event: Event): void
  {
    const target = ($event.target as HTMLElement).id;

    if (target === "empty-cart-modal-background" || target === "empty-cart-modal-cancel")
    {
      this.emptyCartModalState = "hidden";
    }
  }

  public emptyCart(): void
  {
    this.cart.clear();
    this.cartItems = [];
    localStorage.setItem(this.cartLocalStorageKey, JSON.stringify(Array.from(this.cart)));
    this.emptyCartModalState = "hidden";
  }

  private sortMenuItems(): void
  {
    this.menuItems.sort((alpha, bravo) =>
    {
      const sortingScore = (element: MenuItem) => (element.variants?.length ? 2 : 0) + (element.imageFileName ? 1 : 0);
      return sortingScore(bravo) - sortingScore(alpha);
    });
  }

  private generateWhatsAppOrderMessage(): string
  {
    let message: string = "";

    /* Header */
    message = message.concat(WhatsAppOrderConstants.formatBold)
                      .concat(WhatsAppOrderConstants.header)
                      .concat(WhatsAppOrderConstants.formatBold);
    message = message.concat(WhatsAppOrderConstants.lineBreak);
    message = message.concat(WhatsAppOrderConstants.lineBreak);

    message = message.concat(WhatsAppOrderConstants.openerMessage);
    message = message.concat(WhatsAppOrderConstants.lineBreak);

    message = message.concat(WhatsAppOrderConstants.formatMonospace);
    for (let item of this.cartItems)
    {
      message = message.concat(WhatsAppOrderConstants.lineBreak);

      /* Item Category */
      message = message.concat(item.category.toUpperCase());
      message = message.concat(WhatsAppOrderConstants.lineBreak);

      /* Item Name */
      message = message.concat(item.name);
      message = message.concat(WhatsAppOrderConstants.lineBreak);


      /* Item Quantity, Variant, Price */
      const orderCost: string = item.orderCost.toFixed(2);
      const spacer: string = this.generateSpacer(orderCost,
                                                  item.variantName,
                                                  WhatsAppOrderConstants.timesSeparator,
                                                  item.orderQuantity);

      message = message.concat(item.variantName)
                        .concat(WhatsAppOrderConstants.timesSeparator)
                        .concat(item.orderQuantity.toString())
                        .concat(spacer)
                        .concat(orderCost);
      
      message = message.concat(WhatsAppOrderConstants.lineBreak);
    }
    message = message.concat(WhatsAppOrderConstants.formatMonospace);
    message = message.concat(WhatsAppOrderConstants.lineBreak);

    /* Delivery Charges Note */
    message = message.concat(WhatsAppOrderConstants.formatItalic)
                      .concat(WhatsAppOrderConstants.deliveryChargesApplicableMessage)
                      .concat(WhatsAppOrderConstants.formatItalic);
    
    message = message.concat(WhatsAppOrderConstants.lineBreak);
    message = message.concat(WhatsAppOrderConstants.formatMonospace)
                      .concat(WhatsAppOrderConstants.horizontalLine)
                      .concat(WhatsAppOrderConstants.formatMonospace);
    message = message.concat(WhatsAppOrderConstants.lineBreak);

    /* Total Cost */
    const totalCost: string = this.getCartValue().toFixed(2);
    message = message.concat(WhatsAppOrderConstants.formatMonospace)
                      .concat(WhatsAppOrderConstants.totalCostHeading)
                      .concat(this.generateSpacer(totalCost, WhatsAppOrderConstants.totalCostHeading))
                      .concat(totalCost)
                      .concat(WhatsAppOrderConstants.formatMonospace);

    return message;
  }

  private generateSpacer(amount: string, ...contents: Array<any>): string
  {
    const contentLength: number = contents.reduce((totalLength, content) => totalLength + content.toString().length, 0);
    const amountLength: number = amount.length;

    let spacerLength: number = (WhatsAppOrderConstants.itemNameSizeLimit - contentLength) + 1 + (7 - amountLength);
    return " ".repeat(spacerLength);
  }
}