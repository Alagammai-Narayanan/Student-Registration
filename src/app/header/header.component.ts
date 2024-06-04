import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedValue: string = "";

  myArray = [];
  cartItemsStored: any;

  constructor(private productService: ProductService){
    this.productService.addtoCartSubject.subscribe((data)=>{
      console.log('cart items stored is:', data);
      this.cartItemsStored = data;
      console.log('this.cartItemsStored is:', this.cartItemsStored);
    })
  }
  searchProduct(e: any){
    this.selectedValue = e.target.value;
    this.selectedValue = this.selectedValue.toLowerCase();
    console.log('this.selectedValue', this.selectedValue);
    this.productService.searchSubject.next(this.selectedValue);
    console.log('header behavior', this.productService.searchSubject)
    // debugger;
  }

  ngOnInit(){
    // console.log(this.productService.searchSubject)
    // this.productService.searchSubject.subscribe((data)=>{
    //   console.log('item from behavior subject is:', data)
    //   this.myArray = data;
    // })

    // this.res = this.myArray.filter((item: any)=> item.title === this.selectedValue.toLowerCase())

  }
  deletProduct(id: any){
    console.log('delete product id is:', id);
    this.cartItemsStored = this.cartItemsStored.filter((item: any)=> item.id !== id)
  }
}
