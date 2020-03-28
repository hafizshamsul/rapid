import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { Tagify } from '@yaireo/tagify';


@Component({
  selector: 'app-submitpost',
  templateUrl: './submitpost.page.html',
  styleUrls: ['./submitpost.page.scss'],
})
export class SubmitpostPage implements OnInit {

  constructor(private qull: QuillModule, private router: Router, private actRoute: ActivatedRoute) { }

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

  lul:any = [];

  getSelectedSubjectValue(getSelectedSubject){
    this.lul = getSelectedSubject;
    this.kah();
    //console.log(this.lul);
  }

  kah(){
    for(let val of this.lul){
      console.log("Add tag of value: "+val);
    }
  }
  
}
