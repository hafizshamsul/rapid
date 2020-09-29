import { Component, OnInit, ViewChild } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ImagesProvider } from '../../providers/images/images';
import { HttpClient } from "@angular/common/http";
import { GlobalService } from "../../providers/global.service";
import { NavController } from '@ionic/angular';

import { Observable } from 'rxjs';

import * as $ from 'jquery';
import { LineUtil } from 'leaflet';
import { stringify } from 'querystring';

import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})

export class FilePage implements OnInit {



  r_username: string;
  r_folderid: string;

  users: any[];
  folders: any[];
  hiks: any = [];
  customers: any = [];

  limit: number = 10;
  start: number = 0;
  lol: String = "25 Jan 2020";

  private _SUFFIX : string = 'txt'; //database
  public image : any = 'this.image'; //database
  public isSelected : boolean =	false;
  public enter : boolean;

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
  icon: string = 'doc'; //database
  folderdata_id: number;
  
  active = "folder";
  session = sessionStorage.getItem('users-username');

  constructor(
    public navCtrl: NavController,
    public global: GlobalService, 
    private actRoute: ActivatedRoute,
    //private document: DocumentViewer,
    private previewAnyFile: PreviewAnyFile,
    public alertCtrl: AlertController, private postprovider: PostProvider, private router: Router, private _IMAGES: ImagesProvider, private http: HttpClient) {
      
    }

    folderfileid:number;
    folderfilename:string;
    filename:string;
    folderfiletype:string;
    folderfileicon:string;
    folder_id:number;
    folderfileusers_id:number;
    dateuploaded:string;
    originalname:string = 'Untitled.txt';

  ngOnInit() {
    console.log('refresh');


    this.r_username = this.actRoute.snapshot.paramMap.get('r_username');
    this.r_folderid = this.actRoute.snapshot.paramMap.get('r_folderid');
    
    

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



    this.actRoute.params.subscribe((data: any) =>{
      this.folderfileid = data.folderfileid;
      this.folderfilename = data.folderfilename;
      this.filename = data.filename;
      this.folderfiletype = data.folderfiletype;
      this.folderfileicon = data.folderfileicon;
      this.folder_id = data.folder_id;
      this.folderfileusers_id = data.folderfileusers_id;
      this.dateuploaded = data.dateuploaded;
      this.originalname  = data.originalname;
      //this.thread = data.thread;

      //console.log(data);
    });

    

    this.actRoute.params.subscribe((data: any) =>{
      this.deletelist = data;
      //this.thread = data.thread;

      //console.log(data);
    });

  }
  
  deletelist:string;

  
  tup:string = "lmao";

  selectFileToUpload(event) : void {
    //document.getElementById('uploadbutton').style.display = 'block';
    document.getElementById('uploadbtn').style.display = 'block';
    
    this.tup = event.target.files[0].name;
    this.originalname = event.target.files[0].name;
    //console.log(event.target.files[0].name);
    this._IMAGES.handleImageSelection(event).subscribe((res) => {
      //console.log(event.target.files[0].name);
      //console.log(res);
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
          this.image = res;
          
        //this.originalname = 'hehhe';
        
        this.isSelected = true;
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

    this.originalname = 'hoioi';
    this.rename = 'ehh';
    this.rename = this.originalname;

    console.log(this.originalname);
    console.log(this.rename);
    console.log(this.name);
    console.log(this.image);
    console.log(this._SUFFIX);
    console.log(this.icon);
    console.log(this.r_folderid);
    console.log(sessionStorage.getItem('users-id'));

    let body: any = {
      action : 'addfolderfile_file',
      originalname : this.originalname, //namebeforeuploaded
      rename : this.rename, //displayname
      name : this.name, //storeduniquename
      file : this.image, //actual file, not available in iOS*****
      type : this._SUFFIX, //suffix from actual file, not available in iOS*****
      icon : this.icon, //icon based on suffix from actual file, not available in iOS*****
      folder_id : this.r_folderid, //parentfolder
      users_id : sessionStorage.getItem('users-id')
    };  
  
    this._IMAGES.uploadImageSelection(body).subscribe((res) => {        
      this.displayAlert(res.message);
      this.isSelected = false;

      setTimeout(()=>{
        this.ionViewDidEnter();
      }, 240);
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
   document.getElementById('uploadbtn').style.display = 'none';
  }

   async displayAlert(message : string) {
      let alert : any = await this.alertCtrl.create({
        header 		: 'Heads up!',
        subHeader 	: message,
        buttons 	: ['Got it']
      });
      alert.present();
      document.getElementById('uploadbtn').style.display = 'none';
   }

  ionViewWillEnter(){
    

    //this.enter = false;
  }

  ionViewDidEnter(){
    this.users = [];
    this.loadUser(sessionStorage.getItem('users-username'), sessionStorage.getItem('users-passwordhash'));
    
    this.folders = [];
    this.loadFolder(sessionStorage.getItem('users-username'));

    this.hiks = [];
    this.loadFile(sessionStorage.getItem('users-username'), this.r_folderid);

    this.comments = [];
    this.loadFolderFile();

    this.customers = [];
    this.start = 0;
    
    //document.getElementById('uploadbutton').style.display = 'none';
    //this.enter = true;
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

  

  



  toBack(){
    //this.navCtrl.back( { animated: false, });
    this.navCtrl.pop();
  }

  home(){
    this.router.navigate(['/homepage']);
  }

  file(){
    this.router.navigate(['/file']);
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
        folderid: folderid
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







  comments: any[];

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
        folder_id : 999
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let comment of data.result){
          this.comments.push(comment);
        }
        
        //this.listoso = this.treeify(this.comments, 'folderfileid', 'folder_id', 'children');
        //console.log(JSON.stringify(this.listoso));
        resolve(true);
      });
    });
  }



  toHome(){
    this.navCtrl.navigateRoot(['r/home/']);
  }

  toRoom(){
    this.navCtrl.navigateRoot(['r/room/']);
  }

  toSubmitpost(){
    this.navCtrl.navigateRoot(['r/submitpost/']);
  }

  toFolder(){
    this.navCtrl.navigateRoot(['r/'+sessionStorage.getItem('users-username')+'/']);
  }

  toBookmark(){
    this.navCtrl.navigateRoot(['r/bookmark/']);
  }

  toActivity(){
    this.navCtrl.navigateRoot(['r/activity/']);
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

  toBroadcast(){
    this.navCtrl.navigateRoot(['broadcast/']);
  }

  toWatch(){
    this.navCtrl.navigateRoot(['watch/']);
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
  PDFpopup:boolean = false;
  PDFpopupnative:boolean = false;

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
    console.log('CDpopup: '+this.CDpopup);
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

  PDFclosepopupbg(){
    this.PDFpopup = false;
    console.log(this.popup);
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

  //ACTION FOR ADDING TO BOOKMARK
  addtobookmark(){
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();
    
    console.log('id: '+this.selectedid+', name: '+this.selectedname);

    this.addtobookmark_impl(this.selectedid, sessionStorage.getItem('users-id'));

    setTimeout(()=>{
      this.ionViewWillEnter();
    }, 240);

    
    this.UDpopup = false;
  }

  //ACTION FOR DELETING FOLDER
  delete(){
    console.log('id: '+this.selectedid+', name: '+this.selectedname);
    
    this.counting(this.selectedid);

    setTimeout(()=>{
      this.ionViewDidEnter();
    }, 240);

    this.CDpopup = false;
    this.UDpopup = false;

    this.popuprename = 'Untitled';
    this.currparent = '0';
  }

  //ACTION FOR ADDING FOLDER
  popuprename:string = 'Untitled';
  currparent:string = '12';

  addetc(){
  this.currparent  = this.r_folderid;
  this.addfolderfile_subfolder(this.popuprename, this.currparent);
    
    setTimeout(()=>{
      this.ionViewDidEnter();
    }, 240);
    
    this.popup = false;

    this.popuprename = 'Untitled';
    this.currparent = '0';
  }

  addfolderfile_subfolder(name, parent){
    return new Promise(resolve => {
      let body = {
        action : 'addfolderfile_subfolder',
        name : name,
        parent : parent
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        resolve(true);
      });
    });
  }

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

  //ADD TO BOOKMARK IMPLEMENTATION
  addtobookmark_impl(folderfile_id, users_id){
    return new Promise(resolve => {
      let body = {
        action : 'addbookmark',
        folderfile_id : folderfile_id,
        users_id : users_id
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        resolve(true);
      });
    });
  }

  //enter:boolean = true;

  selectit(){
    this.isSelected = true;
  }

  selectedfilename:string;
  src:any;
  srcnative:string;

  showFolder(folderfileid, folderfileicon, filename){
    //this.router.navigate(['/r/'+this.r_username +'/'+folderfileid]);
    if(folderfileicon == 'folder'){
      //this.navCtrl.navigateForward(['/r/'+this.r_username +'/'+folderfileid], { animated: false, });
      //this.router.navigateByUrl('/r/'+this.r_username +'/'+folderfileid);
      //this.navCtrl.navigateRoot(['r/'+this.r_username +'/'+folderfileid+'/']);
      this.router.navigate(['r/'+this.r_username +'/'+folderfileid+'/']);
    }
    else{
      this.selectedfilename = filename;
      this.src = "http://192.168.0.138/rapidkl/rapid/web/viewer.html?file=/rapidkl/rapid/upload_api/uploads/"+this.selectedfilename;
      this.srcnative = "http://192.168.0.138/rapidkl/rapid/upload_api/uploads/"+this.selectedfilename;

      if (matchMedia('only screen and (max-width: 576px)').matches) {
        this.PDFpopupnative = true;
        console.log(this.selectedfilename);
        this.previewAnyFile.preview(this.srcnative)
          .then((res: any) => console.log(res))
          .catch((error: any) => console.error(error));
        }
      else{
        this.PDFpopup = true;
      }
      
      
    }
    
  }



  target:string = "eh";



  tar(event: any){
    this.target = event.target.value;
    console.log(event.target.value);
  }


}