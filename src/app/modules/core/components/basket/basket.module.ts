import { NgModule } from '@angular/core';
import {BasketComponent} from "./basket.component";
import {BasketTableComponent} from "./basket-table/basket-table.component";
import { BasketTabMiniComponent } from './basket-tab-mini/basket-tab-mini.component';
import {SharedModule} from "../../../shared/shared.module";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [BasketComponent, BasketTableComponent, BasketTabMiniComponent],
  imports: [
    SharedModule,
    RouterLink,
  ],
  exports: [BasketComponent, BasketTableComponent, BasketTabMiniComponent]
})
export class BasketModule { }
