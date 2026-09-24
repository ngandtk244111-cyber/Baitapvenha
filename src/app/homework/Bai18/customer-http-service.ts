import { Injectable, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerType } from '../../classes/customer';
@Injectable({providedIn:'root'})
export class CustomerHttpService {
    private _url: string = '../datasets/customer.json'
    constructor(private httpClient: HttpClient){}
    getCustomer():Observable<CustomerType[]>{
        return this.httpClient.get<CustomerType[]>(this._url)
    }
}
