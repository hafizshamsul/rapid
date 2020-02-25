import { Component } from '@angular/core';
import { GlobalService } from "../..//providers/global.service";


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  r_username:string = this.global.username;

  constructor(public global: GlobalService) {
  }

  
}
