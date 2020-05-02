import { Component, OnInit, ViewChild } from '@angular/core';

let RecordRTC = require('recordrtc/RecordRTC');
//import * as RecordRTC from 'recordrtc';

@Component({
  selector: 'app-record-rtc',
  templateUrl: './record-rtc.page.html',
  styleUrls: ['./record-rtc.page.scss'],
})
export class RecordRtcPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private stream: MediaStream;
  private recordRTC: any;

  @ViewChild('video', {static: false}) video: any;

  ionViewWillEnter(){
    // set the initial state of the video
    let video:HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  
  errorCallback() {
    //handle error here
  }


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
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
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
        let video: HTMLVideoElement = this.video.nativeElement;
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        this.toggleControls();
  }

      toggleControls() {
        let video: HTMLVideoElement = this.video.nativeElement;
        video.muted = !video.muted;
        video.controls = !video.controls;
        video.autoplay = !video.autoplay;
      }

      stopRecording() {
        let recordRTC = this.recordRTC;
        recordRTC.stopRecording(this.processVideo.bind(this));
        let stream = this.stream;
        stream.getAudioTracks().forEach(track => track.stop());
        stream.getVideoTracks().forEach(track => track.stop());
      }

      processVideo(audioVideoWebMURL) {
        
        let video: HTMLVideoElement = this.video.nativeElement;
        let recordRTC = this.recordRTC;
        video.src = audioVideoWebMURL;
        this.toggleControls();
        var recordedBlob = recordRTC.getBlob();
        recordRTC.getDataURL(function (dataURL) { });
      }

      download() {
        this.recordRTC.save('video.mp4');
      }
  
  
 

}
