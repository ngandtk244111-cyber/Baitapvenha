import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';
import { CatalogComponent } from './homework/Bai14/catalog-component/catalog-component';
import { ProDuctComponent } from './homework/Bai13/pro-duct-component/pro-duct-component';
import { ProductDetailComponent } from './homework/Bai13/product-detail-component/product-detail-component';
import { CustomerHttpComponent } from './homework/Bai18/customer-http-component/customer-http-component';
const routes: Routes = [
  {path:"learn-directive",component:ProductListComponent},
  {path:"product-dropdown-list",component:ProductDropdownListComponent},
  {path:"product-list-call-service",component:ProductListCallServiceComponent},
  {path:"product-list-call-http-service-component",component:ProductListCallHttpServiceComponent}
  ,
  {path:"CatalogComponent",component:CatalogComponent},
  {path:"product-component",component:ProDuctComponent},
{path:'product-component/:id', component:ProductDetailComponent}, 
{path:'Customer-http-component', component:CustomerHttpComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }