import { Injectable } from '@angular/core';
import { Http, Response } from '@Angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Products } from '../__interfaces/products';

@Injectable()
export class ProductsService {

  private _productsURL = 'http://localhost:3000/api/products/';

  constructor(private http: Http) { }

  getProducts(): Observable<Products[]> {
    return this.http
      .get(this._productsURL)
      .map((response: Response) => {
        return <Products[]>response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
