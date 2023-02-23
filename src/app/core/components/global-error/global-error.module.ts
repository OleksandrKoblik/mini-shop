import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalErrorComponent } from './global-error.component';



@NgModule({
    declarations: [
        GlobalErrorComponent
    ],
    exports: [
        GlobalErrorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GlobalErrorModule { }
