import { Component, Input, OnInit } from '@angular/core';
import { cart } from '../models/cart';
import { Product } from '../models/product';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  cart: cart;
  quantity: number;

  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private cartService: CartService) {
    this.quantity = 1;
    this.product = {
      id: 1,
      name: 'name',
      price: 1,
      url: "url",
      description: ""
    }

    this.cart = {
      id: 1,
      name: 'name',
      price: 1,
      url: "url",
      description: "",
      quantity: 1
    }
   }

  ngOnInit(): void {
  }

  onSubmit(quantity: number, product: Product){
    this.cart = {
      id: product.id,
      name: product.name,
      price: product.price,
      url: product.url,
      description: product.description,
      quantity: quantity
    }
    this.cartService.addToCart(this.cart)
  }

}
