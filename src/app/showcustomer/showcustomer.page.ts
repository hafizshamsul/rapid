import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';


@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.page.html',
  styleUrls: ['./showcustomer.page.scss'],
})
export class ShowcustomerPage implements OnInit {
  
  /*name_customer: string;
  desc_customer: string;
  id: number;*/

  idc: number;
  name: string;
  decoded: string;
  type: string;
  icon: string;
  folderdata_id: number;

  hiks: any = [];

  

  constructor(private postprovider: PostProvider, private router: Router, private actRoute: ActivatedRoute, private document: DocumentViewer) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.idc = data.idc;
      this.name = data.name;
      this.decoded = data.decoded;
      this.type = data.type;
      this.icon = data.icon;
      this.folderdata_id = data.folderdata_id;
      console.log(data);
    });
  }

  

  viewdoc(){
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    };
    this.document.viewDocument('http://192.168.0.137/rapidkl/rapid/upload_api/uploads/1579881407292.pdf', 'application/pdf', options);
  }




  ionViewWillEnter(){
    this.hiks = [];
    this.loadFile('hafizshamsul', 1, 201);
  }

  displayhiks(){
    console.log(this.hiks);
  }

  loadFile(username, folderid, fileid){
    return new Promise(resolve => {
      let body = {
        action : 'getindividualfile',
        username : username,
        folderid: folderid,
        fileid: fileid
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let hik of data.result){
            this.hiks.push(hik);  
        }
        resolve(true);
      });
    });
  }

  users: any[];
  userid: string;
  /*loadUser(userid){
    return new Promise(resolve => {
      let body = {
        action : 'getuser',
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        

        for(let user of data.result){
          this.users = this.users.filter((item) => {
            return item.id === userid
          });
          
          if(user.id == userid){
            this.hiks.push(user);
          }
          
        }
        resolve(true);
      });
    });
  }*/

}
