import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.page.html',
  styleUrls: ['./registerform.page.scss'],
})
export class RegisterformPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/login']);
  }

  loginform(){
    this.router.navigate(['/loginform']);
  }

}
