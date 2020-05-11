import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public userid: number = 1;
  public username: string = 'hafizshamsul';
  public password: string = 'lolol';

  public popup:boolean = false;

  ngOnInit(){
    localStorage.setItem('username', this.username);
  }
  
  getusername(){
    const username = localStorage.getItem('username');

    return username;
  }
  
}
