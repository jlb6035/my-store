import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cart } from '../models/cart';
import { Product } from '../models/product';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products: Product[] = [];
  productId: any = "";
  product: Product;

  cart: cart;

  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  constructor(route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
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

    route.paramMap.subscribe(params => {
      this.productId = params.get("id");
    });

    productService.getAllProducts().subscribe(res => {
      this.products = res;
      this.product = this.products.filter(product => product.id == this.productId)[0]
    });


   }

  ngOnInit(): void {
  }

  onSubmit(quantity: number, product: Product){
    console.log("Form Submission!!!!");
    console.log("Quantity:  " + quantity);
    this.cart = {
      id: product.id,
      name: product.name,
      price: product.price,
      url: product.url,
      description: product.description,
      quantity: quantity
    }
    this.cartService.addToCart(this.cart)
    alert(product.name + " added to cart!");
  }

}
