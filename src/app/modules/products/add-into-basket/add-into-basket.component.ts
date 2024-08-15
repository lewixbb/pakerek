import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../core/models/product.model";
import {BasketService} from "../../core/services/basket.service";
import {Subscription} from "rxjs";
import {Basket} from "../../core/models/basket.model";

@Component({
  selector: 'app-add-into-basket',
  templateUrl: './add-into-basket.component.html',
  styleUrls: ['./add-into-basket.component.scss']
})
export class AddIntoBasketComponent implements OnInit, OnDestroy {

  @Input() product!: Product;
  basket!: Basket;
  quantity = 1;
  limitedQuantity!: number;
  sub!: Subscription;

  constructor( private basketService: BasketService) {}



  ngOnInit(): void {
    this.limitedQuantity = 12;
  }

  addPiece(){
    if(this.quantity < this.limitedQuantity){
      this.quantity = this.quantity + 1;
      console.log(this.quantity);
    }
  }

  subtractPiece(){
    if(this.quantity > 1) {
      this.quantity = this.quantity - 1;
      console.log(this.quantity);
    }
  }

  addToBasket() {
    console.log(this.quantity)
    this.sub = this.basketService.orderIncome.subscribe({
        next: basket => {this.basket = new Basket(this.quantity);
          console.log(this.basket)},
        error: err => console.log(err)
      }
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
   }
}
