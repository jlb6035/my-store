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
    this.total = cartService.getTotal();
    this.shoppingCart = cartService.getCart()
   }

  ngOnInit(): void {
  }

  removeProduct(cartItem: cart){
    this.shoppingCart = this.cartService.removeProduct(cartItem);
    this.total = this.cartService.getTotal();
    console.log(this.shoppingCart);
    console.log(this.total);
  }
}