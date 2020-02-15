import { Component, OnInit } from '@angular/core';
import { GlobalService } from "../..//providers/global.service";
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.page.html',
  styleUrls: ['./loginform.page.scss'],
})
export class LoginformPage implements OnInit {

  constructor(public global: GlobalService, private postprovider: PostProvider, private router: Router, private actRoute: ActivatedRoute) { }

  users:any[];
  id:string;
  username:string;
  password:string;
  displayname:string;

  logusername:string;
  logpassword:string;

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.id = data.id;
      this.username = data.username;
      this.password = data.password;
      this.displayname = data.displayname;
      console.log(data);
    });
  }

  ionViewWillEnter(){
    this.users = [];
  
  }

  login(){
    this.router.navigate(['/login']);
  }

  registerform(){
    this.router.navigate(['/registerform']);
  }

  folder(){
    //this.global.userid = 2;
    //this.router.navigate(['/'+'hafizshamsul']);
    
    console.log(this.logusername);
    console.log(this.logpassword);
    this.getUser();
    

    //this.router.navigate(['/home']);

  }

  getUser(){
    return new Promise(resolve => {
      let body = {
        action : 'getuser',
        username: this.logusername,
        password: this.logpassword
      };

      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let user of data.result){
          this.users.push(user);
        }
        
        if(this.users[0].username==null && this.users[0].password==null){
          console.log('user does not exist');
          this.users=[];
        }
        else{
          console.log('proceed to home');
          this.users=[];
        }
        
        
        resolve(true);
      }
      ,
      (error) => {
        console.log('error');
      }
      );
    });
  }

}
