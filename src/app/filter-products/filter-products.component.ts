import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.scss'
})
export class FilterProductsComponent {
   selectedRadiobtn: any = "All";
   @Input() prodTitlepass!: string;
   @Output() passEvent =  new EventEmitter<string>();

   constructor(private productService: ProductService){}




   clickRadioBtn(updatedValue: string){
     this.passEvent.emit(updatedValue)
   }
}
