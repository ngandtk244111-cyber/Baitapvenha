import { Component } from '@angular/core';
import { CatalogService } from '../catalog-service';

@Component({
  selector: 'app-catalog-component',
  standalone: false,
  styleUrl: './catalog-component.css',
  templateUrl: './catalog-component.html',
})
export class CatalogComponent {
  public catalogs:any
  constructor(private _cs:CatalogService){
    this.catalogs=_cs.getCategories()
  }
}
