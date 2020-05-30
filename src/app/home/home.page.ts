import { Component, OnInit, ViewChild, Input, HostListener } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ImagesProvider } from '../../providers/images/images';
import { HttpClient } from "@angular/common/http";
import { GlobalService } from "../..//providers/global.service";
import { MyNavService } from "../..//providers/mynavservice.service";
import { CurrentNavService } from "../..//providers/currentnav.service";
import { IonicPage, Item } from 'ionic-angular';
import {AppRoutingModule} from '../app-routing.module';
import { NavController } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

import { KeyboardInfo } from '@capacitor/core';
const { Keyboard } = Plugins;

declare var $: any;
import { AhelloComponent } from '../ahello/ahello.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})


export class HomePage{

  transform(value: string): any {
    return value.replace(/<.*?>/g, ''); // replace tags
}

  active = "home";
  session = sessionStorage.getItem('users-username');

  constructor(
    public navCtrl: NavController,
    public route: AppRoutingModule,
    public global: GlobalService,
    public myNavService: MyNavService,
    public currentnav: CurrentNavService,
    private actRoute: ActivatedRoute,
    public alertCtrl: AlertController, private postprovider: PostProvider, private router: Router, private _IMAGES: ImagesProvider, private http: HttpClient) {
      if(sessionStorage.getItem('users-role') == 'Admin'){
        this.router.navigate(['/r/admin_user']);
      }
      console.log(sessionStorage.getItem('users-username'));
    }




    //tagifyclone
    totalselected:number = 0;
    selectedtag:any = [];

    //category object array
    category:any = [
      {
        "id": 1,
        "subject": "science",
        "selected": false
      },
      {
        "id": 2,
        "subject": "maths",
        "selected": false
      },
      {
        "id": 3,
        "subject": "english",
        "selected": false
      }
    ];
    
    changeselection(itemid){
      for(let item of this.category){
        if(item.id == itemid){
          //select
          if(item.selected == false){
            this.totalselected++;
            item.selected = true;
          }
          //deselect
          else if(item.selected == true){
            this.totalselected--;
            item.selected = false;
          }
        }
      } 
    }

    getselectedtag(){
      this.selectedtag = [];
      for(let item of this.category){
        if(item.selected == true){
          this.selectedtag.push(item.id);
        }
      }
      //console.log(this.selectedtag);
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
    //console.log(index);
  }


  ngOnInit() {
    //let usernamest = localStorage.getItem('username');
    //console.log(usernamest);
    
    this.currentnav.currentpage = 'home';

    //var htmlString= "<div id = 'ju'><h1>Hello World</h1><p>This is the text that we should get.</p><p>Our Code World &#169; 2017</p></div>";
    //console.log(htmlString);
    
    //console.log(JSON.stringify(this.list));
    //console.log(JSON.stringify(this.listos));

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

      //console.log(data);
    });

    this.actRoute.params.subscribe((data: any) =>{
      this.tagcommentid = data.tagcommentid;
      this.comment_id = data.comment_id;
      this.tag_id = data.tag_id;
      this.tag_tagname = data.tag_tagname;

      //console.log(data);
    });
  }

  ionViewWillEnter(){
    this.comments = [];
    this.tagcomments = [];
    this.loadPost(this.topdate);
    this.loadTagComment();
  }

  ionViewDidEnter(){
    
  }
  ionViewWillLeave(){
  }
  ionViewDidLeave(){
  }
  ngOnDestroy(){
  }


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

  toThread(r_thread){
    var selection = window.getSelection();
    //console.log(selection);

    if(selection.toString().length === 0) {
      this.router.navigate(['r/home/'+r_thread+'/']);
    }
  }

  
  locs: any = {
    "id": 0,
    "title": "lel",
    "textcmt": "lel",
    "tags": ["hur"],
    "tagsname": ["hur"],
    "generaltags":{"tagid": 0, "tagname": "hur"},
    "newtags":{"tagid": 0, "tagname": "hur"}
  }

  collecttag: any=[];
  collecttagname: any=[];
  collectnewtags: any=[];

  public async toEdit(commentid, title, textcmt){
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();

    this.locs.id = commentid;
    this.locs.title = title;
    this.locs.textcmt = textcmt;

    for(let tagcomment of this.tagcomments){
      if(tagcomment.comment_id==commentid){
        //console.log('ehhhhhhhhhhh'+tagcomment.tag_id);
        //console.log('ehhhhhhhhhhh'+tagcomment.tag_tagname);
        this.collecttag.push(tagcomment.tag_id);
        this.collecttagname.push(tagcomment.tag_tagname);
        this.collectnewtags.push({"tagid": tagcomment.tag_id, "tagname": tagcomment.tag_tagname});
      }
    }
    /*console.log(this.collecttag);
    console.log(this.collecttagname);
    console.log(this.collectnewtags);*/

    this.locs.tags = this.collecttag;
    this.locs.tagsname = this.collecttagname;
    this.locs.generaltags.tagid = this.collecttag;
    this.locs.generaltags.tagname = this.collecttagname;
    this.locs.newtags = this.collectnewtags;

    this.myNavService.myParam = {locs:this.locs};
    //await this.navCtrl.goForward('/map-page');
    
    this.collecttag =[];
    this.collecttagname =[];
    this.collectnewtags =[];

    this.router.navigateByUrl('/r/home/editpost');
    //this.navCtrl.navigateRoot(['/r/editpost']);

    //this.router.navigate(['editpost/']);
    //this.router.navigateByUrl('/editpost', { state: { hello: 'world' } });

    
  }

  mainan:any = [
    {
      "id": 1,
      "name": "bola",
      "children": [
        {
          "venue": "stamford"
        }
      ]
    }
  ]

  loadPost(topdate){
    return new Promise(resolve => {
      let body = {
        action : 'getpost',
        topsort : topdate
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let comment of data.result){
          this.comments.push(comment);
        }
        this.listoso = this.treeify(this.comments, 'commentid', 'replyto', 'children');
        //console.log(JSON.stringify(this.listoso));
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
        console.log('Delete is clicked');
        this.comments = [];
        this.tagcomments = [];
        this.loadPost(this.topdate);
        this.loadTagComment();
        resolve(true);
      });
    });
  }

  subsrcibedatafirst(body){
    this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let tagcomment of data.result){
          //if(tagcomment.comment_id == 10){
            this.tagcomments.push(tagcomment);
          //}
        }
      }); 
  }
  subsrcibedatalater(body){
    
    this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        this.tagcomments = [];
        for(let tagcomment of data.result){
          //if(tagcomment.comment_id == 10){
            this.tagcomments.push(tagcomment);
          //}
        }
      }); 
  }

  interval:any;
  counter:number = 0;

  loadTagComment(){
    return new Promise(resolve => {
      let body = {
        action : 'gettagcomment'
      };
      this.subsrcibedatafirst(body);
      
      /*this.interval = setInterval(() => { 
        this.subsrcibedatalater(body); 
      }, 1000);*/
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
            
            //window.location.href = window.location.href; oriiii
            
            /*setTimeout(() => {
              this.navCtrl.navigateRoot(['r/home']);
            }, 1000);*/
            

          }
        }
      ]
    });

    await alert.present();
  }


  toppostpressed: boolean = false;

  presstoppost(){
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();

    if(this.toppostpressed == true){
      this.toppostpressed = false;
    }
    else if(this.toppostpressed == false){
      this.toppostpressed = true;
    }
  }

  clickcontent(){
    this.toppostpressed = false;
  }

  topdatearray:any = [
    {
      'value': 'today',
      'menu': 'Today',
      'selected': false
    },
    {
      'value': 'week',
      'menu': 'This week',
      'selected': false
    },
    {
      'value': 'month',
      'menu': 'This month',
      'selected': false
    },
    {
      'value': 'year',
      'menu': 'This year',
      'selected': true
    },
    {
      'value': 'alltime',
      'menu': 'All time',
      'selected': false
    }
  ];

  topdate:string = 'year';
  topdatestring:string = 'THIS YEAR';
  topsortedby(topdate){
    //this.topdate = 'alltime';
    this.topdate = topdate;
    this.toppostpressed = false;

    for(let item of this.topdatearray){
      if(item.value == topdate){
        item.selected = true;
      }
      else if(item.value != topdate){
        item.selected = false;
      }
    }

    if(this.topdate == 'today'){
      this.topdatestring = 'POST TODAY';
    }
    else if(this.topdate == 'week'){
      this.topdatestring = 'THIS WEEK';
    }
    else if(this.topdate == 'month'){
      this.topdatestring = 'THIS MONTH';
    }
    else if(this.topdate == 'year'){
      this.topdatestring = 'THIS YEAR';
    }
    else if(this.topdate == 'alltime'){
      this.topdatestring = 'ALL TIME';
    }
    
    this.comments = [];
    this.tagcomments = [];
    this.loadPost(this.topdate);
    this.loadTagComment();
  }

  
  searchedtext:string;
  searchedtexturi:string;

  onKeydown(event){
    if (event.key == "Enter") {
      console.log(event);
      
      this.searchedtext = event.target.value;
      this.searchedtexturi = encodeURI(this.searchedtext);

      console.log(this.searchedtext);
      console.log(this.searchedtexturi);

      //this.router.navigate(['r//'+r_thread+'/']);
      //this.router.navigate(['r/search/'+this.searchedtexturi+'/']);
      //this.router.navigate(['r/home/search/'+this.searchedtexturi+'/']);
      this.navCtrl.navigateForward(['r/home/search/'+this.searchedtexturi+'/'],{animated: false});
      event.target.value = '';
    }
  }

  /*
  info:string="000";

  async um(){
    this.info = (await Device.getInfo()).appBuild;
    Keyboard.show();
  }

  im(){
    Keyboard.hide();
  }
*/
  

  

  man(tagname){
    //console.log(tagname);
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
