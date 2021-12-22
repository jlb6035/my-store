import { Injectable } from '@angular/core';
import { cart } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: cart[] = [];

  constructor() { }

  addToCart(cart: cart){
    this.cart.push(cart);
  }

  getCart(){
    return this.cart;
  }

  removeProduct(cartItem: cart){
    return this.cart = this.cart.filter(item => item.id != cartItem.id);
  }
}
