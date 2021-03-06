import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { Product } from '../pojo/product';


@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
    @Input() products: Array<Product>


    constructor() { }

    ngOnInit() {

    }

}
