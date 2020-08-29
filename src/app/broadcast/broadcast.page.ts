import { Component, OnInit, ViewChild } from '@angular/core';
let RecordRTC = require('recordrtc/RecordRTC');
//let RecordRTCs = require('../../../WebSocketsVideoBroadcast/node_modules/socket.io-client/dist/socket.io');
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.page.html',
  styleUrls: ['./broadcast.page.scss'],
})
export class BroadcastPage implements OnInit {

  constructor(
    private io: Socket
    ) { }

  @ViewChild('video', {static: false}) video: any;

    //socket: any;
    private stream: MediaStream;

  ngOnInit() {
    /*
    //1
    const peerConnections = {};
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

    // Media contrains
    const constraints = {
      video: { facingMode: "user" }
      // Uncomment to enable audio
      // audio: true,
    };

    //2
    this.startRecording();


    //3
    this.socket.on("watcher", id => {
      const peerConnection = new RTCPeerConnection(config);
      peerConnections[id] = peerConnection;

      let videos: HTMLVideoElement = this.video.nativeElement;
      
      let stream = videos.srcObject;
      
      
      console.log((<MediaStream>stream).getTracks());
      
      (<MediaStream>stream).getTracks().forEach(track => {
        peerConnection.addTrack(track, (<MediaStream>stream))
      });
        
      

      peerConnection.onicecandidate = event => {
        if (event.candidate) {
          this.socket.emit("candidate", id, event.candidate);
          console.log("success");
        }
      };

        peerConnection
          .createOffer()
          .then(sdp => peerConnection.setLocalDescription(sdp))
          .then(() => {
            this.socket.emit("offer", id, peerConnection.localDescription);
          });
      });


      this.socket.on("answer", (id, description) => {
        peerConnections[id].setRemoteDescription(description);
      });

      this.socket.on("candidate", (id, candidate) => {
        peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
      });



      //4
      this.socket.on("disconnectPeer", id => {
        peerConnections[id].close();
        delete peerConnections[id];
      });


      //5
      window.onunload = window.onbeforeunload = () => {
        this.socket.close();
      };
      */

     const peerConnections = {};
     const config = {
       iceServers: [
         {
           urls: ["stun:stun.l.google.com:19302"]
         }
       ]
     };
     
    let socket = this.io.connect();
     
    socket.on("watcher", id => {
      const peerConnection = new RTCPeerConnection(config);
      peerConnections[id] = peerConnection;
    
      this.stream = videoElement.srcObject as any;
      this.stream.getTracks().forEach(track => peerConnection.addTrack(track, this.stream));
    
      console.log(this.stream);
     
      peerConnection
        .createOffer()
        .then(sdp => peerConnection.setLocalDescription(sdp))
        .then(() => {
          socket.emit("offer", id, peerConnection.localDescription);
        });

      socket.on("answer", (id, description) => {
        peerConnections[id].setRemoteDescription(description);
      });

      peerConnection.onicecandidate = event => {
        if (event.candidate) {
          socket.emit("candidate", id, event.candidate);
        }
      };

      socket.on("candidate", (id, candidate) => {
        peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
      });
      
      console.log(peerConnection);

      
     
    });
     
     
     
     socket.on("disconnectPeer", id => {
       peerConnections[id].close();
       delete peerConnections[id];
     });
     
     window.onunload = window.onbeforeunload = () => {
       socket.close();
     };
     
     // Get camera and microphone
     const videoElement = document.querySelector("video");
     const audioSelect = document.querySelector("select#audioSource");
     const videoSelect = document.querySelector("select#videoSource");
     
     /*audioSelect.onchange = getStream;
     videoSelect.onchange = getStream;*/
     
     getStream()
       .then(getDevices)
       .then(gotDevices);
     
     function getDevices() {
       return navigator.mediaDevices.enumerateDevices();
     }
     
     function gotDevices(deviceInfos) {
       /*window.deviceInfos = deviceInfos;
       for (const deviceInfo of deviceInfos) {
         const option = document.createElement("option");
         option.value = deviceInfo.deviceId;
         if (deviceInfo.kind === "audioinput") {
           option.text = deviceInfo.label || `Microphone ${audioSelect.length + 1}`;
           audioSelect.appendChild(option);
         } else if (deviceInfo.kind === "videoinput") {
           option.text = deviceInfo.label || `Camera ${videoSelect.length + 1}`;
           videoSelect.appendChild(option);
         }
       }*/
     }
     
     function getStream() {
       /*if (this.stream) {
         this.stream.getTracks().forEach(track => {
           track.stop();
         });
       }*/
       /*const audioSource = audioSelect.value;
       const videoSource = videoSelect.value;
       const constraints = {
         audio: { deviceId: audioSource ? { exact: audioSource } : undefined },
         video: { deviceId: videoSource ? { exact: videoSource } : undefined }
       };*/
       const mediaDevices = navigator.mediaDevices as any;

       const constraints = {};

       return mediaDevices
         .getDisplayMedia(constraints)
         .then(gotStream)
         .catch(handleError);
     }
     
     function gotStream(stream) {
       /*window.stream = stream;
       audioSelect.selectedIndex = [...audioSelect.options].findIndex(
         option => option.text === stream.getAudioTracks()[0].label
       );
       videoSelect.selectedIndex = [...videoSelect.options].findIndex(
         option => option.text === stream.getVideoTracks()[0].label
       );*/
       videoElement.srcObject = stream;
       socket.emit("broadcaster");
     }
     
     function handleError(error) {
       console.error("Error: ", error);
     }

     
     

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
    
   
  

   

}
