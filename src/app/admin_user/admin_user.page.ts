import { Component, OnInit, ViewChild } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ImagesProvider } from '../../providers/images/images';
import { HttpClient } from "@angular/common/http";
import { GlobalService } from "../../providers/global.service";
import { IonicPage } from 'ionic-angular';
import {AppRoutingModule} from '../app-routing.module';
import { NavController } from '@ionic/angular';
import { stringify } from 'querystring';

@Component({
  selector: 'app-admin_user',
  templateUrl: './admin_user.page.html',
  styleUrls: ['./admin_user.page.scss'],
})



export class Admin_userPage implements OnInit {
  
  r_username: string;
  r_folderid: string;

  current_users: any[];
  
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

  //table_column
  id_users: number;
  username_users: string;
  passwordhash_users: string;
  displayname_users: string;
  role_users: string;
  dateregistered_users: string;
  status_users: string;


  
  constructor(
    public navCtrl: NavController,
    public route: AppRoutingModule,
    public global: GlobalService, 
    private actRoute: ActivatedRoute,
    public alertCtrl: AlertController, private postprovider: PostProvider, private router: Router, private _IMAGES: ImagesProvider, private http: HttpClient) {
      if(sessionStorage.getItem('users-role') != 'Admin'){
        this.router.navigate(['/r/home']);
      }
    }

    folderfileid:number;
    folderfilename:string;
    filename:string;
    folderfiletype:string;
    folderfileicon:string;
    folder_id:number;
    folderfileusers_id:number;
    dateuploaded:string;
    visibility:string;

  ngOnDestroy(){
    console.log('ngOnDestroy folder');
  }

  ActivateUser(id_users){
    return new Promise(resolve => {
      let body = {
        action : 'activateuser',
        id_users : id_users
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        
        resolve(true);
      });

      setTimeout(()=>{
        this.ionViewWillEnter();
      }, 240);

    });
  }

  DeactivateUser(id_users){
    return new Promise(resolve => {
      let body = {
        action : 'deactivateuser',
        id_users : id_users
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        
        resolve(true);
      });

      setTimeout(()=>{
        this.ionViewWillEnter();
      }, 240);
      
    });
  }

  ngOnInit() {
    console.log(this.comments);
    
    console.log('ngOnInit folder');

    this.r_username = this.actRoute.snapshot.paramMap.get('r_username');
    this.r_folderid = this.actRoute.snapshot.paramMap.get('r_folderid');

    this.actRoute.params.subscribe((data: any) =>{
      this.current_userid = data.current_id;
      this.current_username = data.current_username;
      this.current_passwordhash = data.current_passwordhash;
      this.current_displayname = data.current_displayname;
      //console.log(data);
    });

    this.actRoute.params.subscribe((data: any) =>{
      this.userid = data.id;
      this.username = data.username;
      this.passwordhash = data.passwordhash;
      this.displayname = data.displayname;
      //console.log(data);
    });
    
    this.actRoute.params.subscribe((data: any) =>{
      this.folderid = data.folderid;
      this.foldername = data.foldername;
      this.description = data.description;
      this.users_id = data.users_id;
      //console.log(data);
    });

    this.actRoute.params.subscribe((data: any) =>{
      this.idc = data.idc;
      this.name = data.name;
      this.decoded = data.decoded;
      this.type = data.type;
      this.icon = data.icon;
      this.folderdata_id = data.folderdata_id;
      //console.log(data);
    });


    this.actRoute.params.subscribe((data: any) =>{
      this.folderfileid = data.folderfileid;
      this.folderfilename = data.folderfilename;
      this.filename = data.filename;
      this.folderfiletype = data.folderfiletype;
      this.folderfileicon = data.folderfileicon;
      this.folder_id = data.folder_id;
      this.folderfileusers_id = data.folderfileusers_id;
      this.dateuploaded = data.dateuploaded;
      this.visibility = data.visibility;
      //this.thread = data.thread;

      //console.log(data);
    });

    this.actRoute.params.subscribe((data: any) =>{
      this.id_users = data.id_users;
      this.username_users = data.username_users;
      this.passwordhash_users = data.passwordhash_users;
      this.displayname_users = data.displayname_users;
      this.role_users = data.role_users;
      this.dateregistered_users = data.dateregistered_users;
      this.status_users = data.status_users;
    });

    this.actRoute.params.subscribe((data: any) =>{
      this.deletelist = data;
      //this.thread = data.thread;

      //console.log(data);
    });

  
  }

  deletelist:string;
  
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
    this.loadCurrentUser(sessionStorage.getItem('users-username'));
    
    //this.users = [];
    //this.loadUser(this.r_username, this.global.password);
    
    this.folders = [];
    this.loadFolder(this.r_username);

    this.hiks = [];
    this.loadFile(this.r_username, this.r_folderid);
    
    this.comments = [];
    this.loadFolderFile();
    
    this.users = [];
    this.loadUsers();

    this.customers = [];
    this.start = 0;

    console.log(this.comments);
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

  showFolder(folderfileid, folderfileicon){
    //this.router.navigate(['/r/'+this.r_username +'/'+folderid]);

    if(folderfileicon == 'folder'){
      //this.navCtrl.navigateForward(['/r/'+this.r_username +'/'+folderfileid], { animated: false, });
      
      this.router.navigate(['r/'+this.r_username +'/'+folderfileid+'/']);
      //this.router.navigateByUrl('/r/'+this.r_username +'/'+folderfileid);
    }
    
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

  comments: any[];
  users: any[];

  treeify(listo, idAttr, parentAttr, childrenAttr) {
    if (!idAttr) idAttr = 'folderfileid';
    if (!parentAttr) parentAttr = 'folder_id';

    if (!childrenAttr) childrenAttr = 'children';

    var treeList = [];
    var lookup = {};
    listo.forEach(function(obj) {
        lookup[obj[idAttr]] = obj;
        obj[childrenAttr] = [];
    });
    listo.forEach(function(obj) {
        if (obj[parentAttr] != null) {
            lookup[obj[parentAttr]][childrenAttr].push(obj);
        } else {
            treeList.push(obj);
        }
      });
      return treeList;
  };

  listoso:any[]; 

  loadFolderFile(){
    return new Promise(resolve => {
      let body = {
        action : 'getfolderfile',
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let comment of data.result){
          this.comments.push(comment);
        }
        this.listoso = this.treeify(this.comments, 'folderfileid', 'folder_id', 'children');
        //console.log(JSON.stringify(this.listoso));
        resolve(true);
      });
    });
  }

  loadUsers(){
    return new Promise(resolve => {
      let body = {
        action : 'getusers',
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let user of data.result){
          this.users.push(user);
        }
        resolve(true);
      });
    });
  }


  toHome(){
    this.navCtrl.navigateRoot(['r/home/']);
  }

  toSubmitpost(){
    this.navCtrl.navigateRoot(['r/submitpost/']);
  }

  toFolder(){
    this.navCtrl.navigateRoot(['r/'+sessionStorage.getItem('users-username')+'/']);
  }

  login(){
    //local-based authentication
    sessionStorage.setItem('users-id', 'null');
    sessionStorage.setItem('users-username', 'null');
    sessionStorage.setItem('users-passwordhash', 'null');
    sessionStorage.setItem('users-displayname', 'null');
    sessionStorage.setItem('users-role', 'null');
    sessionStorage.setItem('users-dateregistered', 'null');
    sessionStorage.setItem('users-status', 'null');

    console.log(sessionStorage.getItem('users-id'));
    console.log(sessionStorage.getItem('users-username'));
    console.log(sessionStorage.getItem('users-passwordhash'));
    console.log(sessionStorage.getItem('users-displayname'));
    console.log(sessionStorage.getItem('users-role'));
    console.log(sessionStorage.getItem('users-dateregistered'));
    console.log(sessionStorage.getItem('users-status'));

    this.router.navigate(['/loginform']);
  }

  toAdmin_user(){
    this.navCtrl.navigateRoot(['admin_user/']);
  }

  toAdmin_post(){
    this.navCtrl.navigateRoot(['r/admin_post/']);
  }

  toAdmin_doc(){
    this.navCtrl.navigateRoot(['r/admin_doc/']);
  }

  toStream(){
    this.navCtrl.navigateRoot(['stream/']);
  }

  toMessenger(){
    this.navCtrl.navigateRoot(['messenger/']);
  }


  //HTML ID
  @ViewChild('rename', {static: false}) rename;

  //LOGIC VARIABLE
  popup:boolean = false;
  UDpopup:boolean = false;
  CDpopup:boolean = false;

  //VARIABLE PASSED TO POPUP
  selectedid:number;
  selectedname:string;

  showid(folderfileid, folderfilename){
    this.selectedid = folderfileid;
    this.selectedname = folderfilename;
    this.UDopenpopup();
  }

  showdeleteid(){
    this.CDopenpopup();
  }

  //OPEN POPUP
  openpopup(){
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();
    this.popup = true;
    console.log(this.popup);
    setTimeout(()=>{
      this.rename.setFocus();
    },150);
  }

  UDopenpopup(){
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();
    this.UDpopup = true;
    console.log(this.UDpopup);
  }

  CDopenpopup(){
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();
    this.CDpopup = true;
    console.log(this.CDpopup);
  }

  //CLOSE POPUP
  closepopupbg(){
    this.popup = false;
    console.log(this.popup);
  }

  UDclosepopupbg(){
    this.UDpopup = false;
    console.log(this.UDpopup);
  }

  CDclosepopupbg(){
    this.CDpopup = false;
    this.UDpopup = false;
    console.log(this.CDpopup);
  }


  //CLOSE POPUP BUTTON
  closepopupbtn(){
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();
    this.popup = false;
    console.log(this.popup);
  }

  UDclosepopupbtn(){
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();
    this.UDpopup = false;
    console.log(this.UDpopup);
  }

  CDclosepopupbtn(){
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();
    this.CDpopup = false;
    this.UDpopup = false;
    console.log(this.UDpopup);
  }

  //ACTION FOR DELETING FOLDER
  delete(){
    console.log('id: '+this.selectedid+', name: '+this.selectedname);
    
    this.counting(this.selectedid);

    setTimeout(()=>{
      this.ionViewWillEnter();
    }, 240);

    this.CDpopup = false;
    this.UDpopup = false;
  }

  //ACTION FOR ADDING FOLDER
  popuprename:string = 'Untitled';
  
  addetc(){
    this.addfolderfile_folder(this.popuprename);
    
    setTimeout(()=>{
      this.ionViewWillEnter();
    }, 240);
    
    this.popup = false;

    this.popuprename = 'Untitled';
  }

  addfolderfile_folder(name){
    return new Promise(resolve => {
      let body = {
        action : 'addfolderfile_folder',
        name : name
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        resolve(true);
      });
    });
  }
  //END OF CODE

  counting(folderfileid){
    return new Promise(resolve => {
      let body = {
        action : 'deletefolderfile',
        folderfileid : folderfileid
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        this.deletelist = data;
        resolve(true);
      });
    });
  }

  deletefolder(folderfileid){
    this.counting(folderfileid);
  }

}