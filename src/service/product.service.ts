import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API = "http://localhost:3000"

  constructor() { }
}
