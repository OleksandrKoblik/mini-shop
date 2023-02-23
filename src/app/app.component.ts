import {Component, OnInit} from '@angular/core';
import {IProduct} from "./core/models/product";
import {ProductService} from "./core/services/product.service";
import {Observable, tap} from "rxjs";
import {ModalService} from "./core/services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public title:string = 'angular-14';
  public loading:boolean = false
  public term:string = ''

  constructor(
    public productsService: ProductService,
    public modalService: ModalService
  ) {
  }

  public ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
