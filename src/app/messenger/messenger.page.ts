import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
import { GlobalService } from "../..//providers/global.service";
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.page.html',
  styleUrls: ['./messenger.page.scss'],
})
export class MessengerPage implements OnInit {

  active = "messenger";
  session = sessionStorage.getItem('users-username');

  constructor(
    private socket: Socket,
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    public global: GlobalService,
    private router: Router,
    private actRoute: ActivatedRoute
    ) {
      if(sessionStorage.getItem('users-role') == 'Admin'){
        this.router.navigate(['/r/admin_user']);
      }
    }

  message = '';
  messages = [];
  currentUser = '';

  name:string = sessionStorage.getItem('users-username');
  

  ngOnInit() {
    let usernamest = sessionStorage.getItem('users-username');

    this.socket.connect;

    //let name = 'User-'+new Date().getTime();
    let name = usernamest;
    console.log(name);

    this.currentUser = name;

    this.socket.emit('set-name', name);

    this.socket.fromEvent('users-changed').subscribe(data => {
      console.log('got data: ', data);
      let user = data['user'];
      if(data['event'] == 'left'){
        this.showToast('User left: '+user);
      }
      else{
        this.showToast('User joined: '+user);
      }
    });

    this.socket.fromEvent('message').subscribe(message => {
      console.log('New: ', message);
      this.messages.push(message);
    });
    
  }

  sendMessage(){
    this.socket.emit('send-message', {text:this.message});
    this.message = '';
  }

  ionViewWillLeave(){
    this.socket.disconnect();
  }

  async showToast(msg){
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    //toast.present();
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
