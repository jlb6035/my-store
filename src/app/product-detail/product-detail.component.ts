import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products: Product[] = [];
  productId: any = "";
  product: Product;

  constructor(route: ActivatedRoute, private productService: ProductService) {
    this.product = {
      id: 1,
      name: 'name',
      price: 1,
      url: "url",
      description: ""
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

}
