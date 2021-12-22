import { Injectable } from '@angular/core';
import { cart } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: cart[] = [];
  total: number;

  constructor() {
    this.total = 1;
   }

  addToCart(cart: cart){
    this.cart.push(cart);
  }

  getCart(){
    return this.cart;
  }

  removeProduct(cartItem: cart){
    return this.cart = this.cart.filter(item => item.id != cartItem.id);
  }

    getTotal(){
    this.cart.forEach(p => {
      this.total += p.quantity * p.price
    })
    return this.total;
  }
}
