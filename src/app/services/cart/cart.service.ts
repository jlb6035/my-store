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
    if(this.doesItemExsist(cart)){
      this.updateQuantity(cart, cart.quantity);
      alert("Quantity for " + cart.name + " updated!")
    } else {
      if(cart.quantity > 1){
        this.cart.push(cart);
        alert(cart.name + " added to cart!");
      } else {
        alert("Please select a quantity!");
      }
    }
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

  doesItemExsist(cart: cart){
    if(this.cart.filter(item => item.id === cart.id ).length > 0){
      return true;
    } else {
      return false;
    }
  }

  clearCart(){
    this.cart = [];
  }
}
