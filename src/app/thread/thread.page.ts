import { Component, OnInit, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
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
  selector: 'app-thread',
  templateUrl: 'thread.page.html',
  styleUrls: ['thread.page.scss'],
})


export class ThreadPage {
  r_thread: string;

  constructor(
    private ref: ChangeDetectorRef,
    public navCtrl: NavController,
    public route: AppRoutingModule,
    public global: GlobalService, 
    private actRoute: ActivatedRoute,
    public alertCtrl: AlertController, private postprovider: PostProvider, private router: Router, private _IMAGES: ImagesProvider, private http: HttpClient) {
    
      
    }
    //commentid: number;
    //replyto: number;

    listo:any[]=[
      {
        commentid: 1,
        title: '1',
        textcmt: 'satu',
        users_id: 1,
        username: 'hafizshamsul',
        dateuploaded: 'days ago',
        vote: 213,
        replyto: null
      },
      {
        commentid: 2,
        title: '2',
        textcmt: 'dua',
        users_id: 1,
        username: 'hafizshamsul',
        dateuploaded: 'days ago',
        vote: 213,
        replyto: 1
      },
      {
        commentid: 3,
        title: '3',
        textcmt: 'tiga',
        users_id: 1,
        username: 'hafizshamsul',
        dateuploaded: 'days ago',
        vote: 213,
        replyto: 1
      },
      {
        commentid: 4,
        title: '4',
        textcmt: 'empat',
        users_id: 1,
        username: 'hafizshamsul',
        dateuploaded: 'days ago',
        vote: 213,
        replyto: 2
      }
    ];

    

    


 list:any = [
        {id:1, title:"1", parent:null,
            children:[
                    {id:2, title:"2", parent:1, children:[]}
                 ],
                }
    ];
    
  current_users: any[];
  comments: any[];

  treeify(listo, idAttr, parentAttr, childrenAttr) {
    if (!idAttr) idAttr = 'commentid';
    if (!parentAttr) parentAttr = 'replyto';

    if (!childrenAttr) childrenAttr = 'children';

    var treeList = [];
    var lookup = {};
    listo.forEach(function(obj) {
        lookup[obj[idAttr]] = obj;
        obj[childrenAttr] = [];
    });
    listo.forEach(function(obj) {
        if (obj[parentAttr] != null) {
            lookup[obj[parentAttr]][childrenAttr].push(obj);
        } else {
            treeList.push(obj);
        }
      });
      return treeList;
  };


listos:any[] = this.treeify(this.listo, 'commentid', 'replyto', 'children');
listoso:any[]; 

  

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
  thread: number = 7;

  tagcommentid: number;
  comment_id: number;
  tag_id: number;
  tag_tagname: string;

  pass(index){
    console.log(index);
  }


  ngOnInit() {
    this.r_thread = this.actRoute.snapshot.paramMap.get('r_thread');

    console.log(JSON.stringify(this.list));
    console.log(JSON.stringify(this.listos));

    this.actRoute.params.subscribe((data: any) =>{
      this.commentid = data.commentid;
      this.users_id = data.users_id;
      this.title = data.title;
      this.textcmt = data.textcmt;
      this.replyto = data.replyto;
      this.username = data.username;
      this.dateuploaded = data.dateuploaded;
      this.vote = data.vote;
      this.thread = data.thread;

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
    this.loadThread(this.r_thread);
    this.loadTagComment(1);
  
  }

  login(){
    this.router.navigate(['/loginform']);
  }



  loadThread(thread){
    return new Promise(resolve => {
      let body = {
        action : 'getthread',
        thread : thread
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        
        for(let comment of data.result){
          this.comments.push(comment);
        }
        this.listoso = this.treeify(this.comments, 'commentid', 'replyto', 'children');
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
