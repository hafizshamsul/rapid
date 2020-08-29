import { Component, OnInit, ViewChild } from '@angular/core';
let RecordRTC = require('recordrtc/RecordRTC');
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.page.html',
  styleUrls: ['./watch.page.scss'],
})
export class WatchPage implements OnInit {

  constructor(
    private io: Socket
  ) { }

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
    /*
    //1
    let peerConnection;
    const config = {
      iceServers: [
        {
          urls: [
            "stun:stun.l.google.com:19302"
          ]
        }
      ]
    };

    this.socket = this.io.connect(
      //window.location.origin
    );
    //const video = document.querySelector("video");


    //2
    this.socket.on("offer", (id, description) => {
      peerConnection = new RTCPeerConnection(config);
      peerConnection
        .setRemoteDescription(description)
        .then(() => peerConnection.createAnswer())
        .then(sdp => peerConnection.setLocalDescription(sdp))
        .then(() => {
          this.socket.emit("answer", id, peerConnection.localDescription);
        })
        .then(this.successCallback, this.errorCallback);

      peerConnection.ontrack = event => {
        this.video.srcObject = event.streams[0];
        console.log(this.video.srcObject);
      };

      peerConnection.onicecandidate = event => {
        if (event.candidate) {
          this.socket.emit("candidate", id, event.candidate);
        }
      };
      
    });
    


    //3
    this.socket.on("candidate", (id, candidate) => {
      peerConnection
        .addIceCandidate(new RTCIceCandidate(candidate))
        .catch(e => console.error(e));
    });
    
    this.socket.on("connect", () => {
      this.socket.emit("watcher");
    });
    
    this.socket.on("broadcaster", () => {
      this.socket.emit("watcher");
    });
    
    this.socket.on("disconnectPeer", () => {
      peerConnection.close();
    });
    
    window.onunload = window.onbeforeunload = () => {
      this.socket.close();
    };
    */


    let peerConnection;
    const config = {
      iceServers: [
        {
          urls: ["stun:stun.l.google.com:19302"]
        }
      ]
    };

    const socket = this.io.connect();

    socket.on("offer", (id, description) => {
      peerConnection = new RTCPeerConnection(config);
      
      peerConnection.onicecandidate = event => {
        if (event.candidate) {
          socket.emit("candidate", id, event.candidate);
        }
      };
      
      peerConnection
        .setRemoteDescription(description)
        .then(() => peerConnection.createAnswer())
        .then(sdp => peerConnection.setLocalDescription(sdp))
        .then(() => {
          socket.emit("answer", id, peerConnection.localDescription);
        });
        
      peerConnection.ontrack = event => {
        this.video.srcObject = event.streams[0];
        console.log(event.streams[0]);
      };
      //let stream = videoElement.srcObject;
      
    
      
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


}
