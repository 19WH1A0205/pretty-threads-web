import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private selectedProducts = new BehaviorSubject([]);
  currentSelectedProducts = this.selectedProducts.asObservable();

  constructor() { }

  changeSelectedProducts(products : any){
    this.selectedProducts.next(products)
    console.log(this.selectedProducts)
  }
}
