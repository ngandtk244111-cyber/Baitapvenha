import { Component } from '@angular/core';
import { Product } from '../classes/IProducts';

@Component({
  selector: 'app-product-dropdown-list-component',
  standalone: false,
  styleUrl: './product-dropdown-list-component.css',
  templateUrl: './product-dropdown-list-component.html',
})
export class ProductDropdownListComponent {
  products: Product[] = [
        {
          id: 1,
          name: 'Iphone 14',
          price: 30,
          image: 'https://www.didongmy.com/vnt_upload/product/09_2026/thumbs/(600x600)_iphone-18-pro-max-mau-xanh-didongmy.jpg'
        },
        {
          id: 2,
          name: 'Samsung Galaxy S23',
          price: 30,
          image: ''
        },
        {
          id: 3,
          name: 'Xiaomi Redmi Note 10',
          price: 30,
          image: ''
        }]
}
