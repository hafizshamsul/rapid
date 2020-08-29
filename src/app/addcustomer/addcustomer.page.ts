import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from "../..//providers/global.service";

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {
  name_customer: string = "";
  desc_customer: string = "";
  id: number;

  current_userid: number;
  current_username: string;
  current_passwordhash: string;
  current_displayname: string;

  folderid: number;
  foldername: string;
  description: string;
  users_id: number;

  constructor(public global: GlobalService, private postprovider: PostProvider, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.current_userid = data.current_id;
      this.current_username = data.current_username;
      this.current_passwordhash = data.current_passwordhash;
      this.current_displayname = data.current_displayname;
      console.log(data);
    });
    
    this.actRoute.params.subscribe((data: any) =>{
      this.id = data.id;
      this.name_customer = data.name;
      this.desc_customer = data.desc;
      console.log(data);
    });

    this.actRoute.params.subscribe((data: any) =>{
      this.folderid = data.folderid;
      this.foldername = data.foldername;
      this.description = data.description;
      this.users_id = data.users_id;
      console.log(data);
    });
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

  createdFolder(){
    return new Promise(resolve => {
      let body = {
        action: 'addfolder',
        foldername: this.foldername,
        description: this.description,
        users_id: this.global.userid,
      };

      this.postprovider.postData(body, 'process-api.php').subscribe(data=>{
        this.router.navigate(['/'+this.global.username]);
        console.log('OK');
      });
    });
  }

  updatedProcess(){
    return new Promise(resolve => {
      let body = {
        action: 'update',
        customer_id: this.id,
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
