import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {ProductsComponent} from "./modules/products/products.component";
import {ProductDetailsComponent} from "./modules/products/product-details/product-details.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full', title: 'Suplementy, odżywki !!'},
  {path: 'produkty', component: ProductsComponent, title: 'Suplementy, odżywki !!'},
  {path: 'produkty/:id', component: ProductDetailsComponent, title: 'Suplementy, odżywki !!'}
  // {path: 'produkty', loadChildren: () => import('./modules/products/products.module').then((m)=> m.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
