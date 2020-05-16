import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GlobalService } from "../providers/global.service";
import { CurrentNavService } from "../providers/currentnav.service";
import { Config } from '@ionic/angular';

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
    private config: Config,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    //private alertController: AlertController
  ) {
    this.initializeApp();
    console.log('constructor app');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  currentusername:string;

  ionViewWillEnter(){
    console.log('ionViewWillEnter app');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter app');
  }
  ionViewWillLeave(){
    console.log('ionViewWillLeave app');
  }
  ionViewDidLeave(){
    console.log('ionViewDidLeave app');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy app');
  }


  ngOnInit(){
    if(this.platform.is("desktop")) {
      //this.config.set('navAnimation', null);
      this.config.set('animated', false);
    }
    
    //console.log(this.viewCtrl.instance);
    //this.navCtrl.
    //this.currentpage = this.currentnav.currentpage;
    console.log('ngOnInit app');
    //console.log('this is'+this.currentnav.currentpage);
    console.log(window.location.href);

    this.currentusername = this.global.username;

    if(window.location.href.includes('submitpost')){
      this.currentpage = 'submitpost';
    }
    else if(window.location.href.includes(this.global.username)){
      this.currentpage = 'folder';
    }
    else if(window.location.href.includes('messenger')){
      this.currentpage = 'messenger';
    }
    else{
      this.currentpage = 'home';
    }
  }

  toHome(){
    this.currentpage = 'home';
    //console.log(this.currentpage);
    //this.router.navigate(['r/home/']);
    this.navCtrl.navigateRoot(['r/home/']);
  }

  toSubmitpost(){
    this.currentpage = 'submitpost';
    //console.log(this.currentpage);
    //this.router.navigate(['r/submitpost/']);
    this.navCtrl.navigateRoot(['r/submitpost/']);
  }

  toFolder(){
    this.currentpage = 'folder';
    //console.log(this.currentpage);
    //this.router.navigate(['r/'+this.global.username+'/']);
    this.navCtrl.navigateRoot(['r/'+this.global.username+'/']);
    //console.log(this.global.username);
  }

  toMessenger(){
    this.currentpage = 'messenger';
    //console.log(this.currentpage);
    //this.router.navigate(['r/'+this.global.username+'/']);
    this.navCtrl.navigateRoot(['messenger/']);
    //console.log(this.global.username);
  }


  currentpage:string;


}
