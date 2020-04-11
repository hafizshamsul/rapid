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


@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.page.html',
  styleUrls: ['./editpost.page.scss'],
})
export class EditpostPage implements OnInit {
  //state$: Observable<object>;
  hello:string = "eh";

  

  constructor(
    public global: GlobalService,
    public myNavService: MyNavService,
    private postprovider: PostProvider, private qull: QuillModule, private router: Router, private actRoute: ActivatedRoute) { }

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
    
    
    this.myObject = this.myNavService.myParam;
    this.passededitid = this.myObject.locs.id;
    this.passededittitle = this.myObject.locs.title;
    this.passededittextcmt = this.myObject.locs.textcmt;
    console.log(this.passededitid);
    console.log(this.passededittitle);
    console.log(this.passededittextcmt);

    this.comments = [];
    this.loadPost(this.passededitid);
    
    this.editorForm = new FormGroup({
      'editor': new FormControl(this.passededittextcmt)
    });

    //tag
    this.actRoute.params.subscribe((data: any) =>{
      this.tagid = data.tagid;
      this.tagname = data.tagname;
      this.tagdesc = data.tagdesc;

      console.log(data);
    });

    //comment
    this.actRoute.params.subscribe((data: any) =>{
      this.commentid = data.commentid;
      this.users_id = data.users_id;
      this.title = data.title;
      this.textcmt = data.textcmt;

      console.log(data);
      //console.log('before editorform:'+this.listoso[0].textcmt);
      //console.log("This is: "+this.commentid);
    });

    //tagcomment
    this.actRoute.params.subscribe((data: any) =>{
      this.tagcommentid = data.tagcommentid;
      this.comment_id = data.comment_id;
      this.tag_id = data.tag_id;

      console.log(data);
      
    });
    
    
  }

  ionViewWillEnter(){
    //load
    
    this.tags = [];
    this.loadTag();    
  }

  

  contoh:any = [];
  
  passededitid:number;
  passededittitle:string;
  passededittextcmt:string;


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









  

  onSubmit(){
    this.editorContent = this.editorForm.get('editor').value;
    console.log("comment.users_id: "+this.global.userid);
    console.log("comment.title: "+this.getTitle);
    console.log("comment.textcmt: "+this.editorContent);

    

    return new Promise(resolve => {
      let body = {
        action : 'addpost',
        users_id: this.global.userid,
        title: this.getTitle,
        textcmt: this.editorContent,
        contoh: this.contoh,
        //contoh: { "name":"John" },
        //contoh: "{ 'id': 1, 'text': 'lol' }",
        jsond: "{\'id\''}"
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        
      });
      this.loopTagComment();
      //window.location.reload(true);
      window.location.href = window.location.href;
      
      //this.router.navigate(['r/submitpost/']);
      //this.getTitle = "";
      
    }
    
    );
    
  }

  maxLength(e){
    if(e.editor.getLength() > 1000){
      e.editor.deleteText(10, e.editor.getLength());
    }
  }

  selectedtags: any = [];
  flagselected: boolean = false;
  
  getSelectedSubjectValue(getSelectedSubject){
    this.contoh = [];
    this.selectedtags = getSelectedSubject;
    
    this.loopTagComment();
  }

  arraytag: any = [];

  loopTagComment(){    
    for(let val of this.selectedtags){
      console.log("tagcomment.tagid: "+val);
      this.contoh.push({"id": 3, "name": val});
      //this.arraytag.push(val);
      //console.log(this.arraytag)
      //this.addTagComment(val);
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

 
}
