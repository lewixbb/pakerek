import { NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class NewsModule { }
