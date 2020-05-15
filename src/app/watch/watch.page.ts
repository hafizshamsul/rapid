import { Component, OnInit, ViewChild } from '@angular/core';
let RecordRTC = require('recordrtc/RecordRTC');
import { Socket } from 'ngx-socket-io';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from "../..//providers/global.service";


@Component({
  selector: 'app-watch',
  templateUrl: './watch.page.html',
  styleUrls: ['./watch.page.scss'],
})
export class WatchPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public global: GlobalService,
    private router: Router,
    private io: Socket
  ) {
    if(sessionStorage.getItem('users-role') == 'Admin'){
      this.router.navigate(['/r/admin_user']);
    }
  }

  @ViewChild('video', {static: false}) video: any;

  socket: any;

  /*successCallback(){
    console.log('successcallback')
  }

  errorCallback() {
    //handle error here
    console.log('errorcallback')
  }*/

  ngOnInit() {
    this.watch();
  }

  watch(){
    let peerConnection;
    const config = {
      iceServers: [
        {
          urls: ["stun:stun.l.google.com:19302"
          ]
        }
      ]
    };

    const socket = this.io.connect();
    const video = document.querySelector("video");

    socket.on("offer", (id, description) => {
      peerConnection = new RTCPeerConnection(config);
      peerConnection
        .setRemoteDescription(description)
        .then(() => peerConnection.createAnswer())
        .then(sdp => peerConnection.setLocalDescription(sdp))
        .then(() => {
          socket.emit("answer", id, peerConnection.localDescription);
        })
        //.then(this.successCallback, this.failureCallback)
        ;

      peerConnection.ontrack = event => {
        video.srcObject = event.streams[0];
        console.log(event.streams[0]);
      };
      peerConnection.onicecandidate = event => {
        if (event.candidate) {
          socket.emit("candidate", id, event.candidate);
        }
      };
    });

    socket.on("candidate", (id, candidate) => {
      peerConnection
        .addIceCandidate(new RTCIceCandidate(candidate))
        .catch(e => console.error(e));
    });

    socket.on("connect", () => {
      socket.emit("watcher");
    });

    socket.on("broadcaster", () => {
      socket.emit("watcher");
    });

    

    socket.on("disconnectPeer", () => {
      peerConnection.close();
    });

    window.onunload = window.onbeforeunload = () => {
      socket.close();
    };

  }

  successCallback(){

  }

  failureCallback(e){
    console.log(e);
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
