import { Component, OnInit } from '@angular/core';
import { cart } from '../models/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingCart: cart[];
  total: number;

  constructor(private cartService: CartService) {
    this.total = 0;
    this.shoppingCart = cartService.getCart()
   }

  ngOnInit(): void {
    this.getTotal(this.shoppingCart);
  }

  getTotal(shoppingCart: cart[]){
    this.shoppingCart.forEach(p => {
      this.total += p.quantity * p.price
    })
  }

  removeProduct(cartItem: cart){
    this.shoppingCart = this.cartService.removeProduct(cartItem);
    console.log(this.shoppingCart);
    this.getTotal(this.shoppingCart);
    console.log(this.total);
  }
}