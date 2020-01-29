import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from 'ionic-angular';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.page.html',
  styleUrls: ['./showcustomer.page.scss'],
})
export class ShowcustomerPage implements OnInit {
  
  /*name_customer: string;
  desc_customer: string;
  id: number;*/

  name: string;
  id: number;

  hiks: any = [];

  constructor(private postprovider: PostProvider, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      /*this.id = data.id;
      this.name_customer = data.name;
      this.desc_customer = data.desc;*/
      
      this.id = data.id;
      this.name = data.name;
      console.log(data);
    });
  }

  ionViewWillEnter(){
    this.hiks = [];
    this.loadFile(this.id);
  }

  loadFile(id){
    return new Promise(resolve => {
      let body = {
        action : 'getit',
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        

        for(let hik of data.result){
          this.hiks = this.hiks.filter((item) => {
            return item.id === id
          });
          
          if(hik.id == id){
            this.hiks.push(hik);
          }
          
        }
        resolve(true);
      });
    });
  }

}
