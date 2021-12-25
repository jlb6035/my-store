import { Injectable } from '@angular/core';
import { cart } from '../../models/cart';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: cart[] = [];

  constructor() {
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

  getTotal(): number {
    let total = 0;
    this.cart.forEach(p => total += p.quantity * p.price);
    return total;
  }

  updateQuantity(item: cart, newQuantity: number){
    this.cart.forEach(i =>{
      if(i.id == item.id){
        i.quantity = newQuantity;
      }
    })
    return this.getTotal();
  }

  clearCart(){
    this.cart = [];
  }
}
