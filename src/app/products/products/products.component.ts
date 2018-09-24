import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { Product } from '../pojo/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;

  constructor(private productservice: ProductServiceService) {
    this.productservice.getProducts().subscribe(resp => {
      console.log(resp)
      console.log(resp.errorCode)

      console.log(resp.response)

      console.log(resp.response.products)
      this.products = resp.response.products;
      // for (let product of resp.response.products) {
      //   this.products.push(product)
      // }
      console.log('direct my products is ')
      console.log(this.products)






      // for (let product of resp.response.products) {
      //   this.products.push(product)
      // }

      // console.log(this.products)

    }
    )

  }

  ngOnInit() {
  }

}
