import { Component, Input, SimpleChanges, ViewChild, input, viewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss'
})
export class ProductListingComponent {

  public storeAllProducts: any;
  public res: any
  public currentRadioValue: any;
  public childRadio: any;
  prodTitle: string = "Products Filteration";
  @Input() inputValue: any;
  public filteredItems :any[] = [];
  public cartArray: any[] = [];
  // @ViewChild(HeaderComponent) headerComp!: HeaderComponent;


  constructor(private productservice: ProductService) { }

  ngOnInit() {
    console.log(`Input value is:`, this.inputValue)
    this.productservice.fetchData().subscribe((data) => {
      this.storeAllProducts = data;
      this.res = this.storeAllProducts;
      console.log('before', this.res);
    })
    // debugger;
  }

  ngDoCheck(){
    if(this.inputValue !== ''){
      this.filteredItems  = this.res.filter((item: any) => item.title.toLowerCase().includes(this.inputValue.toLowerCase()));
    }
    else{
      this.filteredItems  = [...this.res]
    }
  }

  // ngOnChanges(){

  // }

  // ngOnChanges(changes: any ) {
  //   if (changes.inputValue) {
  //     this.productservice.searchSubject.subscribe((searchData) => {
  //       console.log('get item from previous next is:', searchData)
  //       if (searchData) {
  //         this.res = this.res.filter((item: any) => item.title === searchData)
  //       }
  //       else {
  //         return this.res;
  //       }
  //     })
  //   }
  // }



  getChildData(data: any) {
    // console.log('child data is', data)
    // this.childRadio = data;
    // this.resetProducts();
    // if(this.childRadio !== 'All'){
    //   this.res = this.res.filter((item: any)=> item.category == this.childRadio || item.category === 'All')
    //   console.log('result is', this.res)
    // }
  }


  resetProducts() {
    this.res = this.storeAllProducts;
  }
  handleCart(id: any){
    console.log('ID encountered was', id);
    const newItem = this.res.find((item:any)=> item.id === id);
    this.cartArray = [...this.cartArray, newItem]
    console.log('this.filteredItems is:', this.cartArray)
    this.productservice.addtoCartSubject.next(this.cartArray);
  }


}
