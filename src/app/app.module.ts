import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule} from "./modules/core/core.module";
import { AddProductComponent } from './modules/products/add-product/add-product.component';
import { ProductsListComponent } from './modules/products/products-list/products-list.component';
import { ProductDetailsComponent } from './modules/products/product-details/product-details.component';
import {SharedModule} from "./modules/shared/shared.module";
import { AddIntoBasketComponent } from './modules/products/add-into-basket/add-into-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    AddIntoBasketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
