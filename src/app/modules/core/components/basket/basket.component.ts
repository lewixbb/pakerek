import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from "../../models/order.model";
import {Subscription} from "rxjs";
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy{
  basketAmount!: number;
  basketItems!: Order[];
  totalPrice !: number;
  private sub = new Subscription();

  constructor(private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.basketService.orderIncome$.subscribe({
      next: basket => {
        this.basketAmount = basket.inTotal;
        this.basketItems = basket.orders;
        this.totalPrice = basket.totalPrice;
        console.log(this.basketItems);
      },
      error: err => { console.log(err, 'error')},
      complete: () => { console.log('complote')},
    })
  }

  removeItem(id: number) {
    this.basketService.removeFromBasket(id)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
