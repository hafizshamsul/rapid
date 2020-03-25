import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-submitpost',
  templateUrl: './submitpost.page.html',
  styleUrls: ['./submitpost.page.scss'],
})
export class SubmitpostPage implements OnInit {

  constructor(private qull: QuillModule, private router: Router, private actRoute: ActivatedRoute) { }
  
  editorForm: FormGroup;
  editorContent: string;

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

}
