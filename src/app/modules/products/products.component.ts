import {Component, OnInit} from '@angular/core';
import {ProductTileComponent} from "../shared/components/product-tile/product-tile.component";
import {SharedModule} from "../shared/shared.module";
import {ProductsService} from "../core/services/products.service";
import {Product} from "../core/models/product.model";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductTileComponent, SharedModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!: Product[];

  constructor(private prodApi: ProductsService) {

  }

  ngOnInit(): void {
    this.prodApi.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: err => console.log(err),
    })

  }

}
