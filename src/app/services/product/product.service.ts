import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://storefrontbackendapi-env.eba-c6umk7tn.us-east-1.elasticbeanstalk.com/products');
  }
}
