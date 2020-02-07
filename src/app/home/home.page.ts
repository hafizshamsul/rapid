import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ImagesProvider } from '../../providers/images/images';
import { HttpClient } from "@angular/common/http";
import { GlobalService } from "../..//providers/global.service";
import { IonicPage, Item } from 'ionic-angular';
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
  tagcomments: any[];

  done: boolean =true;

  commentid: number;
  title: string;
  textcmt: string;
  users_id: number;
  replyto: number;
  username: string;
  dateuploaded: string;
  vote: number;

  tagcommentid: number;
  comment_id: number;
  tag_id: number;
  tag_tagname: string;

  pass(index){
    console.log(index);
  }


  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.commentid = data.commentid;
      this.users_id = data.users_id;
      this.title = data.title;
      this.textcmt = data.textcmt;
      this.replyto = data.replyto;
      this.username = data.username;
      this.dateuploaded = data.dateuploaded;
      this.vote = data.vote;

      console.log(data);
    });

    this.actRoute.params.subscribe((data: any) =>{
      this.tagcommentid = data.tagcommentid;
      this.comment_id = data.comment_id;
      this.tag_id = data.tag_id;
      this.tag_tagname = data.tag_tagname;

      console.log(data);
    });
  }

  ionViewWillEnter(){
    this.comments = [];
    this.tagcomments = [];
    this.loadPost();
    this.loadTagComment(1);
  
  }

  login(){
    this.router.navigate(['/loginform']);
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

  loadTagComment(index){
    return new Promise(resolve => {
      let body = {
        action : 'gettagcomment',
        index : index
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let tagcomment of data.result){
          //if(tagcomment.comment_id == 10){
            this.tagcomments.push(tagcomment);
          //}
        }
        resolve(true);
      });
    });
  }
  
}
