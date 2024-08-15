import { NgModule } from '@angular/core';
import { PromotionsComponent } from './promotions.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
    declarations: [
        PromotionsComponent
    ],
    exports: [
        PromotionsComponent
    ],
    imports: [
        SharedModule
    ]
})
export class PromotionsModule { }
