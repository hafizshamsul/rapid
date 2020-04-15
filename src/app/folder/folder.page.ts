import { Component, OnInit, ViewChild } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ImagesProvider } from '../../providers/images/images';
import { HttpClient } from "@angular/common/http";
import { GlobalService } from "../..//providers/global.service";
import { IonicPage } from 'ionic-angular';
import {AppRoutingModule} from '../app-routing.module';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})



export class FolderPage implements OnInit {
  
  r_username: string;
  r_folderid: string;

  current_users: any[];
  users: any[];
  folders: any[];
  hiks: any = [];
  customers: any = [];

  limit: number = 10;
  start: number = 0;
  lol: String = "25 Jan 2020";

  private _SUFFIX : string;
  public image : string;
  public isSelected : boolean =	false;
  
  current_userid: number;
  current_username: string;
  current_passwordhash: string;
  current_displayname: string;

  userid: number;
  username: string;
  passwordhash: string;
  displayname: string;

  folderid: number;
  foldername: string;
  description: string;
  users_id: number;

  idc: number;
  name: string;
  decoded: string;
  type: string;
  icon: string;
  folderdata_id: number;
  
  constructor(
    public navCtrl: NavController,
    public route: AppRoutingModule,
    public global: GlobalService, 
    private actRoute: ActivatedRoute,
    public alertCtrl: AlertController, private postprovider: PostProvider, private router: Router, private _IMAGES: ImagesProvider, private http: HttpClient) {
      
      
    }

  ngOnInit() {
    this.r_username = this.actRoute.snapshot.paramMap.get('r_username');
    this.r_folderid = this.actRoute.snapshot.paramMap.get('r_folderid');

    this.actRoute.params.subscribe((data: any) =>{
      this.current_userid = data.current_id;
      this.current_username = data.current_username;
      this.current_passwordhash = data.current_passwordhash;
      this.current_displayname = data.current_displayname;
      console.log(data);
    });

    this.actRoute.params.subscribe((data: any) =>{
      this.userid = data.id;
      this.username = data.username;
      this.passwordhash = data.passwordhash;
      this.displayname = data.displayname;
      console.log(data);
    });
    
    this.actRoute.params.subscribe((data: any) =>{
      this.folderid = data.folderid;
      this.foldername = data.foldername;
      this.description = data.description;
      this.users_id = data.users_id;
      console.log(data);
    });

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
  
  selectFileToUpload(event) : void {
    this._IMAGES.handleImageSelection(event).subscribe((res) => {
      this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];

      if(this._SUFFIX == 'vnd.openxmlformats-officedocument.wordprocessingml.document'){
        this._SUFFIX = 'docx';
      }
      else if(this._SUFFIX == 'postscript'){
        this._SUFFIX = 'ai';
      }
      else if(this._SUFFIX == 'x-windows-bmp'){
        this._SUFFIX = 'bmp';
      }
      else if(this._SUFFIX == 'jpg'){
        this._SUFFIX = 'jpeg';
      }
      else if(this._SUFFIX == 'octet-stream'){
        this._SUFFIX = 'psd';
      }
      else if(this._SUFFIX == 'tif'){
        this._SUFFIX = 'tiff';
      }
      else if(this._SUFFIX == 'postscript'){
        this._SUFFIX = 'ai';
      }
      else if(this._SUFFIX == 'msword'){
        this._SUFFIX = 'doc';
      }
      else if(this._SUFFIX == 'vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
        this._SUFFIX = 'xlsx';
      }
      else if(this._SUFFIX == 'vnd.ms-excel'){
        this._SUFFIX = 'xls';
      }
      else if(this._SUFFIX == 'vnd.openxmlformats-officedocument.presentationml.presentation'){
        this._SUFFIX = 'pptx';
      }
      else if(this._SUFFIX == 'vnd.ms-powerpoint'){
        this._SUFFIX = 'ppt';
      }
      else if(this._SUFFIX == 'vnd.ms-access'){
        this._SUFFIX = 'mdb';
      }
      else if(this._SUFFIX == 'plain'){
        this._SUFFIX = 'txt';
      }
      else if(this._SUFFIX == 'x-zip-compressed'){
        this._SUFFIX = 'zip';
      }

      if(this._IMAGES.isCorrectFileType(this._SUFFIX)) {
        this.isSelected = true;
        this.image = res;
      }
      else {
        this.displayAlert('You need to select an image file with one of the following types: jpg, gif or png');
      }
    },
    (error) => {
      console.dir(error);
      this.displayAlert(error.message);
    });
  }
 
   uploadFile() : void {
    this.name = Date.now() + '.' + this._SUFFIX;
    
    if(['ai', 'bmp', 'gif', 'jpeg', 'png', 'psd', 'svg', 'tiff'].includes(this._SUFFIX)){
      this.icon = 'images';
    }
    else if(['doc', 'docx', 'rtf', 'txt'].includes(this._SUFFIX)){
      this.icon = 'doc';
    }
    else if(['pdf'].includes(this._SUFFIX)){
      this.icon = 'pdf';
    }
    else if(['xls', 'xlsx'].includes(this._SUFFIX)){
      this.icon = 'excel';
    }
    else if(['ppt', 'pptx'].includes(this._SUFFIX)){
      this.icon = 'presentation';
    }
    else if(['zip'].includes(this._SUFFIX)){
      this.icon = 'zip';
    }
  
    let body: any = {
      action : "add" ,
      name : this.name,
      file : this.image,
      type : this._SUFFIX,
      icon : this.icon,
      rename : "kehkeh.png"
    };  
    
      this._IMAGES.uploadImageSelection(body).subscribe((res) => {        
        this.displayAlert(res.message);
        this.isSelected = false;
      },
      (error : any) => {
         console.dir(error);
         this.displayAlert(error.message);
      });
   }

   async presentAlert() {
    let alert : any = await this.alertCtrl.create({
    message: 'Low battery',
    subHeader: '10% of battery remaining',
    buttons: ['Dismiss']
   });
   await alert.present(); 
  }

   async displayAlert(message : string) {
      let alert : any = await this.alertCtrl.create({
        header 		: 'Heads up!',
        subHeader 	: message,
        buttons 	: ['Got it']
      });
      alert.present();
   }

  ionViewWillEnter(){
    this.current_users = [];
    this.loadCurrentUser(this.global.username);
    
    this.users = [];
    this.loadUser(this.r_username, this.global.password);
    
    this.folders = [];
    this.loadFolder(this.r_username);

    this.hiks = [];
    this.loadFile(this.r_username, this.r_folderid);

    this.customers = [];
    this.start = 0;
  }

  addCustomer(){
    this.router.navigate(['/addcustomer']);
  }

  updateCustomer(id, name, desc){
    this.router.navigate(['/addcustomer/'+id+'/'+name+'/'+desc]);
  }

  showCustomer(id, name, desc){
    this.router.navigate(['/showcustomer/'+id+'/'+name+'/'+desc]);
  }

  showFile(id){
    this.router.navigate(['/showcustomer/'+id]);
  }

  showFolder(folderid){
    this.router.navigate(['/r/'+this.r_username +'/'+folderid]);
  }

  home(){
    this.router.navigate(['/homepage']);
  }

  folder(){
    this.router.navigate(['/folder']);
  }

  loginform(){
    this.router.navigate(['/loginform']);
  }

  doRefresh(event){
    setTimeout(()=>{
      this.ionViewWillEnter();
      event.target.complete();
    }, 240);
  }

  cancel(){
    this.isSelected = false;
  }

  loadData(event:any){
    this.start += this.limit;
    this.loadCustomer().then(()=>{
      event.target.complete();
    });
  }

  delCustomer(id){
    let body = {
      action : 'delete',
      customer_id: id
    };

    this.postprovider.postData(body, 'process-api.php').subscribe(data => {
      this.ionViewWillEnter();
    });
  }

  loadCustomer(){
    return new Promise(resolve => {
      let body = {
        action : 'getdata',
        limit : this.limit,
        start : this.start,
      };

      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let customer of data.result){
          this.customers.push(customer);
        }
        resolve(true);
      });
    });
  }

  loadFolder(username){
    return new Promise(resolve => {
      let body = {
        action : 'getfolder',
        username : username
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let folder of data.result){
          this.folders.push(folder);
        }
        resolve(true);
      });
    });
  }
     
   loadFile(username, folderid){
    return new Promise(resolve => {
      let body = {
        action : 'getfile',
        username : username,
        folderid : folderid
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let hik of data.result){
          this.hiks.push(hik);
        }
        resolve(true);
      });
    });
  }

  loadUser(username, password){
    return new Promise(resolve => {
      let body = {
        action : 'getuser',
        username : username,
        password : password
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let user of data.result){
            this.users.push(user);
        }
        resolve(true);
      });
    });
  }

  loadCurrentUser(username){
    return new Promise(resolve => {
      let body = {
        action : 'getcurrentuser',
        username : username
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let current_user of data.result){
            this.current_users.push(current_user);
        }
        resolve(true);
      });
    });
  }

  
}