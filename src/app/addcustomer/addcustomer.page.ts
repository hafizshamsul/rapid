import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {
  name_customer: string = "";
  desc_customer: string = "";

  constructor(private postprovider: PostProvider, private router: Router) { }

  ngOnInit() {
  }

  createdProcess(){
    return new Promise(resolve => {
      let body = {
        action: 'add',
        name_customer: this.name_customer,
        desc_customer: this.desc_customer,
      };

      this.postprovider.postData(body, 'process-api.php').subscribe(data=>{
        this.router.navigate(['/customer']);
        console.log('OK');
      });
    });

    
  }
}
