import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GlobalService } from "/xampp/htdocs/rapidkl/rapid/src/providers/global.service";
import { CurrentNavService } from "/xampp/htdocs/rapidkl/rapid/src/providers/currentnav.service";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    public navCtrl: NavController,
    public global: GlobalService,
    public currentnav: CurrentNavService,
    private router: Router,
  ) { }

    
  currentusername:string;

  ngOnInit() {
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