import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { ProductsService } from '../__services/products.service';
import { IPosts } from '../posts';
import { Products } from '../__interfaces/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ApiService, ProductsService]
})
export class ProductsComponent implements OnInit {

  _postsArray: IPosts[];
  products: Products[];

  constructor(private apiService: ApiService, private productsService: ProductsService) { }

  getPosts(): void {
    this.apiService.getPosts()
      .subscribe(
        resultArray => this._postsArray = resultArray,
        error => console.log('Error :: ' + error)
      );
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(
        result => this.products = result,
        error => console.log('Error :: ' + error)
      );
  }

  ngOnInit() {
    this.getProducts();
  }

}
