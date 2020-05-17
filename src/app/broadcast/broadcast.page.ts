import { Component, OnInit, ViewChild } from '@angular/core';
let RecordRTC = require('recordrtc/RecordRTC');
//let RecordRTCs = require('../../../WebSocketsVideoBroadcast/node_modules/socket.io-client/dist/socket.io');
import { Socket } from 'ngx-socket-io';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from "../..//providers/global.service";

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.page.html',
  styleUrls: ['./broadcast.page.scss'],
})
export class BroadcastPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public global: GlobalService,
    private io: Socket,
    private router: Router,
    private actRoute: ActivatedRoute
    ) {
      if(sessionStorage.getItem('users-role') == 'Admin'){
        this.router.navigate(['/r/admin_user']);
      }
    }

  @ViewChild('video', {static: false}) video: any;

    //socket: any;
    private stream: MediaStream;

  ngOnInit() {    
    console.log('ngoninit broadcast');
    //this.start();
  }

  ngOnDestroy(){
    console.log('ngondestroy broadcast');
  }

  start(){
    const socket = this.io.connect();
    const video = document.querySelector("video");
    
    const peerConnections = {};
    const config = {
      iceServers: [
        {
          urls: ["stun:stun.l.google.com:19302", "turn:13.250.13.83:3478?transport=udp"], "username": "YzYNCouZM1mhqhmseWk6",
          "credential": "YzYNCouZM1mhqhmseWk6"
        },
      ]
    };
    const constraints = {
      video:true,
      audio:true
      //video: { facingMode: "user" },// Uncomment to enable audio//   audio: true,
    };

    const mediaDevices = navigator.mediaDevices as any;
    mediaDevices.getDisplayMedia(constraints).then(stream => {
        video.srcObject = stream;
        socket.emit("broadcaster");
    }).catch(error => console.error(error));

    socket.on("watcher", id => {
      const peerConnection = new RTCPeerConnection(config);
      peerConnections[id] = peerConnection;

      

      let stream = video.srcObject;
      (<MediaStream>stream).getTracks().forEach(track => peerConnection.addTrack(track, (<MediaStream>stream)));

      var isNegotiating = false;  // Workaround for Chrome: skip nested negotiations
      peerConnection.onnegotiationneeded = async e =>{
        if (isNegotiating) {
          console.log("SKIP nested negotiations");
          return;
        }
        isNegotiating = true;
        try {
          peerConnection.createOffer().then(sdp => peerConnection.setLocalDescription(sdp))
          .then(() => {
            //SOCKET
            socket.emit("offer", id, peerConnection.localDescription);
          })
          .catch(e => console.error(e));
        }
        catch(e){
          console.log(e);
        }
      } 

      peerConnection.onsignalingstatechange = (e) => {  // Workaround for Chrome: skip nested negotiations
        isNegotiating = (peerConnection.signalingState != "stable");
      }

      peerConnection.onicecandidate = event => {
        if (event.candidate) {
          socket.emit("candidate", id, event.candidate);
        }
      };

    });

    //answer
    socket.on("answer", (id, description) => {
      peerConnections[id].setRemoteDescription(description);
    });

    //candidate
    socket.on("candidate", (id, candidate) => {
      peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
    });

    //disconnect peer
    socket.on("disconnectPeer", id => {
      peerConnections[id] && peerConnections[id].close();
      delete peerConnections[id];
    });

    //close socket
    window.onunload = window.onbeforeunload = () => {
      socket.close();
    };

  }

  
/*
private stream: MediaStream;
    private recordRTC: any;
    
  
    //OUTSIDE METHOD
    startRecording() {
      let mediaConstraints = {
        audio: true,
        video: {
          width: { ideal: 3840 },
          height: { ideal: 2160 }
        }
      };
      
      const mediaDevices = navigator.mediaDevices as any;
  
      mediaDevices
        .getDisplayMedia(mediaConstraints)
        .then(this.successCallback.bind(this), this.errorCallback.bind(this)
      );
    }
  

    

    successCallback(stream: MediaStream) {
      console.log(stream);
      var options = {
            mimeType: 'video/webm\;codecs=h264', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
            video: {
              width: { ideal: 3840 },
              height: { ideal: 2160 }
            },
            
            //audioBitsPerSecond: 128000,
            //videoBitsPerSecond: 128000,
            bitsPerSecond: 1000000 // if this line is provided, skip above two
          };
          this.stream = stream;
          this.recordRTC = RecordRTC(stream, options);
          this.recordRTC.startRecording();
          let videos: HTMLVideoElement = this.video.nativeElement;
          //video.src = window.URL.createObjectURL(stream);
          videos.srcObject = stream;
          
          //console.log(stream);
          this.socket.emit("broadcaster");
          console.log("doneee");
          this.toggleControls();
    }
  
    errorCallback() {
      //handle error here
    }

    toggleControls() {
      let video: HTMLVideoElement = this.video.nativeElement;
      video.muted = !video.muted;
      video.controls = !video.controls;
      video.autoplay = !video.autoplay;
    }

    */
    
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
