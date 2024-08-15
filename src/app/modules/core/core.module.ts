import { NgModule } from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {RouterLink} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [HeaderComponent],
    imports: [
        SharedModule,
        RouterLink,
        BrowserAnimationsModule,
    ],
  exports: [HeaderComponent]
})
export class CoreModule { }
