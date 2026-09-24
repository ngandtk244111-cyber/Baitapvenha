import { Component } from '@angular/core';
import { ProductService } from '../product-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pro-duct-component',
  standalone: false,
  styleUrl: './pro-duct-component.css',
  templateUrl: './pro-duct-component.html',
})
export class ProDuctComponent {
  public productWithImage : any
  constructor(pservice: ProductService, private router: Router){
    this.productWithImage = pservice.getProducts();
  console.log('Dữ liệu sản phẩm:', this.productWithImage);
  }
  viewDetail(f:any){
    this.router.navigate(['product-component', f.ProductId])
  }
}
