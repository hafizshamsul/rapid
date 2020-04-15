import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GlobalService } from "../providers/global.service";
import { CurrentNavService } from "../providers/currentnav.service";

import { Platform,
//  AlertController
 } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TabsPage } from '../app/tabs/tabs.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage : any = TabsPage;

  constructor(
    public navCtrl: NavController,
    public global: GlobalService,
    public currentnav: CurrentNavService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    //private alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(){
    //console.log(this.viewCtrl.instance);
    //this.navCtrl.
    this.currentpage = this.currentnav.currentpage;
  }

  toHome(){
    this.currentpage = 'home';
    console.log(this.currentpage);
    this.router.navigate(['r/home/']);
  }

  toSubmitpost(){
    this.currentpage = 'submitpost';
    console.log(this.currentpage);
    this.router.navigate(['r/submitpost/']);
  }

  toFolder(){
    this.currentpage = 'folder';
    console.log(this.currentpage);
    this.router.navigate(['r/'+this.global.username+'/']);
    //console.log(this.global.username);
  }

  currentpage:string;


}
