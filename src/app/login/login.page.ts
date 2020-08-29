import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-Login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginform(){
    this.router.navigate(['/loginform']);
  }

  registerform(){
    this.router.navigate(['/registerform']);
  }

}
