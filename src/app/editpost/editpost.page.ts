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
  

  constructor(
    public navCtrl: NavController,
    public global: GlobalService,
    public myNavService: MyNavService,
    public alertCtrl: AlertController,
    private postprovider: PostProvider, private qull: QuillModule, private router: Router, private actRoute: ActivatedRoute) {
      //console.log('constructor');
      //console.log(this.getSelectedSubject);
      //console.log(this.getSelectedSubjectName);
      //this.getSelectedSubject = [1];

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
  //console.log(this.selectedtag);
  //console.log(this.contoh);
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

       /*console.log(this.passededitid);
      console.log(this.passededittitle);
      console.log(this.passededittextcmt);
      console.log(this.passededittags);
      console.log(this.passededittagsname);
      console.log(this.passededitgeneraltagstagid);
      console.log(this.passededitgeneraltagstagname);
      console.log(this.passededitnewtags);*/

      this.getSelectedSubject = this.passededittags;
      this.getSelectedSubjectName = this.passededittagsname;

      this.comments = [];
      this.tags = [];
      this.contoh = [];
      

      this.loadPost(this.passededitid);
      this.loadTag();
      
      
      this.editorForm = new FormGroup({
        'editor': new FormControl(this.passededittextcmt)
      });

      //tag
      this.actRoute.params.subscribe((data: any) =>{
        this.tagid = data.tagid;
        this.tagname = data.tagname;
        this.tagdesc = data.tagdesc;

        //console.log(data);
      });

      //comment
      this.actRoute.params.subscribe((data: any) =>{
        this.commentid = data.commentid;
        this.users_id = data.users_id;
        this.title = data.title;
        this.textcmt = data.textcmt;

        //console.log(data);

        //console.log('before editorform:'+this.listoso[0].textcmt);
        //console.log("This is: "+this.commentid);
      });

      //tagcomment
      this.actRoute.params.subscribe((data: any) =>{
        this.tagcommentid = data.tagcommentid;
        this.comment_id = data.comment_id;
        this.tag_id = data.tag_id;

        //console.log(data);
        
      });
    }
    catch(err){
      this.noerror = false;
    }
    
    
   
    
  }

  ionViewWillEnter(){
    //console.log('ionViewWillEnter');

    

    //load
    
    
    
    //console.log(this.comments);
    //console.log(this.tags);
    //console.log(this.contoh);
    //console.log(this.myObject.locs.generaltags.tagid[0]);
    

    /*for(let item of this.tags){
      console.log(item.tagid);
    }
    for(let item of this.passededittags){
      console.log('looping passedittags');
    }
    for(let item of this.myObject.locs.generaltags.tagid){
      console.log(this.myObject.locs.generaltags.tagid[item-1]);
    }*/

    for(let itemtags of this.tags){
      /*for(let itempassededittags of this.myObject.locs.generaltags.tagid){
        if(itemtags.tagid == this.myObject.locs.generaltags.tagid[itempassededittags-1]){
          console.log('selected');
        }
      }*/
      //this.contoh.push({"tagid": itemtags.tagid, "name": itemtags.tagname, "selected": false})
    }

    /*for(let itemtags = 0; itemtags<this.tags.length; itemtags++){
      for(let itempassededittags = 0; itempassededittags<this.myObject.locs.newtags.length; itempassededittags++){
        if(this.tags[itemtags].tagid == this.myObject.locs.newtags[itempassededittags].tagid){
          this.contoh[itemtags].selected = true;
        }
      }
    }*/

    //console.log(this.tags);
    //console.log(this.myObject.locs.newtags);
    //console.log(this.contoh);
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
    //console.log('ionViewDidEnter');
    //console.log(Object.keys(this.tags).length);
    
    /*for(let i=0; i<Object.keys(this.tags).length; i++){
      this.contoh.push({"tagid":"1", "name":"lel", "selected": false});
    }*/
    

    try{
      for(let itemtags of this.tags){
        this.contoh.push({"tagid": itemtags.tagid, "name": itemtags.tagname, "selected": false});
      }
      
      for(let itemtags = 0; itemtags<this.tags.length; itemtags++){
        for(let itempassededittags = 0; itempassededittags<this.myObject.locs.newtags.length; itempassededittags++){
          if(this.tags[itemtags].tagid == this.myObject.locs.newtags[itempassededittags].tagid){
            this.contoh[itemtags].selected = true;
          }
        }
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
            //console.log('Update is clicked');
            //console.log(this.contoh);
            //window.location.href = window.location.href;
          }
        }
      ]
    });

    await alert.present();
  }


  onUpdate(){
    this.editorContent = this.editorForm.get('editor').value;
    //console.log("comment.users_id: "+this.global.userid);
    //console.log("comment.title: "+this.getTitle);
    //console.log("comment.textcmt: "+this.editorContent);

    

    return new Promise(resolve => {
      let body = {
        action : 'updatepost',
        commentid: this.passededitid,
        title: this.getTitle,
        textcmt: this.editorContent,
        contoh: this.contoh,
        //contoh: { "name":"John" },
        //contoh: "{ 'id': 1, 'text': 'lol' }",
        jsond: "{\'id\''}"
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        
      });
      //this.loopTagComment();
      //window.location.reload(true);
      //window.location.href = window.location.href;
      
      //this.router.navigate(['r/home/']);
      //this.getTitle = "";
      //this.router.navigate(['r/home/']);
      //this.navCtrl.pop();
      //this.router.navigateByUrl('/r/home');
      //this.navCtrl.navigateRoot(['r/home']);

      setTimeout(() => {
        this.navCtrl.navigateRoot(['r/home']);
      }, 1000);

      
      //this.navCtrl.
      //this.navCtrl.navigateRoot('/r/home', {animated: true, animationDirection: 'forward'});
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
    //console.log(getSelectedSubject);
    
    this.loopTagComment();
  }

  arraytag: any = [];

  objectselected: any = [];

  loopTagComment(){    
    for(let val of this.selectedtags){
      //console.log("tagcomment.tagid: "+val);
      
      //this.contoh.push({"id": val, "name": val, "selected": false});
      //this.arraytag.push(val);
      //console.log(this.arraytag)
      //this.addTagComment(val);
    }

    /*for(let item of this.myObject.locs){
      //this.contoh.push({"id": this.myObject.item.generaltags.tagid, "name": this.myObject.item.generaltags.tagname, "selected": false});
    }*/

    for(let item of this.selectedtags){
      //console.log(this.myObject.locs.generaltags.tagid[item-1]);
      //console.log(item);
      
      //console.log('lol: '+this.selectedtags[item-1]);
      //this.contoh.push({"id": this.myObject.locs.generaltags.tagid[item-1], "name": this.myObject.locs.generaltags.tagname[item-1], "selected": false});

    }

    //this.contoh.push({"id": this.myObject.locs.generaltags.tagid[0], "name": this.myObject.locs.generaltags.tagname[0], "selected": false});
    //this.contoh.push({"id": this.myObject.locs.generaltags.tagid[1], "name": this.myObject.locs.generaltags.tagname[1], "selected": false});

    //console.log(this.myObject.locs.generaltags.tagid[0]);
    
    //console.log(this.contoh);
    //console.log(this.myObject.locs.generaltags.tagid);

    /*for(let item of this.contoh){
      console.log(this.contoh[0].id);
    }*/

    
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
        //console.log(this.tags);
        resolve(true);
      });
    });
  }

 
  toBack(){
    this.navCtrl.pop();
  }



  toHome(){
    this.navCtrl.navigateRoot(['r/home/']);
  }

  toSubmitpost(){
    this.navCtrl.navigateRoot(['r/submitpost/']);
  }

  toFolder(){
    this.navCtrl.navigateRoot(['r/'+this.global.username+'/']);
  }

  toMessenger(){
    this.navCtrl.navigateRoot(['messenger/']);
  }
}
