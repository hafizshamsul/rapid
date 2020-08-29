import { Component, OnInit } from '@angular/core';
import { FolderPage } from '../folder/folder.page';
import { FilePage } from '../file/file.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  tab1Root = FolderPage;
  tab2Root = FilePage;

  constructor() { }

  ngOnInit() {
  }

}
