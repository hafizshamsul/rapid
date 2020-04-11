import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ImagesProvider } from '../../providers/images/images';
import { HttpClient } from "@angular/common/http";
import { GlobalService } from "../..//providers/global.service";
import { MyNavService } from "../..//providers/mynavservice.service";
import { IonicPage, Item } from 'ionic-angular';
import {AppRoutingModule} from '../app-routing.module';
import { NavController } from '@ionic/angular';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage{

  transform(value: string): any {
    return value.replace(/<.*?>/g, ''); // replace tags
}

  constructor(
    public navCtrl: NavController,
    public route: AppRoutingModule,
    public global: GlobalService,
    public myNavService: MyNavService,
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
  //thread: number;

  tagcommentid: number;
  comment_id: number;
  tag_id: number;
  tag_tagname: string;

  pass(index){
    console.log(index);
  }

  ngOnInit() {
    //var htmlString= "<div id = 'ju'><h1>Hello World</h1><p>This is the text that we should get.</p><p>Our Code World &#169; 2017</p></div>";
    //console.log(htmlString);

    
    
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
      //this.thread = data.thread;

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

  toThread(r_thread){
    var selection = window.getSelection();
    console.log(selection);

    if(selection.toString().length === 0) {
      this.router.navigate(['r/home/'+r_thread+'/']);
    }
  }

  
  locs: any = {
    "id": 0,
    "title": "lel",
    "textcmt": "lel",
    "tags": ["1", "2"]
  }

  public async toEdit(commentid, title, textcmt){
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();

    this.locs.id = commentid;
    this.locs.title = title;
    this.locs.textcmt = textcmt;
    this.locs.tags = this.locs.tags;

    this.myNavService.myParam = {locs:this.locs};
    //await this.navCtrl.goForward('/map-page');
    await this.router.navigateByUrl('/editpost');

    this.router.navigate(['editpost/']);
    //this.router.navigateByUrl('/editpost', { state: { hello: 'world' } });
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
        this.listoso = this.treeify(this.comments, 'commentid', 'replyto', 'children');
        resolve(true);
      });
    });
  }

  deletePost(r_thread){
    return new Promise(resolve => {
      let body = {
        action : 'deletepost',
        commentid : r_thread
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

  async presentAlertMultipleButtons(r_thread) {
    let leh: number = r_thread;

    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();

    const alert = await this.alertCtrl.create({
      header: 'Delete Post',
      message: 'Are you sure you want to delete this post?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Delete',
          handler: (r_thread) => {
            this.deletePost(leh);
            console.log('Delete is clicked');
            window.location.href = window.location.href;
          }
        }
      ]
    });

    await alert.present();
  }
  
}
