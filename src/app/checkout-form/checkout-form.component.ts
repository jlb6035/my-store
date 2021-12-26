import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  title: string = "";
  body: string = "";
  name: string = "";
  address: string = "";
  creditCard: string = "";

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onNameChange(name: any){
    console.log(name);
  }
}
