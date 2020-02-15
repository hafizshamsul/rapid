import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from "../..//providers/global.service";

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.page.html',
  styleUrls: ['./registerform.page.scss'],
})
export class RegisterformPage implements OnInit {

  constructor(public global: GlobalService, private postprovider: PostProvider, private router: Router, private actRoute: ActivatedRoute) { }

  logusername:string;
  logpassword:string;

  users:any[];
  id:string;
  username:string;
  password:string;
  displayname:string;
  
  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.id = data.id;
      this.username = data.username;
      this.password = data.password;
      this.displayname = data.displayname;
      console.log(data);
    });
  }

  login(){
    this.router.navigate(['/login']);
  }

  loginform(){
    this.router.navigate(['/loginform']);
  }

  console(){
    console.log(this.username);
    console.log(this.password);
    this.getUser();
  }

  ionViewWillEnter(){
    this.users = [];
  
  }

  addUser(){
    return new Promise(resolve => {
      let body = {
        action: 'adduser',
        username: this.username,
        password: this.password,
      };

      this.postprovider.postData(body, 'process-api.php').subscribe(data=>{
        this.router.navigate(['/home']);
        console.log('OK');
      });
    });
  }

  getUser(){
    return new Promise(resolve => {
      let body = {
        action : 'getusername',
        username: this.logusername
      };

      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let user of data.result){
          this.users.push(user);
        }
        console.log(this.users.length);
        resolve(true);
      },
      (error) => {
        console.log('error');
      }
      );
    });
  }
}
