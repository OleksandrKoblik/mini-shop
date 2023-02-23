import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FocusDirective} from "../../directives/focus.directive";



@NgModule({
    declarations: [
        CreateProductComponent,
        FocusDirective
    ],
    exports: [
        CreateProductComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class CreateProductModule { }
