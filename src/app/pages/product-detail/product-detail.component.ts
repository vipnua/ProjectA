import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product = {
    id: 1,
    name: "",
    description: "",
    imageUrl: ""
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsServiceService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      console.log(id);

      if (params) {

        this.productService.getProduct(id).subscribe(item => {
          this.product = item;
        })
      }
    });

  }

}
