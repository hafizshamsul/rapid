import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentNavService {

  constructor() { }

  public currentpage: string;
}
