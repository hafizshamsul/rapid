import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submitpost',
  templateUrl: './submitpost.page.html',
  styleUrls: ['./submitpost.page.scss'],
})
export class SubmitpostPage implements OnInit {

  constructor(private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
