import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/interface/Product';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private productService: ProductService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) { }

  product!: IProduct
  productData = this.fb.group({
    "name": ['', [Validators.required, Validators.minLength(4)]],
    "price": ['', [Validators.required]],
    'description': ['']
  })

  get f() {
    return this.productData.controls
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      const id = params['id']
      if (params) {
        this.productService.getProduct(id).subscribe(data => {
          this.product = data
        })
      }
    })
  }

  onHandleEdit() {
    this.productService.updateProduct(this.product).subscribe(data => {
      this.product = data
      alert("Updated Successfully!")
      this.router.navigateByUrl('admin/products')
    }, error => {
      console.log(error);

    })
  }

}
