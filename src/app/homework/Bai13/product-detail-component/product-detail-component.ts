import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail-component',
  standalone: false,
  styleUrl: './product-detail-component.css',
  templateUrl: './product-detail-component.html',
})
export class ProductDetailComponent {
  selectedProduct: any
  constructor(private activateRoute: ActivatedRoute, private _fs: ProductService, private router: Router){
    activateRoute.paramMap.subscribe (
      (param) => {
        let id = param.get('id')
        if (id!=null)
        {this.selectedProduct = _fs.getProductDetail(id)
        }
      }
    )
  }
  goBack(){
    this.router.navigate(['product-component'])
  }
}
