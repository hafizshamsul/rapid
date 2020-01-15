import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  customers: any = [];
  limit: number = 10;
  start: number = 0;

  constructor(private postprovider: PostProvider, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.customers = [];
    this.start = 0;
    this.loadCustomer();
  }

  addCustomer(){
    this.router.navigate(['/addcustomer']);
  }

  loadCustomer(){
    return new Promise(resolve => {
      let body = {
        action : 'getdata',
        limit : this.limit,
        start : this.start,
      };

      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let customer of data.result){
          this.customers.push(customer);
        }
        resolve(true);
      });
    });
  }
}
