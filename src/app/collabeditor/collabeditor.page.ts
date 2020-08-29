import { Component, OnInit, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-collabeditor',
  templateUrl: './collabeditor.page.html',
  styleUrls: ['./collabeditor.page.scss'],
})
export class CollabeditorPage implements OnInit {

  constructor(
    private io: Socket
  ) { }

  //@ViewChild('editor', {static: false}) editor: any;

  ngOnInit() {
    //var socket = io('http://localhost:3000');
    var socket = this.io.connect();
    //const l = console.log
    
    const editor = this.getEl("editor");
    
    editor.addEventListener("keyup", (evt) => {
        const text = (<HTMLInputElement>editor).value;
        socket.send(text);
    });

    socket.on('message', (data) => {
      (<HTMLInputElement>editor).value = data;
    });
  }

  getEl(id) {
    return document.getElementById(id);
  }

}
