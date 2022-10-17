import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  API = `http://localhost:3000/products`;
  constructor(private httpClient: HttpClient) {
  }
  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.API}`)
  }

  getProduct(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.API}/${id}`);
  }
}
