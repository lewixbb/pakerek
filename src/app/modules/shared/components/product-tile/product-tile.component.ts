import {Component, Input, OnInit} from '@angular/core';
import {SharedModule} from "../../shared.module";
import {Product} from "../../../core/models/product.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-tile',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {

  @Input() product!: Product;

  ngOnInit(): void {
  }



}
