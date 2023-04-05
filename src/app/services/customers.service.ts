import { Injectable } from '@angular/core';
import { Customers } from './../models/customers';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private regCustomerUrl: string =
  'http://localhost:8089/customers/addCustomer';
private logCustomerUrl: string = 'http://localhost:8089/customers/login';

private customerLoggedIn: string;

constructor(private _httpClient: HttpClient) {}

registerCustomer(customer: Customers): any {
  return this._httpClient.post<Customers>(this.regCustomerUrl, customer);
}

validateCustomer(value: any) {
  return this._httpClient.post<Customers>(this.logCustomerUrl, value);
}

setCustomerLoggedIn(customerLoggedIn: string) {
  this.customerLoggedIn = customerLoggedIn;
}
getCustomerLoggedIn() {
  return this.customerLoggedIn;
  
}
}