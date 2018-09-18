import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomers():Customer[]{
    return [
      {id: 1, firstName: 'Mary', lastName: 'Taylor', age: 24},
      {id: 2, firstName: 'Peter', lastName: 'Smith', age: 18},
      {id: 3, firstName: 'Lauren', lastName: 'Taylor', age: 31}
    ];
  }
}
