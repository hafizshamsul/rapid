import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.page.html',
  styleUrls: ['./editpost.page.scss'],
})
export class EditpostPage implements OnInit {

  constructor(private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
