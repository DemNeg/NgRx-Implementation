import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {GetAllProductsAction, GetSelectedProductsAction, SearchlProductsAction} from "../../../NgRx/products.actions";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
  }

  onGetAllProduct() {
      this.store.dispatch(new GetAllProductsAction({}))
  }

  onGetSelectedProduct() {
    this.store.dispatch(new GetSelectedProductsAction({}))
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchlProductsAction(dataForm.keyword));
  }
}
