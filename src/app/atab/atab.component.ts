import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-atab',
  templateUrl: './atab.component.html',
  styleUrls: ['./atab.component.scss'],
})
export class AtabComponent implements OnInit {

  @Input() currpage: string;
  @Input() currsession: string;

  constructor(
    public navCtrl: NavController,
  )
  {
   
  }

  items:any = [
    {
      "name": "room",
      "label": "Rooms",
      "icon": "bx bx-home-circle",
      "link": "toHome()"
    },
    {
      "name": "home",
      "label": "Discussions",
      "icon": "bx bx-message-square-dots",
      "link": "toHome()"
    },
    {
      "name": "folder",
      "label": "Documents",
      "icon": "bx bx-folder",
      "link": "toSubmitpostS()"
    },
    {
      "name": "bookmark",
      "label": "Bookmarks",
      "icon": "bx bx-bookmark",
      "link": "toSubmitpostS()"
    },
    {
      "name": "activity",
      "label": "Projects",
      "icon": "bx bx-list-plus",
      "link": "toSubmitpostS()"
    },
    /*
    {
      "name": "messenger",
      "label": "Messages",
      "icon": "bx bx-envelope",
      "link": "toSubmitpostS()"
    },*/
    {
      "name": "submitpost",
      "label": "Add Discussion",
      "icon": "bx bx-add-to-queue",
      "link": "toSubmitpostS()"
    },
    /*
    {
      "name": "broadcast",
      "label": "Broadcast",
      "icon": "bx bx-bullseye",
      "link": "toSubmitpostS()"
    }*/
  ]


  ngOnInit() {
    console.log(this.currpage);
    console.log(document.getElementById);
    
  }

  link(name, currsession){
    if(name=='room'){
      this.navCtrl.navigateRoot(['r/room/']);
    }
    else if(name=='home'){
      this.navCtrl.navigateRoot(['r/home/']);
    }
    else if(name=='submitpost'){
      this.navCtrl.navigateRoot(['r/submitpost/']);
    }
    else if(name=='folder'){
      this.navCtrl.navigateRoot(['r/'+this.currsession+'/']);
    }
    else if(name=='bookmark'){
      this.navCtrl.navigateRoot(['r/bookmark/']);
    }
    else if(name=='activity'){
      this.navCtrl.navigateRoot(['r/activity/']);
    }
    else if(name=='messenger'){
      this.navCtrl.navigateRoot(['messenger/']);
    }
    else if(name=='broadcast'){
      this.navCtrl.navigateRoot(['broadcast/']);
    }
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

  toBroadcast(){
    this.navCtrl.navigateRoot(['broadcast/']);
  }

  toWatch(){
    this.navCtrl.navigateRoot(['watch/']);
  }

  toMessenger(){
    this.navCtrl.navigateRoot(['messenger/']);
  }

    
}
