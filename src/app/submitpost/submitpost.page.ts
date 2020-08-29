import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { Tagify } from '@yaireo/tagify';
import { PostProvider } from '../../providers/post-provider';


@Component({
  selector: 'app-submitpost',
  templateUrl: './submitpost.page.html',
  styleUrls: ['./submitpost.page.scss'],
})
export class SubmitpostPage implements OnInit {

  constructor(private postprovider: PostProvider, private qull: QuillModule, private router: Router, private actRoute: ActivatedRoute) { }

  id: number;
  tagname: string;
  tagdesc: string;

  dis: string = "lol";

  opt:any = [
    {
      "id": "webdev"
    },
    {
      "id": "mobiledev"
    },
    {
      "id": "database"
    }
  ]

  tags:any = [
    {
      "id": 1,
      "tagname": "sql",
      "tagdesc" : "lol"
    },
    {
      "id": 2,
      "tagname": "database",
      "tagdesc" : "lol"
    }
  ]

  editorForm: FormGroup;
  editorContent: string;
  
  //input = document.querySelector('input[name=basic]');
  //tagify = new Tagify(this.input);

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

    /*this.actRoute.params.subscribe((data: any) =>{
      this.id = data.id;
      this.tagname = data.tagname;
      this.tagdesc = data.tagdesc;

      console.log(data);
    });*/
  }

  ionViewWillEnter(){
    //this.tags = [];
    //this.loadTag();
    //console.log(this.tags);
  }

  onSubmit(){
    this.editorContent = this.editorForm.get('editor').value;
    console.log(this.editorForm.get('editor').value);
  }

  maxLength(e){
    if(e.editor.getLength() > 1000){
      e.editor.deleteText(10, e.editor.getLength());
    }
  }

  
  selectedtags: any = [];
  getSelectedSubjectValue(getSelectedSubject){
    this.selectedtags = getSelectedSubject;
    this.kah();
    //console.log(this.lul);
  }

  kah(){
    for(let val of this.selectedtags){
      console.log("Add tag of value: "+val);
      console.log();
    }
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
