import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public userid: number = 1;
  public username: string = 'hafizshamsul';
}
