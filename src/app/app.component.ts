import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../app/customer.service';
import {Customer} from '../app/customer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ng6service';

  customers : Customer[];
  // inject the customer service.

  constructor(private customerService : CustomerService)
  {

  }
  
  ngOnInit(){
   this.customers =  this.customerService.getCustomers();
  }
}

