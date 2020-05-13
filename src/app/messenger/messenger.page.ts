import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
import { GlobalService } from "../..//providers/global.service";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.page.html',
  styleUrls: ['./messenger.page.scss'],
})
export class MessengerPage implements OnInit {

  constructor(
    private socket: Socket,
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    public global: GlobalService,
    ) { }

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
