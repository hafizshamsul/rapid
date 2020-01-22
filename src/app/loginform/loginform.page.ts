import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.page.html',
  styleUrls: ['./loginform.page.scss'],
})
export class LoginformPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/login']);
  }
}
