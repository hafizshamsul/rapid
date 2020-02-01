import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { GlobalService } from "../..//providers/global.service";

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.page.html',
  styleUrls: ['./loginform.page.scss'],
})
export class LoginformPage implements OnInit {

  constructor(public global: GlobalService, private router: Router) {}

  ngOnInit() {
  }

  

  login(){
    this.router.navigate(['/login']);
  }

  registerform(){
    this.router.navigate(['/registerform']);
  }

  folder(){
    this.global.userid = 2;
    this.router.navigate(['/folder']);
  }
}
