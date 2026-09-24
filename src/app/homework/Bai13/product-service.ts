import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProductService {
    products=[
    {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"imgs/coca.png"}, 
    {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"imgs/pepsi.png"}, 
    {"ProductId":"p3","ProductName":"Sting","Price":200,"Image":"imgs/sting.png"},]
    constructor(){}
    getProducts(){
        return this.products
    }
    getProductDetail(idProduct: any){
        return this.products.find(x => x.ProductId == idProduct)
    }
}

