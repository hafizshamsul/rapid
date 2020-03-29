import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { Tagify } from '@yaireo/tagify';
import { PostProvider } from '../../providers/post-provider';
import { GlobalService } from "../..//providers/global.service";


@Component({
  selector: 'app-submitpost',
  templateUrl: './submitpost.page.html',
  styleUrls: ['./submitpost.page.scss'],
})
export class SubmitpostPage implements OnInit {

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
        textcmt: this.editorContent
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        
      });
      this.addPost();
      this.router.navigate(['r/home/']);
    });

    
    
  }

  maxLength(e){
    if(e.editor.getLength() > 1000){
      e.editor.deleteText(10, e.editor.getLength());
    }
  }

  
  selectedtags: any = [];
  
  getSelectedSubjectValue(getSelectedSubject){
    this.selectedtags = getSelectedSubject;
    this.addPost();
    //console.log(this.lul);
  }

  addPost(){
    /*
    return new Promise(resolve => {
      let body = {
        action : 'loadpost',
        users_id:,
        title:,
        textcmt:
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let comment of data.result){
          this.comments.push(comment);
        }
        this.listoso = this.treeify(this.comments, 'commentid', 'replyto', 'children');
        resolve(true);
      });
    });
    */
    
    for(let val of this.selectedtags){
      console.log("tagcomment.tagname: "+val);
      
      return new Promise(resolve => {
        let body = {
          action : 'addtagcomment',
          tag_id : val
        };
        this.postprovider.postData(body, 'process-api.php').subscribe(data => {   
        });
        
      });
    }
  }
  
  /*
  addTagComment(){
    return new Promise(resolve => {
      let body = {
        action : 'addtagcomment'
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {   
      });
      
    });
  }
  */

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
