import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/interface/Product';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: IProduct[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
  }

  delete(id: number) {
    const confirm = window.confirm('Xac nhan xoa san pham ?')
    if (confirm) {
      this.productService.removeProduct(id).subscribe(() => {
        return this.products = this.products.filter(item => item.id !== id)
      })
    }

  }

}
