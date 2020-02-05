import { Component, OnInit, ViewChild } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ImagesProvider } from '../../providers/images/images';
import { HttpClient } from "@angular/common/http";
import { GlobalService } from "../..//providers/global.service";
import { IonicPage } from 'ionic-angular';
import {AppRoutingModule} from '../app-routing.module';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  constructor(
    public navCtrl: NavController,
    public route: AppRoutingModule,
    public global: GlobalService, 
    private actRoute: ActivatedRoute,
    public alertCtrl: AlertController, private postprovider: PostProvider, private router: Router, private _IMAGES: ImagesProvider, private http: HttpClient) {
      
      
    }

  current_users: any[];
  comments: any[];
  replies: any[];

  commentid: number;
  title: string;
  textcmt: string;
  users_id: number;
  replyto: number;
  username: string;

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.commentid = data.commentid;
      this.users_id = data.users_id;
      this.title = data.title;
      this.textcmt = data.textcmt;
      this.replyto = data.replyto;
      this.username = data.username;

      console.log(data);
    });
  }

  ionViewWillEnter(){
    this.comments = [];

    this.loadPost();
  }

  loadPost(){
    return new Promise(resolve => {
      let body = {
        action : 'getpost',
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let comment of data.result){
          this.comments.push(comment);
        }
        resolve(true);
      });
    });
  }

  loadReply(){
    return new Promise(resolve => {
      let body = {
        action : 'getreply',
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let reply of data.result){
          this.replies.push(reply);
        }
        resolve(true);
      });
    });
  }
}
