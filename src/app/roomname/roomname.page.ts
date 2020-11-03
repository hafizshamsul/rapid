import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ImagesProvider } from '../../providers/images/images';
import { HttpClient } from "@angular/common/http";
import { GlobalService } from "../../providers/global.service";
import { NavController } from '@ionic/angular';
import { QuillModule } from 'ngx-quill';
import { FormGroup, FormControl } from '@angular/forms';
import { MyNavService } from "../..//providers/mynavservice.service";

import { Observable } from 'rxjs';

import * as $ from 'jquery';
import 'select2';
//import { Select2 } from 'select2';

import { LineUtil } from 'leaflet';
import { stringify } from 'querystring';

import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { ExecFileOptionsWithStringEncoding } from 'child_process';
import { distinct } from 'rxjs/operators';

@Component({
  selector: 'app-roomname',
  templateUrl: './roomname.page.html',
  styleUrls: ['./roomname.page.scss'],
})



export class RoomnamePage implements OnInit {


  r_username: string;
  r_folderid: string;

  users: any[];
  folders: any[];
  hiks: any = [];
  rooms: any[];
  currentrooms: any[];
  members: any[];
  nonmembers: any[];
  customers: any = [];
  tasks: any[];

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

  taskid: number;
  taskname: string;
  taskstart: string;
  taskend: string;
  
  visibleDocs:boolean;

  active = "room";
  session = sessionStorage.getItem('users-username');

  constructor(
    public navCtrl: NavController,
    public global: GlobalService, 
    private actRoute: ActivatedRoute,
    //private document: DocumentViewer,
    private previewAnyFile: PreviewAnyFile,
    //public select2: Select2,
    public myNavService: MyNavService,
    public alertCtrl: AlertController, private postprovider: PostProvider, private router: Router, private _IMAGES: ImagesProvider, private http: HttpClient) {
      
    }

    commentid: number;
    title: string;
    textcmt: string;
    post_users_id: number;
    replyto: number;
    post_username: string;
    post_dateuploaded: string;
    vote: number;

    tagcommentid: number;
    comment_id: number;
    tag_id: number;
    tag_tagname: string;

    folderfileid:number;
    folderfilename:string;
    filename:string;
    folderfiletype:string;
    folderfileicon:string;
    folder_id:number;
    folderfileusers_id:number;
    dateuploaded:string;
    originalname:string = 'Untitled.txt';

    tblroom_id:number;
    tblroom_name:string;
    tblroom_description:string;

    currentroom_id:number;
    currentroom_name:string;
    currentroom_description:string;
    currentroom_role:string;

    members_id:number;
    members_username:string;
    members_displayname:string;
    members_role:string;

    nonmembers_id:number;
    nonmembers_username:string;
    nonmembers_displayname:string;
    nonmembers_role:string;

    r_tblroom_id:any;

    cardcolors:any = [
      {
        "color": "#ed6b52"
      },
      {
        "color": "#7962aa"
      },
      {
        "color": "#e8305f"
      },
      {
        "color": "#8fa3ae"
      },
      {
        "color": "#005b92"
      },
      {
        "color": "#8f51d5"
      },
    ]

    clickPosts(){
      //tab
      document.getElementById('postsVisible').style.display = 'block'; //active
      document.getElementById('docsVisible').style.display = 'none';
      document.getElementById('projsVisible').style.display = 'none';
      document.getElementById('membsVisible').style.display = 'none';

      //menu
      document.getElementById('menuPosts').style.color = '#4b46b5'; //active
      document.getElementById('menuDocs').style.color = 'rgb(90,90,90)';
      document.getElementById('menuProjs').style.color = 'rgb(90,90,90)';
      document.getElementById('menuMembs').style.color = 'rgb(90,90,90)';
    }

    clickDocs(){
      //tab
      document.getElementById('docsVisible').style.display = 'block'; //active
      document.getElementById('projsVisible').style.display = 'none';
      document.getElementById('postsVisible').style.display = 'none';
      document.getElementById('membsVisible').style.display = 'none';

      //menu
      document.getElementById('menuDocs').style.color = '#4b46b5'; //active
      document.getElementById('menuPosts').style.color = 'rgb(90,90,90)';
      document.getElementById('menuProjs').style.color = 'rgb(90,90,90)';
      document.getElementById('menuMembs').style.color = 'rgb(90,90,90)';
    }

    clickProjs(){
      //tab
      document.getElementById('projsVisible').style.display = 'block'; //active
      document.getElementById('docsVisible').style.display = 'none';
      document.getElementById('postsVisible').style.display = 'none';
      document.getElementById('membsVisible').style.display = 'none';
      
      //menu
      document.getElementById('menuProjs').style.color = '#4b46b5'; //active
      document.getElementById('menuDocs').style.color = 'rgb(90,90,90)';
      document.getElementById('menuPosts').style.color = 'rgb(90,90,90)';
      document.getElementById('menuMembs').style.color = 'rgb(90,90,90)';
    }

    clickMembs(){
      //tab
      document.getElementById('membsVisible').style.display = 'block'; //active
      document.getElementById('docsVisible').style.display = 'none';
      document.getElementById('postsVisible').style.display = 'none';
      document.getElementById('projsVisible').style.display = 'none';
      
      //menu
      document.getElementById('menuMembs').style.color = '#4b46b5'; //active
      document.getElementById('menuDocs').style.color = 'rgb(90,90,90)';
      document.getElementById('menuPosts').style.color = 'rgb(90,90,90)';
      document.getElementById('menuProjs').style.color = 'rgb(90,90,90)';
    }

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

hop:any;

    doto:any;

  displayAddedMemberId(){
    var a = $("#selectmember").val();
    console.log(a);
    this.addRoom(a);
    
  }

  addRoom(users_id){
    return new Promise(resolve => {
      let body = {
        action : 'addroomusers',
        users_id : users_id,
        room_id : this.r_tblroom_id
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        resolve(true);
      });

      setTimeout(()=>{
        this.navCtrl.navigateRoot(['r/room/']);
      },240);
      
    });
  }

  task_name:any;

  //ACTION FOR ADDING TASK
  addtask(){
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();
    
    //console.log('id: '+this.selectedid+', name: '+this.selectedname);
    console.log(this.task_name);

    this.addtask_impl(this.task_name);

    setTimeout(()=>{
      this.ionViewDidEnter();
    }, 240);

    this.UDpopup = false;

    this.task_name = '';
  }

  addtask_impl(task_name){
    return new Promise(resolve => {
      let body = {
        action : 'addtaskroom',
        task_name : task_name,
        room_id : this.r_tblroom_id
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        //this.deletelist = data;
        resolve(true);
      });
    });
  }

  ngOnInit() {
    this.r_tblroom_id = this.actRoute.snapshot.paramMap.get('r_tblroom_id');

    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    });

      

    //tab
    document.getElementById('postsVisible').style.display = 'block'; //active
    document.getElementById('docsVisible').style.display = 'none';
    document.getElementById('projsVisible').style.display = 'none';
    document.getElementById('membsVisible').style.display = 'none';
    
    $('#selectmember').select2({
      placeholder: "Add room members..",
    });

    /*
    $('#selectmember').on('select2:select', function (e) {
      var data = e.params.data;
      var diti = e.params.data.id;
      console.log(diti);
    });*/


    this.r_username = this.actRoute.snapshot.paramMap.get('r_username');
    this.r_folderid = this.actRoute.snapshot.paramMap.get('r_folderid');
    
    this.actRoute.params.subscribe((data: any) =>{
      this.tblroom_id = data.tblroom_id;
      this.tblroom_name = data.tblroom_name;
      this.tblroom_description = data.tblroom_description;
    });

    this.actRoute.params.subscribe((data: any) =>{
      this.currentroom_id = data.currentroom_id;
      this.currentroom_name = data.currentroom_name;
      this.currentroom_description = data.currentroom_description;
      this.currentroom_role = data.currentroom_role;
    });

    this.actRoute.params.subscribe((data: any) =>{
      this.members_id = data.members_id;
      this.members_username = data.members_username;
      this.members_displayname = data.members_displayname;
      this.members_role = data.members_role;
    });
    
    this.actRoute.params.subscribe((data: any) =>{
      this.nonmembers_id = data.nonmembers_id;
      this.nonmembers_username = data.nonmembers_username;
      this.nonmembers_displayname = data.nonmembers_displayname;
      this.nonmembers_role = data.nonmembers_role;
    });
    

    this.actRoute.params.subscribe((data: any) =>{
      this.userid = data.id;
      this.username = data.username;
      this.passwordhash = data.passwordhash;
      this.displayname = data.displayname;
      console.log(data);
    });

    this.actRoute.params.subscribe((data: any) =>{
      this.tagcommentid = data.tagcommentid;
      this.comment_id = data.comment_id;
      this.tag_id = data.tag_id;
      this.tag_tagname = data.tag_tagname;

      //console.log(data);
    });
    
    this.actRoute.params.subscribe((data: any) =>{
      this.folderid = data.folderid;
      this.foldername = data.foldername;
      this.description = data.description;
      this.post_users_id = data.users_id;
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
      this.taskid = data.taskid;
      this.taskname = data.taskname;
      this.taskstart = data.taskstart;
      this.taskend = data.taskend;
    });

    

    this.actRoute.params.subscribe((data: any) =>{
      this.deletelist = data;
      //this.thread = data.thread;

      //console.log(data);
    });

    this.actRoute.params.subscribe((data: any) =>{
      this.commentid = data.commentid;
      this.users_id = data.users_id;
      this.title = data.title;
      this.textcmt = data.textcmt;
      this.replyto = data.replyto;
      this.post_username = data.username;
      this.post_dateuploaded = data.dateuploaded;
      this.vote = data.vote;
      //this.thread = data.thread;

      //console.log(data);
    });

    this.actRoute.params.subscribe((data: any) =>{
      this.tagcommentid = data.tagcommentid;
      this.comment_id = data.comment_id;
      this.tag_id = data.tag_id;
      this.tag_tagname = data.tag_tagname;

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

    //this.originalname = 'hoioi';
    //this.rename = 'ehh';
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
      users_id : sessionStorage.getItem('users-id'),
      r_tblroom_id : this.r_tblroom_id
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

    this.rooms = [];
    this.loadRoom(sessionStorage.getItem('users-id'));
    
    this.currentrooms = [];
    this.loadCurrentRoom(sessionStorage.getItem('users-id'), this.r_tblroom_id);

    this.members = [];
    this.loadMembers(this.r_tblroom_id);

    this.nonmembers = [];
    this.loadNonMembers(this.r_tblroom_id);

    this.tasks = [];
    this.loadTask();

    this.customers = [];
    this.start = 0;

    console.log(this.rooms);
    console.log(this.jo);

    this.zcomments = [];
    this.tagcomments = [];
    this.loadPost(this.topdate, this.r_tblroom_id);
    this.loadTagComment();
    
    //document.getElementById('uploadbutton').style.display = 'none';
    //this.enter = true;
  }

  jo:any=[
    {
      "tblroom_description" : "lol",
      "tblroom_id": "1",
      "tblroom_name": "Real-Time and Embedded"
    },
    {
      "tblroom_description" : "lol",
      "tblroom_id": "2",
      "tblroom_name": "Real-Time and Embedded"
    },
    {
      "tblroom_description" : "lol",
      "tblroom_id": "3",
      "tblroom_name": "Real-Time and Embedded"
    },
    {
      "tblroom_description" : "lol",
      "tblroom_id": "4",
      "tblroom_name": "Real-Time and Embedded"
    },
    {
      "tblroom_description" : "lol",
      "tblroom_id": "5",
      "tblroom_name": "Real-Time and Embedded"
    }
  ];

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
  zcomments: any[];

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
  zlistoso:any[];

  loadFolderFile(){
    return new Promise(resolve => {
      let body = {
        action : 'getroomfolderfile',
        r_tblroom_id : this.r_tblroom_id
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

  listosotask:any[];

  loadTask(){
    return new Promise(resolve => {
      let body = {
        action : 'gettaskroom',
        room_id : this.r_tblroom_id
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let task of data.result){
          this.tasks.push(task);
        }
        //this.listosobookmark = this.treeify(this.comments, 'folderfileid', 'folder_id', 'children');
        //console.log(JSON.stringify(this.listoso));
        this.listosotask = this.tasks;
        
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
  this.addfolderfile_subfolder(this.popuprename, this.currparent, this.r_tblroom_id);
    
    setTimeout(()=>{
      this.ionViewDidEnter();
    }, 240);
    
    this.popup = false;

    this.popuprename = 'Untitled';
    this.currparent = '0';
  }

  addfolderfile_subfolder(name, parent, r_tblroom_id){
    return new Promise(resolve => {
      let body = {
        action : 'addroomfolderfile_subfolder',
        name : name,
        parent : parent,
        r_tblroom_id : r_tblroom_id
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
      this.router.navigate(['r/room/'+this.r_tblroom_id +'/'+folderfileid+'/']);
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


  loadRoom(usersid){
    return new Promise(resolve => {
      let body = {
        action : 'getroom',
        usersid : usersid
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let room of data.result){
          this.rooms.push(room);
        }
        resolve(true);
      });
    });
  }

  loadCurrentRoom(usersid, roomid){
    return new Promise(resolve => {
      let body = {
        action : 'getcurrentroom',
        usersid : usersid,
        roomid : roomid
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let currentroom of data.result){
          this.currentrooms.push(currentroom);
        }
        resolve(true);
      });
    });
  }

  loadMembers(roomid){
    return new Promise(resolve => {
      let body = {
        action : 'getmembers',
        roomid : roomid
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let member of data.result){
          this.members.push(member);
        }
        resolve(true);
      });
    });
  }

  loadNonMembers(roomid){
    return new Promise(resolve => {
      let body = {
        action : 'getnonmembers',
        roomid : roomid
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let nonmember of data.result){
          this.nonmembers.push(nonmember);
        }
        resolve(true);
      });
    });
  }

  loadPost(topdate, r_tblroom_id){
    return new Promise(resolve => {
      let body = {
        //action : 'getpost',
        action : 'getroompost',
        topsort : topdate,
        r_tblroom_id : r_tblroom_id
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let zcomment of data.result){
          this.zcomments.push(zcomment);
        }
        this.zlistoso = this.ztreeify(this.zcomments, 'commentid', 'replyto', 'children');
        //console.log(JSON.stringify(this.listoso));
        resolve(true);
      });
    });
  }

  ztreeify(listo, idAttr, parentAttr, childrenAttr) {
    if (!idAttr) idAttr = 'commentid';
    if (!parentAttr) parentAttr = 'replyto';

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

  topdatearray:any = [
    {
      'value': 'today',
      'menu': 'Today',
      'selected': false
    },
    {
      'value': 'week',
      'menu': 'This week',
      'selected': false
    },
    {
      'value': 'month',
      'menu': 'This month',
      'selected': false
    },
    {
      'value': 'year',
      'menu': 'This year',
      'selected': true
    },
    {
      'value': 'alltime',
      'menu': 'All time',
      'selected': false
    }
  ];

  toppostpressed: boolean = false;

  topdate:string = 'month';
  topdatestring:string = 'THIS MONTH';
  topsortedby(topdate){
    //this.topdate = 'alltime';
    this.topdate = topdate;
    this.toppostpressed = false;

    for(let item of this.topdatearray){
      if(item.value == topdate){
        item.selected = true;
      }
      else if(item.value != topdate){
        item.selected = false;
      }
    }

    if(this.topdate == 'today'){
      this.topdatestring = 'POST TODAY';
    }
    else if(this.topdate == 'week'){
      this.topdatestring = 'THIS WEEK';
    }
    else if(this.topdate == 'month'){
      this.topdatestring = 'THIS MONTH';
    }
    else if(this.topdate == 'year'){
      this.topdatestring = 'THIS YEAR';
    }
    else if(this.topdate == 'alltime'){
      this.topdatestring = 'ALL TIME';
    }
    
    this.comments = [];
    this.tagcomments = [];
    this.loadPost(this.topdate, this.r_tblroom_id);
    this.loadTagComment();
  }

  editorForm: FormGroup;
  editorContent: string; //textcmt
  getTitle:string = '';

  maxLength(e){
    if(e.editor.getLength() > 1000){
      e.editor.deleteText(10, e.editor.getLength());
    }
  }

  onSubmit(){
    this.editorContent = this.editorForm.get('editor').value;
    console.log("comment.users_id: "+sessionStorage.getItem('users-id'));
    console.log("comment.title: "+this.getTitle);

    console.log(this.editorForm.get('editor').value);
    
    return new Promise(resolve => {
      let body = {
        action : 'newaddroompost',
        users_id: sessionStorage.getItem('users-id'),
        title: this.getTitle,
        textcmt: this.editorContent,
        r_tblroom_id : this.r_tblroom_id,
        jsond: "{\'id\''}"
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        
      });

      this.getTitle = '';
      this.editorForm.get('editor').setValue('');
      
      setTimeout(()=>{
        this.ionViewDidEnter();
      }, 240);

    }
    
    );
    
  }


  locs: any = {
    "id": 0,
    "title": "lel",
    "textcmt": "lel",
    "tags": ["hur"],
    "tagsname": ["hur"],
    "generaltags":{"tagid": 0, "tagname": "hur"},
    "newtags":{"tagid": 0, "tagname": "hur"}
  }

  collecttag: any=[];
  collecttagname: any=[];
  collectnewtags: any=[];

  tagcomments: any[];

  public async toEdit(commentid, title, textcmt){
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();

    this.locs.id = commentid;
    this.locs.title = title;
    this.locs.textcmt = textcmt;

    for(let tagcomment of this.tagcomments){
      /*if(tagcomment.comment_id==commentid){
        //console.log('ehhhhhhhhhhh'+tagcomment.tag_id);
        //console.log('ehhhhhhhhhhh'+tagcomment.tag_tagname);
        this.collecttag.push(tagcomment.tag_id);
        this.collecttagname.push(tagcomment.tag_tagname);
        this.collectnewtags.push({"tagid": tagcomment.tag_id, "tagname": tagcomment.tag_tagname});
      }*/
    }
    /*console.log(this.collecttag);
    console.log(this.collecttagname);
    console.log(this.collectnewtags);*/

    this.locs.tags = this.collecttag;
    this.locs.tagsname = this.collecttagname;
    this.locs.generaltags.tagid = this.collecttag;
    this.locs.generaltags.tagname = this.collecttagname;
    this.locs.newtags = this.collectnewtags;

    this.myNavService.myParam = {locs:this.locs};
    //await this.navCtrl.goForward('/map-page');
    
    this.collecttag =[];
    this.collecttagname =[];
    this.collectnewtags =[];

    this.router.navigateByUrl('/r/home/editpost');
    //this.navCtrl.navigateRoot(['/r/editpost']);

    //this.router.navigate(['editpost/']);
    //this.router.navigateByUrl('/editpost', { state: { hello: 'world' } });
  }

  async presentAlertMultipleButtons(r_thread) {
    let leh: number = r_thread;

    //event.cancelBubble = true;
    //if(event.stopPropagation) event.stopPropagation();

    const alert = await this.alertCtrl.create({
      header: 'Delete Post',
      message: 'Are you sure you want to delete this post?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Delete',
          handler: (r_thread) => {
            this.deletePost(leh);

          }
        }
      ]
    });

    await alert.present();
  }

  deletePost(r_thread){
    return new Promise(resolve => {
      let body = {
        action : 'deletepost',
        commentid : r_thread
      };
      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let zcomment of data.result){
          this.zcomments.push(zcomment);
        }
        this.listoso = this.treeify(this.zcomments, 'commentid', 'replyto', 'children');
        console.log('Delete is clicked');
        //this.zcomments = [];
        //this.tagcomments = [];
        //this.loadPost(this.topdate);
        //this.loadTagComment();
        setTimeout(()=>{
          this.ionViewDidEnter();
        }, 240);
        resolve(true);
      });
    });
  }

  subsrcibedatafirst(body){
    this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let tagcomment of data.result){
          //if(tagcomment.comment_id == 10){
            this.tagcomments.push(tagcomment);
          //}
        }
      }); 
  }
  subsrcibedatalater(body){
    
    this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        this.tagcomments = [];
        for(let tagcomment of data.result){
          //if(tagcomment.comment_id == 10){
            this.tagcomments.push(tagcomment);
          //}
        }
      }); 
  }

  loadTagComment(){
    return new Promise(resolve => {
      let body = {
        action : 'gettagcomment'
      };
      this.subsrcibedatafirst(body);
      
      /*this.interval = setInterval(() => { 
        this.subsrcibedatalater(body); 
      }, 1000);*/
    });
  }

  

}


