import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { PostProvider } from '../../providers/post-provider';
import { GlobalService } from "../..//providers/global.service";
import { CurrentNavService } from "../..//providers/currentnav.service";
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-stream',
  templateUrl: './stream.page.html',
  styleUrls: ['./stream.page.scss'],
})
export class StreamPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public global: GlobalService,
    public currentnav: CurrentNavService,
    private postprovider: PostProvider, private router: Router, private actRoute: ActivatedRoute) {
      if(sessionStorage.getItem('users-role') == 'Admin'){
        this.router.navigate(['/r/admin_user']);
      }
    }

  ngOnInit() {
  }

  login(){
    //local-based authentication
    sessionStorage.setItem('users-id', 'null');
    sessionStorage.setItem('users-username', 'null');
    sessionStorage.setItem('users-passwordhash', 'null');
    sessionStorage.setItem('users-displayname', 'null');
    sessionStorage.setItem('users-role', 'null');
    sessionStorage.setItem('users-dateregistered', 'null');
    sessionStorage.setItem('users-status', 'null');

    console.log(sessionStorage.getItem('users-id'));
    console.log(sessionStorage.getItem('users-username'));
    console.log(sessionStorage.getItem('users-passwordhash'));
    console.log(sessionStorage.getItem('users-displayname'));
    console.log(sessionStorage.getItem('users-role'));
    console.log(sessionStorage.getItem('users-dateregistered'));
    console.log(sessionStorage.getItem('users-status'));

    this.router.navigate(['/loginform']);
  }

  toHome(){
    this.navCtrl.navigateRoot(['r/home/']);
  }

  toSubmitpost(){
    this.navCtrl.navigateRoot(['r/submitpost/']);
  }

  toFolder(){
    this.navCtrl.navigateRoot(['r/'+sessionStorage.getItem('users-username')+'/']);
  }

  toBookmark(){
    this.navCtrl.navigateRoot(['r/bookmark/']);
  }

  toActivity(){
    this.navCtrl.navigateRoot(['r/activity/']);
  }

  toAdmin_user(){
    this.navCtrl.navigateRoot(['admin_user/']);
  }

  toAdmin_post(){
    this.navCtrl.navigateRoot(['r/admin_post/']);
  }

  toAdmin_doc(){
    this.navCtrl.navigateRoot(['r/admin_doc/']);
  }

  toStream(){
    this.navCtrl.navigateRoot(['stream/']);
  }

  toMessenger(){
    this.navCtrl.navigateRoot(['messenger/']);
  }

}
