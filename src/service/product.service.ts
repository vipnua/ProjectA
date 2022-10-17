import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from 'src/interface/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API = 'https://api-manigiao.vercel.app/api/products';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.API}`);
  }

  addProduct(product: IProduct): Observable<IProduct> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.httpClient.post<IProduct>(`${this.API}`, product, { headers: header })
  }

  removeProduct(id: number): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(`${this.API}/${id}`)
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(`${this.API}/${product.id}`, product)
  }

  getProduct(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.API}/${id}`)
  }

  uploadFile(body: any): Observable<any> {
    return this.httpClient.post(`https://res.cloudinary.com/dywccbjry/image/upload`, body)
  }

  // uploadImage(file: File): any {
  //   const formData: FormData = new FormData();
  //   formData.append('file', file)

  //   const req = new HttpRequest('POST', `${this.API}/upload`, formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   })

  //   return this.httpClient.request(req)
  // }

  // getFiles(): any {
  //   return this.httpClient.get(`${this.API}/files`)
  // }
}
