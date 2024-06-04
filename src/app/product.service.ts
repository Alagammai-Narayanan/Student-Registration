import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from './product-listing/product.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs'


export interface ApiResponse {
  id: number,
  name: string,
  date: string
}
export interface TransformedData{
  id: number,
  name: string,
  date: Date
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api_url = 'https://dummyjson.com/products';

  //Behavior Subject
  public bSubject = new BehaviorSubject<string>('All');
  public searchSubject = new BehaviorSubject<any>(null);
  public addtoCartSubject = new BehaviorSubject<any>(null);

  updateSubject(newValue: any){
    return this.bSubject.next(newValue)
  }

  constructor(private http: HttpClient) { }

  // getAllProducts(){
  //   return this.http.get<Product>(this.api_url)
  // }

  getAllProducts(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }

  fetchData(): Observable<any> {
    return this.http.get<any>(this.api_url).pipe(
      map(x => {
        // debugger;
        // return `Hello ${x.products}`
        let abc =  x.products.map((item: any)=> ({
          id: item.id,
          title: item.title,
          description: item.description,
          category: item.category,
          price: item.price
        }))
        // debugger;
        return abc;
      })
    );
  }


}
