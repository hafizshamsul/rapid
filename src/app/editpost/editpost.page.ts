import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { Tagify } from '@yaireo/tagify';
import { PostProvider } from '../../providers/post-provider';
import { GlobalService } from "../..//providers/global.service";


@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.page.html',
  styleUrls: ['./editpost.page.scss'],
})
export class EditpostPage implements OnInit {

  constructor(
    public global: GlobalService, 
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

  editorForm: FormGroup;
  editorContent: string; //textcmt

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

  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
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

  getTitle:string;

  contoh:any = [];
  

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