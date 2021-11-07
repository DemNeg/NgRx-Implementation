import {Product} from "../model/product.model";
import {ProductActions, ProductsActionsTypes} from "./products.actions";
import {Action} from "@ngrx/store";

export enum ProductStateEnum{
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial"
}

export interface ProductsState{
  products:Product[],
  errorMessage:string,
  dataState:ProductStateEnum
}

const initState:ProductsState={
  products:[],
  errorMessage:"",
  dataState:ProductStateEnum.INITIAL
}
export function productsReducer(state:ProductsState=initState,action:Action):ProductsState{
  switch (action.type) {
    /*Get All products*/
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return {...state, dataState:ProductStateEnum.LOADING}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductStateEnum.LOADED,products:(<ProductActions>action).payload}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState:ProductStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}

    /*Get Selected products*/
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
      return {...state, dataState:ProductStateEnum.LOADING}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductStateEnum.LOADED,products:(<ProductActions>action).payload}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState:ProductStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}

    /*Search products*/
    case ProductsActionsTypes.SEARCH_PRODUCTS:
      return {...state, dataState:ProductStateEnum.LOADING}
    case ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductStateEnum.LOADED,products:(<ProductActions>action).payload}
    case ProductsActionsTypes.SEARCH_PRODUCTS_ERROR:
      return {...state, dataState:ProductStateEnum.ERROR,errorMessage:(<ProductActions>action).payload}

    default :return {...state}
  }

}
