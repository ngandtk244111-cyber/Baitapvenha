import { Injectable, Service } from '@angular/core';

@Injectable({providedIn:'root'})
export class CatalogService {
    datas=[ 
    {"Cateid":"cate1","CateName":"Nước Ngọt", 
      "Products":[ 
        {"ProductId":"p1","ProductName":"Coca","Price":100, 
"Image":"imgs/coca.png"}, 
        {"ProductId":"p2","ProductName":"Pepsi","Price":300, 
"Image":"imgs/pepsi.png"}, 
        {"ProductId":"p3","ProductName":"Sting","Price":200, 
"Image":"imgs/sting.png"}, 
      ] 
    }, 
    {"Cateid":"cate2","CateName":"Bia", 
      "Products":[ 
        {"ProductId":"p4","ProductName":"Heleiken","Price":500, 
"Image":"imgs/heineken.png"}, 
        {"ProductId":"p5","ProductName":"333","Price":400, 
"Image":"imgs/333.png"}, 
        {"ProductId":"p6","ProductName":"Sai Gon","Price":600, 
"Image":"imgs/saigon.jpg"}, 
      ] 
    }, 
  ] 
   
  constructor() { } 
  getCategories() 
  { 
    return this.datas     
  } 
}
