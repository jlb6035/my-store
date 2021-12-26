import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cart } from '../models/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: cart;
  @Output() removeItem: EventEmitter<cart> = new EventEmitter();
  @Output() updateQuantity: EventEmitter<cart> = new EventEmitter();


  constructor() { 
    this.item = {
      id: 1,
      name: "",
      price: 1,
      url: "",
      description: "",
      quantity: 1
    }
  }

  ngOnInit(): void {
  }

  removeProduct(cartItem: cart){
    this.removeItem.emit(cartItem);
  }

  updateQuantities(item: cart, event: any){
    let newQuantity = event.target.value;
    let cart: cart = {
      id: item.id,
      name: item.name,
      price: item.price,
      url: item.url,
      description: item.description,
      quantity: newQuantity
    }
    this.updateQuantity.emit(cart)
  }
}
