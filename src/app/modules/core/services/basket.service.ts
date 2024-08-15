import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Basket} from "../models/basket.model";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  orderIncome = new Subject<Basket>();
  private order: Basket[] = [];

  constructor() {
  }

  public set basket(orderInc: Basket[]){
    this.order = [...orderInc];
    console.log(this.order);
  }

  orderCollector(){

  }

}
