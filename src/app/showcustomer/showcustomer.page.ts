import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.page.html',
  styleUrls: ['./showcustomer.page.scss'],
})
export class ShowcustomerPage implements OnInit {
  
  /*name_customer: string;
  desc_customer: string;
  id: number;*/

  //name: string;
  id: number;

  constructor(private postprovider: PostProvider, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      /*this.id = data.id;
      this.name_customer = data.name;
      this.desc_customer = data.desc;*/
      
      this.id = data.id;
      //this.name = data.name;
      console.log(data);
    });
  }

}
