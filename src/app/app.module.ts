import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductModule} from "./core/components/product/product.module";
import {HttpClientModule} from "@angular/common/http";
import {GlobalErrorModule} from "./core/components/global-error/global-error.module";
import {FormsModule} from "@angular/forms";
import { FilterProductsPipe } from './core/pipes/filter-products.pipe';
import {ModalModule} from "./core/components/modal/modal.module";
import {CreateProductModule} from "./core/components/create-product/create-product.module";

@NgModule({
  declarations: [
    AppComponent,
    FilterProductsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    HttpClientModule,
    GlobalErrorModule,
    FormsModule,
    ModalModule,
    CreateProductModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
