import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from 'src/interface/Product';
import { ProductService } from 'src/service/product.service';

// class ImageSnippet {
//   constructor(public src: string, public file: File) { }
// }

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  // product: IProduct = {
  //   id: 0,
  //   name: "",
  //   price: 0,
  //   description: "",
  //   imageUrl: ""
  // };



  constructor(private productService: ProductService,
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  // getImage(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', (event: any) => {
  //     this.selectedFile = new ImageSnippet(event.target.result, file);
  //     this.productService.uploadImage(this.selectedFile.file).subscribe(
  //       console.log('Successfully')
  //     )

  //   })
  //   reader.readAsDataURL(file)
  //   console.log(file);

  // }

  file: any;

  productData = this.fb.group({
    "name": ['', [Validators.required, Validators.minLength(4)]],
    "price": ['', [Validators.required]],
    'description': ['']
  })

  get f() {
    return this.productData.controls
  }

  onHandleInput(event: any) {
    this.file = event.target.files[0];
    console.log(event.target.files[0]);

  }

  onHandleAdd(product: IProduct) {
    let formData = new FormData()
    formData.set('file', this.file)
    this.http.post(`http://localhost:3000/products?imageUrl`, formData).subscribe((res) => {
      console.log(res);

    })

    // return this.productService.addProduct(product).subscribe(data => {
    //   this.router.navigateByUrl('admin/products')
    // })

  }


}
