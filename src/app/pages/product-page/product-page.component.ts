import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {


  products: IProduct[] = [];
  message: string = "";
  constructor(private productService: ProductsServiceService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {

      this.products = data;
    }, error => {

      this.message = error.message
    })
  }

}
