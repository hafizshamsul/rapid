import { Component, OnInit, ViewChild } from '@angular/core';
let RecordRTC = require('recordrtc/RecordRTC');
//let RecordRTCs = require('../../../WebSocketsVideoBroadcast/node_modules/socket.io-client/dist/socket.io');
import { Socket } from 'ngx-socket-io';
import { NavController } from '@ionic/angular';
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
    private io: Socket
    ) { }

  @ViewChild('video', {static: false}) video: any;

    //socket: any;
    private stream: MediaStream;

  ngOnInit() {    
    
  }

  start(){
    const peerConnections = {};
    const config = {
      iceServers: [
        {
          urls: ["stun:stun.l.google.com:19302"]
        }
      ]
    };

    const socket = this.io.connect();
    const video = document.querySelector("video");

    // Media contrains
    const constraints = {
      video: { facingMode: "user" },
    // Uncomment to enable audio
    //   audio: true,
    };

    const mediaDevices = navigator.mediaDevices as any;

    mediaDevices
      .getDisplayMedia(constraints)
      .then(stream => {
        video.srcObject = stream;
        socket.emit("broadcaster");
      })
      .catch(error => console.error(error));

    socket.on("answer", (id, description) => {
      peerConnections[id].setRemoteDescription(description);
    });

    socket.on("watcher", id => {
      const peerConnection = new RTCPeerConnection(config);
      peerConnections[id] = peerConnection;

      let stream = video.srcObject;
      (<MediaStream>stream).getTracks().forEach(track => peerConnection.addTrack(track, (<MediaStream>stream)));

      peerConnection
        .createOffer()
        .then(sdp => peerConnection.setLocalDescription(sdp))
        .then(() => {
          socket.emit("offer", id, peerConnection.localDescription);
        });

      peerConnection.onicecandidate = event => {
        if (event.candidate) {
          socket.emit("candidate", id, event.candidate);
        }
      };

    });

    socket.on("candidate", (id, candidate) => {
      peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
    });

    socket.on("disconnectPeer", id => {
      peerConnections[id] && peerConnections[id].close();
      delete peerConnections[id];
      console.log(video.srcObject);
    });

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
    
   
  
   toHome(){
    this.navCtrl.navigateRoot(['r/home/']);
  }

  toSubmitpost(){
    this.navCtrl.navigateRoot(['r/submitpost/']);
  }

  toFolder(){
    this.navCtrl.navigateRoot(['r/'+this.global.username+'/']);
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
