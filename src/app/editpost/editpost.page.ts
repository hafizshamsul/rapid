import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { Tagify } from '@yaireo/tagify';
import { PostProvider } from '../../providers/post-provider';
import { GlobalService } from "../..//providers/global.service";
import { MyNavService } from "../..//providers/mynavservice.service";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.page.html',
  styleUrls: ['./editpost.page.scss'],
})
export class EditpostPage implements OnInit {
  //state$: Observable<object>;
  
  active = "home";
  session = sessionStorage.getItem('users-username');

  constructor(
    public navCtrl: NavController,
    public global: GlobalService,
    public myNavService: MyNavService,
    public alertCtrl: AlertController,
    private postprovider: PostProvider, private qull: QuillModule, private router: Router, private actRoute: ActivatedRoute) {

      this.category = [];
      this.category.push({"id": 1, "name": "science", "selected": false});
      this.category.push({"id": 2, "name": "maths", "selected": false});

      for(let item of this.tags){
        console.log('aiwah');
      }
     }

noerror:boolean = true;

//tagifyclone
totalselected:number;
selectedtag:any = [];

//category object array
category:any[];

changeselection(itemid){
  
  for(let item of this.contoh){
    if(item.tagid == itemid){
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
  for(let item of this.contoh){
    if(item.selected == true){
      this.selectedtag.push(item.tagid);
    }
  }

}
  
  hello:string = "eh";
  getSelectedSubject:any[];
  getSelectedSubjectName:any[];

  contoh: any = [];

  //tag
  tags: any = [];
  tagid: number;
  tagname: string;
  tagdesc: string;

  //comment
  comments: any = [];
  commentid: number;
  users_id: number;
  title: string;
  textcmt: string;

  //tagcomment
  tagcomments: any = [];
  tagcommentid: number;
  comment_id: number;
  tag_id: number;
  tag_tagname: any;

  getTitle:string; //title
  editorContent: string; //textcmt
  editorForm: FormGroup;
  retrievedtextcmt: string ="haha";

  editorStyle = {
    height: '380px',
    backgroundColor: 'black'
  }

  config = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['image', 'code-block']
    ]
  }

  myObject:any = [];
  
  ngOnInit() {
    console.log('ngOnInit edit');

    try{
      
      this.myObject = this.myNavService.myParam;
      this.passededitid = this.myObject.locs.id;
      this.passededittitle = this.myObject.locs.title;
      this.passededittextcmt = this.myObject.locs.textcmt;
      this.passededittags = this.myObject.locs.tags;
      this.passededittagsname = this.myObject.locs.tagsname;
      this.passededitgeneraltagstagid = this.myObject.locs.generaltags.tagid;
      this.passededitgeneraltagstagname = this.myObject.locs.generaltags.tagname;
      this.passededitnewtags = this.myObject.locs.newtags;

      this.getSelectedSubject = this.passededittags;
      this.getSelectedSubjectName = this.passededittagsname;

      this.comments = [];
      this.tags = [];
      this.contoh = [];

      this.loadPost(this.passededitid);
      this.loadTag();
      this.loadTagComment(this.passededitid);
      
      this.editorForm = new FormGroup({
        'editor': new FormControl(this.passededittextcmt)
      });

      //tag
      this.actRoute.params.subscribe((data: any) =>{
        this.tagid = data.tagid;
        this.tagname = data.tagname;
        this.tagdesc = data.tagdesc;

        console.log(this.tags);
      });

      //comment
      this.actRoute.params.subscribe((data: any) =>{
        this.commentid = data.commentid;
        this.users_id = data.users_id;
        this.title = data.title;
        this.textcmt = data.textcmt;

        console.log(this.comments);
      });

      //tagcomment
      this.actRoute.params.subscribe((data: any) =>{
        this.tagcommentid = data.id;
        this.comment_id = data.comment_id;
        this.tag_id = data.tag_id;
        this.tag_tagname = data.tagname;

        console.log(this.tagcomments);
      });
    }
    catch(err){
      this.noerror = false;
    }
    
  }

  ionViewWillEnter(){

    for(let itemtags of this.tags){
     
    }

  }
  
  passededitid:number;
  passededittitle:string;
  passededittextcmt:string;
  passededittags:any[];
  passededittagsname:any[];
  passededitgeneraltagstagid:any[];
  passededitgeneraltagstagname:any[];
  passededitnewtags:any[];

  //convert plain tree to hierarchical tree
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

  //hierarchical array of post
  listoso:any[]; 

  //loading plain tree array of post and convert it using treeify
  loadPost(passededitid){
    
    return new Promise(resolve => {
      let body = {
        action : 'getpostall',
        passededitid : passededitid
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let comment of data.result){
          this.comments.push(comment);
          this.getTitle = comment.title;
          this.retrievedtextcmt = comment.textcmt;
        }
        this.listoso = this.treeify(this.comments, 'commentid', 'replyto', 'children');
        
        resolve(true);
      });
    });
  }

  goback(){
    this.navCtrl.navigateRoot(['/r/home']);
  }

  ionViewDidEnter(){

    try{
      for(let itemtags of this.tags){
        this.contoh.push({"tagid": itemtags.tagid, "name": itemtags.tagname, "selected": false});
      }
      
      for(let itemtags = 0; itemtags<this.tags.length; itemtags++){
        
        //for(let itempassededittags = 0; itempassededittags<this.myObject.locs.newtags.length; itempassededittags++){
        
        for(let tagcomment of this.tagcomments){
          if(this.tags[itemtags].tagid == tagcomment.tag_id){
            this.contoh[itemtags].selected = true;
          }
        }
        
        
          /*if(this.tags[itemtags].tagid == this.myObject.locs.newtags[itempassededittags].tagid){
            this.contoh[itemtags].selected = true;
          }*/
        //}
      }

      //console.log(this.contoh);
      
      this.totalselected = this.myObject.locs.newtags.length;
    }
    catch(err){
      console.log('eeeeeeeeeeeeeeeeeeeeeeeeee');
    }
    
  }

  ionViewWilLeave(){
    //console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    //console.log('ionViewDidLeave');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy edit');
  }

  async presentAlertMultipleButtons() {
    //let leh: number = r_thread;

    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();

    const alert = await this.alertCtrl.create({
      header: 'Update Post',
      message: 'Are you sure you want to update this post?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Update',
          handler: () => {
            this.onUpdate();
         
          }
        }
      ]
    });

    await alert.present();
  }

  onUpdate(){
    this.editorContent = this.editorForm.get('editor').value;

    return new Promise(resolve => {
      let body = {
        action : 'updatepost',
        commentid: this.passededitid,
        title: this.getTitle,
        textcmt: this.editorContent,
        contoh: this.contoh,
        jsond: "{\'id\''}"
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        
      });

      setTimeout(() => {
        this.navCtrl.navigateRoot(['r/home']);
      }, 1000);

    }
    
    );
    
  }

  maxLength(e){
    if(e.editor.getLength() > 1000){
      e.editor.deleteText(10, e.editor.getLength());
    }
  }

  selectedtags: any = [];
  selectedtagsname: any = [];
  flagselected: boolean = false;
  
  getSelectedSubjectValue(getSelectedSubject){
    this.selectedtags = getSelectedSubject;
    this.selectedtagsname = this.getSelectedSubjectName;
    
    this.loopTagComment();
  }

  arraytag: any = [];

  objectselected: any = [];

  loopTagComment(){    
    for(let val of this.selectedtags){

    }

    for(let item of this.selectedtags){

    }
    
  }

  addTagComment(val){
    return new Promise(resolve => {
        let body = {
          action : 'addtagcomment',
          tag_id : val
        };
        this.postprovider.postData(body, 'process-api.php').subscribe(data => {   
        }); 
    });
  }

  loadTag(){
    return new Promise(resolve => {
      let body = {
        action : 'gettag',
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let tag of data.result){
          this.tags.push(tag);
        }
        resolve(true);
      });
    });
  }

  loadTagComment(passededitid){
    return new Promise(resolve => {
      let body = {
        action : 'editgettagcomment',
        passededitid : passededitid
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let tagcomment of data.result){
          this.tagcomments.push(tagcomment);
        }
        resolve(true);
      });
    });
  }
 
  toBack(){
    this.navCtrl.pop();
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
